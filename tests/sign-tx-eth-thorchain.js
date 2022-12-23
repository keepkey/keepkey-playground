
const { getKeepKeySDK } = require("../lib")

let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function () {
    try {
        let config = {
            serviceKey: process.env['SERVICE_KEY'] || 'abc-123',
            serviceName: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
            serviceImageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
            spec
        }
        //init
        const sdk = await getKeepKeySDK(config)

        //Unsigned TX
        let unsignedTx = {
            "network": "ETH",
            "asset": "ETH",
            "type": "swap",
            "transaction": {
                "type": "swap",
                "protocol": "thorchain",
                "context": "0x33b35c665496bA8E71B22373843376740401F106.wallet",
                "inboundAddress": {
                    "chain": "ETH",
                    "pub_key": "thorpub1addwnpepqf2zh0ktnnqapkjhsnys2rzelxhczu77y39dh4l6ep2z3js74yqez4cpdyz",
                    "address": "0xaff6edbf71badb2bc504c499ac8f344a5cd86008",
                    "router": "0x3624525075b88B24ecc29CE226b0CEc1fFcB6976",
                    "halted": false,
                    "gas_rate": "300"
                },
                "addressFrom": "0x33b35c665496bA8E71B22373843376740401F106",
                "coin": "ETH",
                "asset": "ETH",
                "memo": "=:BCH.BCH:qzxp0xc6vsj8apg9ym4n4jl45pyxtkpshuvr9smjp3",
                "amount": "0.0001",
                "noBroadcast": true
            },
            "HDwalletPayload": {
                "addressNList": [
                    2147483692,
                    2147483708,
                    2147483648,
                    0,
                    0
                ],
                "nonce": "0x2c2",
                "gasPrice": "0x19b076328f",
                "gasLimit": "0x13880",
                "value": "0x5af3107a4000",
                "to": "0x3624525075b88B24ecc29CE226b0CEc1fFcB6976",
                "data": "0x1fece7b4000000000000000000000000aff6edbf71badb2bc504c499ac8f344a5cd86008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005af3107a4000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000343d3a4243482e4243483a717a78703078633676736a3861706739796d346e346a6c3435707978746b70736875767239736d6a7033000000000000000000000000",
                "chainId": 1
            },
            "verbal": "ThorChain ETH to BCH swap"
        }

        //push tx to api
        // console.log(kk.instance.SignTransaction())
        let responseSign = await sdk.sign.signTransaction({ body: { data: { invocation: { unsignedTx } } } })
        console.log("responseSign: ", responseSign.data)

    } catch (e) {
        console.error(e)
    }
}

run_test()