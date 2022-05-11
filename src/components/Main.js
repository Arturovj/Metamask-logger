// import "../../styles.css";
import styled from "styled-components";
import "./button.css";

import { Suspense, useState } from "react";

import Background from "./Background";
import TextSection from "./TextSection";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Fox from "./Fox";

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 300px;
  }
`;

export default function Main() {
  const [action, setAction] = useState("Idle");
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (!active) {
      setAction("Run");
      setActive(true);
    } else if (active){
       setAction("Sleep");
       setActive(false);
    } else {
        setAction("Idle")
        setActive(null);
    }
    
  };

  return (
    <>
      <Wrapper className="Main">
        <Background />

        <TextSection />

        <Canvas clasName="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <Fox action={action} />
          </Suspense>
        </Canvas>
      </Wrapper>

      <div className="buttons">
        <button style={{ cursor: "pointer" }} onClick={handleClick}>
          {active ? <p>Disconnect</p> : <p>Connect</p>}
        </button>
      </div>
    </>
  );
}

{
  /* <button
          onClick={() => {
            setAction("Run");
          }}
        >
          Connect
        </button>
        <button
          onClick={() => {
            setAction("Sleep");
          }}
        >
          Disconnect
        </button> */
}
