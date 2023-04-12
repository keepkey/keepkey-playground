
const SDK = require("@keepkey/keepkey-sdk")


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
        const sdk = await SDK.KeepKeySdk.create(config)
        //handle no bridge

        console.log(config.apiKey)
        // console.log(sdk)
        // console.log(sdk.bitcoinGetAddress)

        let password = "password"
        let name = "foobar"
        let value = "barfoo"

        sdk.encrypt


    } catch (e) {
        console.error(e)
    }
}

run_test()