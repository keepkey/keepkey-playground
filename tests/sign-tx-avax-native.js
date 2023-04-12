
const SDK = require("@keepkey/keepkey-sdk")
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

        // console.log(sdk.eth)
        // console.log(sdk.address)


        // let tx = {
        //     "addressNList": [
        //     2147483692,
        //     2147483708,
        //     2147483648,
        //     0,
        //     0
        // ],
        //     "chainId": 43114,
        //     "data": "",
        //     "gasLimit": "0x5208",
        //     "maxFeePerGas": "0xbfda3a300",
        //     "maxPriorityFeePerGas": "0x59682f00",
        //     "nonce": "0x8",
        //     "to": "0xC3aFFff54122658b89C31183CeC4F15514F34624",
        //     "value": "0x38d7ea4c68000"
        // }

        let input = {
            "addressNList": [
                2147483692,
                2147483708,
                2147483648,
                0,
                0
            ],
            "value": "0x38d7ea4c68000",
            // from: (
            //     await sdk.address.ethereumGetAddress({ address_n: [
            //             2147483692,
            //             2147483708,
            //             2147483648,
            //             0,
            //             0
            //         ] })
            // ).address,
            "from":"0x141D9959cAe3853b035000490C03991eB70Fc4aC",
            "to": "0xC3aFFff54122658b89C31183CeC4F15514F34624",
            "chainId": 43114,
            // "chainId": 1,
            "data": "0x",
            "nonce": "0x9",
            "gas":"0x5208",
            "gasLimit": "0x5208",
            "maxFeePerGas": "0xbfda3a300",
            "maxPriorityFeePerGas": "0x59682f00"
        }
        let responseSign = await sdk.eth.ethSignTransaction(input)
        console.log(responseSign)

    } catch (e) {
        console.error(e)
    }
}

run_test()