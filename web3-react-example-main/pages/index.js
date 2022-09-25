import React from "react";
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { injected } from "../components/wallet/connectors";
import FileUploader from "../components/fileUploader";
import GenerateImage from "../components/GenerateImage";
import Loading from "../components/Loading";
import Images from "../components/Images";
const Web3 = require("web3");
import styled from "styled-components";
import abi from "./abi.json";

const H1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Button = styled.button`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 6px;
  background-color: #dfafa9;
  color: #fff;
  font-size: 1.2rem;
  padding: 20px;
  margin-top: 20px;
`;

const accounts = [
  "0x9eFc3A249Ae7DEBB82CB8e38eFCb3834B8DF0EE7",
  "0xa5Be36785C37153e61947120B6F653B696f0E289",
  "0x130a25C48C84ff6a86370BfD217a4337Cb9b581f",
];

export default function Home() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  useEffect(() => {
    console.log("account", account, "isnde");
    console.log(library, "lib");
  }, [account]);

  const [state, setState] = React.useState({
    pageState: "login",
  });

  async function connect() {
    try {
      await activate(injected);
      localStorage.setItem("isWalletConnected", true);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", false);
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(injected);
          localStorage.setItem("isWalletConnected", true);
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {state.pageState === "login" && (
        <Wrapper>
          <H1>AI generated images in a fair way!</H1>
          {!active && (
            <button
              onClick={connect}
              className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800"
            >
              Connect to MetaMask
            </button>
          )}
          {active && <FileUploader handleFile={(file) => console.log(file)} />}
          {active ? (
            <span>
              Connected with <b>{account}</b>
            </span>
          ) : (
            <span>Not connected</span>
          )}
          {active && <Button onClick={disconnect}>Disconnect</Button>}

          {active && (
            <Button
              style={{ backgroundColor: "#00f062" }}
              onClick={() => setState({ pageState: "generateImage" })}
            >
              Generate an image
            </Button>
          )}
        </Wrapper>
      )}

      {state.pageState === "generateImage" && (
        <GenerateImage setState={setState} />
      )}

      {state.pageState === "loading" && <Loading />}
      {state.pageState === "showPic" && <Images state={state} />}
    </div>
  );
}
