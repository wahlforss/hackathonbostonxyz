// react boilerplat component
import React from "react";
import styled from "styled-components";
// import images

// Style the Button component
const images = {
  image1: {
    image:
      "https://i.postimg.cc/0QgQd7xz/0c7c8736-354d-4d87-905b-a3ef1025c71f.png",
    percentage: "97.6",
  },

  image2: {
    image:
      "https://i.postimg.cc/j5zj8CdZ/3ad47760-5a79-449a-beb0-fbfd49c43f6e.png",
    klayAdress: "0xce146236fe4e48240cd8f7d22c38c07c7a6bab0b",
  },
  image3: {
    image:
      "https://i.postimg.cc/7YBZtFw8/45952a13-2d7b-481f-8dae-61faf56ec585.png",
    klayAdress: "0x8b0b1b0e1e1b5b1b1b1b1b1b1b1b1b1b1b1b1b1b",
  },
  image4: {
    image:
      "https://i.postimg.cc/MHqpgxnx/5ff51de9-57d8-455e-94da-05498d45a07d.png",
    klayAdress: "0x8b0b1b0e1e1b5b1b1b1b1b1b1b1b1b1b1b1b1b1b",
  },
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// Mainimage component
const MainImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Contributors = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ContributorImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const ContributorHash = styled.div`
  font-size: 12px;
  width: 100px;
  // elipsis
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

const ContributorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const PromptText = styled.div`
  font-size: 1.2rem;

  margin-bottom: 20px;
`;

const ContributorText = styled.div`
  font-size: 1em;
  margin-bottom: 20px;
`;

const Images = (props) => {
  console.log(props);
  // input state
  return (
    <Wrapper>
      <PromptText>
        This is the image you generated. It has been sent to your wallet as an
        NFT.
      </PromptText>
      <MainImage src={images.image1.image} />
      <ContributorText>
        {images.image1.percentage}% of the neural network weights were generated
        through these training data images. The contributors have been
        compensated through Klay.
      </ContributorText>
      <Contributors>
        <ContributorWrapper>
          <ContributorImage src={props.state.data[0]} />
          <ContributorHash>{images.image2.klayAdress}</ContributorHash>
        </ContributorWrapper>
        <ContributorWrapper>
          <ContributorImage src={props.state.data[1]} />
          <ContributorHash>{images.image3.klayAdress}</ContributorHash>
        </ContributorWrapper>
        <ContributorWrapper>
          <ContributorImage src={props.state.data[2]} />
          <ContributorHash>{images.image4.klayAdress}</ContributorHash>
        </ContributorWrapper>
      </Contributors>
    </Wrapper>
  );
};

export default Images;
