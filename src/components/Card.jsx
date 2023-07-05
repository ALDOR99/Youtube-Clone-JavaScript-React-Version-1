import React from "react";
import styled from "@emotion/styled";
// -----------------------------
const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;
const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500px;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

// -----------------------------
const Card = () => {
  return (
    <Container>
      <Image src="https://pbs.twimg.com/media/BiXeXKSCUAAnj6E.jpg:large" />
      <Details>
        <ChannelImage src="https://i.pinimg.com/564x/db/2f/01/db2f0146a810483a3852132257cfde35.jpg" />
        <Texts>
          <Title>Test Video</Title>
          <ChannelName>Alis Dev</ChannelName>
          <Info>660,908 views • 1 day ago</Info>
        </Texts>
      </Details>
    </Container>
  );
};
// -----------------------------
export default Card;
