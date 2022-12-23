
import logo from './logo.svg';
import './App.css';

import { useConnectWallet } from '@web3-onboard/react'

function App() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => connect()}>connect</button>
      </header>
    </div>
  );
}

export default App;
