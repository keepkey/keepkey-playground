
const { getKeepKeySDK } = require("../lib")
require('dotenv').config({ path: './../.env' })
let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function () {
    try {
        let config = {
            serviceKey: process.env['SERVICE_KEY'] || 'abc-123',
            serviceName: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
            serviceImageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
            spec
        }
        //init
        const sdk = await getKeepKeySDK(config)


        //Unsigned TX
        let seed = process.env['WALLET_TEST']
        //console.log(seed)
        if (!seed) throw Error("Must set seed in ENV file!")
        let loadPayload = {
            mnemonic: seed,
            label: "testSeed",
            passphrase: false,
            pin: "1",
            skipChecksum: true
        }
        //push tx to api
        // console.log(kk.instance.SignTransaction())
        let timeStart = new Date().getTime()

        //console.log(sdk)
        // let wipe = await sdk.developer.wipe("",{})
        // console.log("wipe: ", wipe)

        let responseSign = await sdk.developer.loadDevice({ loadDevice: loadPayload })
        console.log("responseSign: ", responseSign)
        let timeEnd = new Date().getTime()
        console.log("duration: ", (timeStart - timeEnd) / 1000)


    } catch (e) {
        console.error(e)
    }
}

run_test()