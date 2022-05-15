import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "../src/components/Web3/frontend/hooks/connector/connector";
import  CryptoContext  from "./CryptoContext"

function App() {
  return (
    <div className="App">
      <Web3ReactProvider getLibrary={getLibrary}>
        <CryptoContext>
          <Main />
        </CryptoContext>
      </Web3ReactProvider>
    </div>
  );
}

export default App;
