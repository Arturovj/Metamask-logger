// import "../../styles.css";
import styled from "styled-components";
import "./button.scss";

import { Suspense, useState, useEffect, useCallback } from "react";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import useTruncatedAddress from "./Web3/frontend/hooks/useTruncatedAddress";
import { connector } from "./Web3/frontend/hooks/connector/connector";

import Background from "./Background";
import TextSection from "./TextSection";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Fox from "./Fox";
// import Carousel from "./Carousel/Carousel";

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 300px;
  }
`;

export default function Main() {
  const [action, setAction] = useState("Idle");
  const [actives, setActives] = useState(false);

  const [balance, setBalance] = useState(0);
  const { active, activate, deactivate, account, error, library } =
    useWeb3React();
  const isUnsupportedChain = error instanceof UnsupportedChainIdError;

  const connect = useCallback(() => {
    console.log("connect");
    activate(connector);
    window.localStorage.setItem("previouslyConnected", "true");
  }, [activate]);

  const disconnect = () => {
    deactivate();
    window.localStorage.removeItem("previouslyConnected");
  };

  const handleClick = () => {
    if (!actives && !active) {
      connect();
      setAction("Run");
      setActives(true);
    } else {
      disconnect();
      setAction("Sleep");
      setActives(false);
    }
  };

  useEffect(() => {
    library?.getBalance(account).then((result) => {
      setBalance(result / 1e18);
    });
  }, []);

  const getBalance = useCallback(async () => {
    const toSet = await library.eth.getBalance(account);
    setBalance((toSet / 1e18).toFixed(2));
  }, [library?.eth, account]);

  console.log(getBalance);

  useEffect(() => {
    if (active) getBalance();
  }, [active, getBalance]);

  useEffect(() => {
    if (window.localStorage.getItem("previouslyConnected") === "true") {
      connect();
      setAction("Run");
      setActives(true);
    }
  }, [connect]);

  const truncatedAddress = useTruncatedAddress(account);

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
      {/* <div className="carousel">
          <Carousel/>
      </div> */}
      <div className="metamask-account">
        {active && <span>{truncatedAddress}</span>}
      </div>

      <div className="balance-account"
      >{active && <span>Balance: {balance} ETH</span>}
      </div>

      <div className="buttons">
        <button className="dog-button" style={{ cursor: "pointer" }} onClick={handleClick}>
          {actives && active ? <p>Disconnect</p> : <p>Connect</p>}

          {/* {active ? <p>Disconnect</p> : <p>Connect</p>} */}
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
