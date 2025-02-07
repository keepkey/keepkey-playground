
const { getKeepKeySDK } = require("@keepkey/keepkey-sdk")
const SDK = require("@keepkey/keepkey-sdk");

let spec = 'http://localhost:1646/spec/swagger.json'
let ASSET = 'ETH'
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
        const sdk = await SDK.KeepKeySdk.create(config)
        console.log(config.apiKey)

        let user = await sdk.system.info.getFeatures()
        console.log(user)
    } catch (e) {
        console.error(e)
    }
}
run_test()
