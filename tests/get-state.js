
const { getKeepKeySDK } = require("@keepkey/keepkey-sdk")
const SDK = require("@keepkey/keepkey-sdk");

let spec = 'http://localhost:1646/spec/swagger.json'
let ASSET = 'ETH'
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
        const sdk = await SDK.KeepKeySdk.create(config)
        console.log(config.apiKey)

        let user = await sdk.system.debug.getState()
        console.log(user.data)
    } catch (e) {
        console.error(e)
    }
}
run_test()