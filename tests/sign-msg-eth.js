
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


        let input = {
            "address":"0x2356A15042F98f0a53784F42237bd4b2873AADCF",
            message:"foobar"
        }
        console.log("input: ",input)
        let responseSign = await sdk.eth.ethSign(input)
        console.log(responseSign)
    } catch (e) {
        console.error(e)
    }
}

run_test()