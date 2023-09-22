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

        let unsignedTx = {
            from: '0x141D9959cAe3853b035000490C03991eB70Fc4aC',
            addressNList: [ 2147483692, 2147483708, 2147483648, 0, 0 ],
            data: '0x',
            nonce: '0x87',
            gasLimit: '0x13880',
            value: '0x1c6bf52634000',
            to: '0xC3aFFff54122658b89C31183CeC4F15514F34624',
            chainId: '0x1',
            maxFeePerGas: '0x0d965f7010',
            maxPriorityFeePerGas: '0x59682f00'
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
