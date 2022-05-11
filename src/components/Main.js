// import "../../styles.css";
import styled from "styled-components";

import { Suspense } from "react";

import Background from "./Background";
import TextSection from "./TextSection";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Fox from "./Fox";

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 500px;
  }
`;

export default function Main() {
  return (
    <Wrapper className="Main">
      <Background />
      <TextSection />
      <Canvas clasName="canvas">
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Fox />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}
