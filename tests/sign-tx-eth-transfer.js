
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

        let unsignedTx = {
            "addressNList": [
                2147483692,
                2147483708,
                2147483648,
                0,
                0
            ],
            "from": "0x141D9959cAe3853b035000490C03991eB70Fc4aC",
            "chainId": 1,
            "to": "0xC3aFFff54122658b89C31183CeC4F15514F34624",
            "value": "0xc0004ecc8a239c",
            "gasLimit": "0x5a3c",
            "nonce": "0xa9",
            "data": "0x",
            "maxFeePerGas": "0x198c4d3634",
            "maxPriorityFeePerGas": "0x861c4680"
        }

        //push tx to api
        // console.log(kk.instance.SignTransaction())
        let responseSign = await sdk.eth.ethSignTransaction(unsignedTx)
        console.log("responseSign: ", responseSign)

    } catch (e) {
        console.error(e)
    }
}

run_test()
