import logo from './dash.png';
import './App.css';
import { KeepKeySdk } from '@keepkey/keepkey-sdk'
import {
    useState,
    useEffect,
} from 'react';

let pioneerApi = require("@pioneer-platform/pioneer-client")
const coinSelect = require('coinselect')


function App() {
    const [address, setAddress] = useState('')
    const [balance, setBalance] = useState('0.000')

    let onStart = async function(){
        try{
            const configPioneer = {
                queryKey:'sdk:2d0ec79c-6733-4235-9b09-9b87171edc16',
                username:"bitcoin-example-keepkey",
                //spec:"https://pioneers.dev/spec/swagger.json"
                spec:"http://localhost:9001/spec/swagger.json"
            }
            let pioneer = new pioneerApi(configPioneer.spec,configPioneer)
            pioneer = await pioneer.init()
            console.log("checkpoint1")

            // let globals = await pioneer.Globals()
            // console.log("globals",globals.data)

            let spec = 'http://localhost:1646/spec/swagger.json'
            let apiKey = localStorage.getItem("apiKey");
            let config = {
                apiKey: apiKey || 'test-123',
                pairingInfo:{
                    name: process.env['SERVICE_NAME'] || 'DASH',
                    imageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://assets.coincap.io/assets/icons/dash@2x.png',
                    basePath:spec
                }
            }

            //init
            let sdk = await KeepKeySdk.create(config)
            console.log("config: ",config.apiKey)
            console.log("checkpoint2")

            let path =
                    {
                        symbol: 'DASH',
                        address_n: [0x80000000 + 44, 0x80000000 + 5, 0x80000000 + 0],
                        coin: 'Bitcoin',
                        script_type: 'p2pkh',
                        showDisplay: false
                    }



            let responsePubkey = await sdk.system.info.getPublicKey(path)
            console.log("responsePubkey: ", responsePubkey)
            console.log("responsePubkey: ", responsePubkey.xpub)

            //get balance DASH
            let data = await pioneer.ListUnspent({network:'DASH',xpub:responsePubkey.xpub})
            data = data.data
            console.log("txData: ",data)

            let balance = 0
            for(let i = 0; i < data.length; i++){
                balance += parseInt(data[i].value)
            }
            console.log("balance: ",balance)
            let balanceNative = balance / 100000000
            setBalance(balanceNative)
        }catch(e){
            console.log(e)
            //console.error(e)
        }
    }

    // onStart()
    useEffect(() => {
        onStart()
    }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Balance: {balance}
        </p>

      </header>
    </div>
  );
}

export default App;
