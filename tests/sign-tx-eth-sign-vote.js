/*

{
    "addressNList": [
        2147483692,
        2147483708,
        2147483648,
        0,
        0
    ],
    "chainId": 1,
    "data": "0x41f9b62c168041b76b57aaa8a81b105dc06c5f11db64c9325c5d3fa13a0df9be1c1a934c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000866206a6173706572000000000000000000000000000000000000000000000000",
    "gasLimit": "0x13006",
    "to": "0xe0f821d6cc2ab0d0660023a10340dc267120c9d4",
    "value": "0x0",
    "nonce": "0x73",
    "maxPriorityFeePerGas": "0x42c1d80",
    "maxFeePerGas": "0x0"
}

 */


const { KeepKeySdk } = require("@keepkey/keepkey-sdk")

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

        //get eth address
        let addressInfo = {
            addressNList: [2147483692, 2147483708, 2147483648, 0, 0],
            coin: 'Ethereum',
            scriptType: 'ethereum',
            showDisplay: false
        }
        let response = await sdk.address.ethereumGetAddress({ address_n: addressInfo.addressNList })
        console.log("response: ", response)

        let input = {
            "addressNList": [
                2147483692,
                2147483708,
                2147483648,
                0,
                0
            ],
            "from": response.address,
            "chainId": 1,
            "data": "0x41f9b62c168041b76b57aaa8a81b105dc06c5f11db64c9325c5d3fa13a0df9be1c1a934c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000866206a6173706572000000000000000000000000000000000000000000000000",
            "gasPrice": "0xf22d45af6",
            "gasLimit": "0x13880",
            "to": "0xe0f821d6cc2ab0d0660023a10340dc267120c9d4",
            "value": "0x0",
            "nonce": "0x73",
            "maxPriorityFeePerGas": "0x42c1d80",
            "maxFeePerGas": "0x0"
        }

        console.log("input: ",input)
        let responseSign = await sdk.eth.ethSignTransaction(input)
        console.log(responseSign)
    } catch (e) {
        console.error(e)
    }
}

run_test()
