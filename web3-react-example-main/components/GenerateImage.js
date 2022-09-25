// react boilerplat component
import React from "react";
import styled from "styled-components";
import stableDiffusionCall from "../pages/api/stableDiffusionCall";
import { useWeb3React } from "@web3-react/core";
const Web3 = require("web3");
import abi from "../pages/abi.json";

const accounts = [
  "0x9eFc3A249Ae7DEBB82CB8e38eFCb3834B8DF0EE7",
  "0xa5Be36785C37153e61947120B6F653B696f0E289",
  "0x130a25C48C84ff6a86370BfD217a4337Cb9b581f",
];

// Style the Button component

const Button = styled.button`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 6px;
  background-color: #00f062;
  color: #fff;
  font-size: 1.2rem;
  padding: 20px;
`;

const Input = styled.input`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 6px;
  margin-right: 20px;
  height: 70px;
  width: 600px;
  padding: 20px;
  font-size: 1.2rem;
  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const MiniWrapper = styled.div`
  display: flex;
`;

const GenerateImage = (props) => {
  // input state
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const [input, setInput] = React.useState("");
  return (
    <Wrapper>
      <MiniWrapper>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button
          onClick={() => {
            if (library) {
              const web3 = new Web3(library.currentProvider);
              const contract = new web3.eth.Contract(
                abi,
                "0x7A7502F12e91666f0B7DbcE5A86521919dB3f588"
              );
              console.log(contract);
              // stableDiffusionCall(input, props.setState);
              contract.methods
                .sendFunds(accounts[0], accounts[1], accounts[2])
                .send(
                  { from: account, value: "1000000000000000000" },
                  function (err, res) {
                    if (err) {
                      console.log("An error occured", err);
                      return;
                    }
                    props.setState({
                      pageState: "loading",
                    });
                    console.log("Hash of the transaction: " + res);
                  }
                )
                .on("receipt", function () {
                  stableDiffusionCall(input, props.setState);
                });
            }

            // send a request to a smart contract with the hash 0x7A7502F12e91666f0B7DbcE5A86521919dB3f588
            // and the input text as the message
          }}
        >
          Generate Image (cost 1 Klay)
        </Button>
      </MiniWrapper>
    </Wrapper>
  );
};

export default GenerateImage;
