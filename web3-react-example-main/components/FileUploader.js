import React from "react";
import styled from "styled-components";
// Style the Button component
const Button = styled.button`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 6px;
  background-color: #00f062;
  color: #fff;
  font-size: 1.2rem;
  padding: 20px;
  margin-bottom: 20px;
`;
const FileUploader = (props) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <>
      <Button onClick={handleClick}>
        Contribute training data and get rewarded
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  );
};
export default FileUploader;
