import styled from "styled-components";

export default function TextSection() {
  return (
    <Wrapper>
      <Title>Metamask Logger</Title>
      <Description>The Fox will guide you!</Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  max-width: 380px;
  display: grid;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
  padding: 20px 20px 10px;
`;

const Title = styled.h1`
  
  font-style: normal;
  align-text: center;
  font-weight: bold;
  padding-bottom:5px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border-radius: 50px;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.5);
  font-size: 40px;
`;

const Description = styled.p`
  max-width: 240px;
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0 auto;
`;
