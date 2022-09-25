// react boilerplat component
import React from "react";
import styled from "styled-components";
import { Blocks } from "react-loader-spinner";

// Style the Button component

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

const Loading = (props) => {
  // input state
  return (
    <Wrapper>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </Wrapper>
  );
};

export default Loading;
