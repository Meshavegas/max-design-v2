"use client";
import React from "react";
import NbClients from "./mini/nbClients";
import styled, { keyframes, css } from "styled-components";
import { partenaire } from "../modele/modele";

const Partenaires = (props: { partern: partenaire[] }) => {
  const { partern } = props;

  return (
    <div>
      <div className=" flex gap-4 flex-wrap  items-center justify-center  ">
        <NbClients nombre={104} type="Clients" classname="w-1/3 md:w-1/5" />
        <NbClients nombre={104} type="Projects " classname="w-1/3 md:w-1/5" />
      </div>
      <div className=" border-b border-b-orange mt-2"></div>
      <AppContainer>
        <Wrapper>
          <Text> Nos Partenaires</Text>
          <Note>Ceux avec qui nous colaborons sainement</Note>
          <Marquee>
            <MarqueeGroup>
              {partern.map((el, key) => (
                <ImageGroup key={key}>
                  <Image src={el.logo} alt="image" />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {partern.map((el, key) => (
                <ImageGroup key={key}>
                  <Image src={el.logo} alt="image" />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
          <Marquee>
            <MarqueeGroup2>
              {partern.map((el, key) => (
                <ImageGroup key={key}>
                  <Image src={el.logo} alt="image" />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
            <MarqueeGroup2>
              {partern.map((el, key) => (
                <ImageGroup key={key}>
                  <Image src={el.logo} alt="image" />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
          </Marquee>
        </Wrapper>
      </AppContainer>
    </div>
  );
};

export default Partenaires;

const AppContainer = styled.div`
  width: 100%;
  color: #000000;
  overflow-x: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
