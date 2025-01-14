
const {KeepKeySdk} = require("@keepkey/keepkey-sdk");

let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function () {
    try {
        let config = {
            apiKey: process.env['SERVICE_KEY'] || '1fa0c776-eaa9-499d-a2e5-f76af6073912',
            pairingInfo:{
                name: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
                imageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
                basePath:spec,
                url:"http://localhost:1646"
            }
        }
        //init
        const sdk = await KeepKeySdk.create(config)
        console.log("newKey: ",config.apiKey)

        //Unsigned TX
        // let unsignedTx = {
        //     from: '0x141D9959cAe3853b035000490C03991eB70Fc4aC',
        //     addressNList: [ 2147483692, 2147483708, 2147483648, 0, 0 ],
        //     data: '0x',
        //     nonce: '0x87',
        //     gasLimit: '0x13880',
        //     value: '0x1c6bf52634000',
        //     to: '0xC3aFFff54122658b89C31183CeC4F15514F34624',
        //     chainId: '0x1',
        //     maxFeePerGas: '0x069dbdba1a',
        //     maxPriorityFeePerGas: '0x59682f00'
        // }

        // let unsignedTx = {
        //     "addressNList": [
        //         2147483692,
        //         2147483708,
        //         2147483648,
        //         0,
        //         0
        //     ],
        //     "from": "0x141D9959cAe3853b035000490C03991eB70Fc4aC",
        //     "chainId": 1,
        //     "to": "0xC3aFFff54122658b89C31183CeC4F15514F34624",
        //     "value": "0xc0004ecc8a239c",
        //     "gasLimit": "0x5a3c",
        //     "nonce": "0xa9",
        //     "data": "0x",
        //     "maxFeePerGas": "0x198c4d3634",
        //     "maxPriorityFeePerGas": "0x861c4680"
        // }

        let unsignedTx = {
            "addressNList": [
                2147483692,
                2147483708,
                2147483648,
                0,
                0
            ],
            "chainId": "8453",
            "nonce": "0x9d",
            "gas": "0xee48",
            "gasLimit": "0xee48",
            "gasPrice": "0x24678886",
            "to": "0x658DE0443259a1027caA976ef9a42E6982037A03",
            "value": "0x38d7ea4c68000",
            "data": "0x"
        }

        // let unsignedTx = {
        //     "addressNList": [
        //         2147483692,
        //         2147483708,
        //         2147483648,
        //         0,
        //         0
        //     ],
        //     "nonce": "0x2c2",
        //     "gasPrice": "0x19b076328f",
        //     "gasLimit": "0x13880",
        //     "value": "0x5af3107a4000",
        //     "to": "0x3624525075b88B24ecc29CE226b0CEc1fFcB6976",
        //     "data": "0x1fece7b4000000000000000000000000aff6edbf71badb2bc504c499ac8f344a5cd86008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005af3107a4000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000343d3a4243482e4243483a717a78703078633676736a3861706739796d346e346a6c3435707978746b70736875767239736d6a7033000000000000000000000000",
        //     "chainId": 1
        // }

        //push tx to api
        // console.log(kk.instance.SignTransaction())
        let responseSign = await sdk.eth.ethSignTransaction(unsignedTx)
        console.log("responseSign: ", responseSign)

    } catch (e) {
        console.error(e)
    }
}

run_test()
