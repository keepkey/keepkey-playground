require("dotenv").config({ path: '../../../../.env' })
const { getKeepKeySDK } = require("../lib")

let spec = 'http://localhost:1646/spec/swagger.json'
let ASSET = 'ETH'
let run_test = async function () {
    try {
        let config = {
            serviceKey: process.env['SERVICE_KEY'] || 'abc-123',
            serviceName: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
            serviceImageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
            spec
        }
        const sdk = await getKeepKeySDK(config)

        let user = await sdk.client.user()
        console.log(user.data)
    } catch (e) {
        console.error(e)
    }
}
run_test()