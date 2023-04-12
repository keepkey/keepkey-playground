const { KeepKeySdk } = require("@keepkey/keepkey-sdk")

let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function () {
    try {
        let config = {
            apiKey: process.env['SERVICE_KEY'] || 'test-123',
            pairingInfo:{
                name: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
                imageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
                basePath:spec
            }
        }
        //init
        const sdk = await KeepKeySdk.create(config)

        let input = {
            "addressNList": [
                2147483692,
                2147483708,
                2147483648,
                0,
                0
            ],
            "nonce": "0x2c4",
            "gasPrice": "0xf22d45af6",
            "gasLimit": "0x13880",
            "value": "0x5af3107a4000",
            "to": "0x33b35c665496bA8E71B22373843376740401F106",
            "data": "",
            "chainId": 1
        }

        let responseSign = await sdk.eth.ethSignTransaction(input)
        console.log("responseSign: ", responseSign.data)
        console.log("responseSign: ", responseSign.data.signedTx)
        console.log("responseSign: ", JSON.stringify(responseSign))

    } catch (e) {
        console.error(e)
        console.log("e: ", Object.keys(e))
        console.log("e: ", e.response)
        console.log("e: ", Object.keys(e.name.toString()))
        console.log("e: ", Object.keys(e.response.toString()))
        // console.log("e: ", e.response)

        console.log("e: ", e.response.toString())
    }
}

run_test()