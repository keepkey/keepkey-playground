
const SDK = require("@keepkey/keepkey-sdk")
let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function () {
    try {
        //apiKey

        let config = {
            apiKey: process.env['SERVICE_KEY'] || 'test-123',
            pairingInfo:{
                name: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
                imageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
                basePath:spec
            }
        }
        //init
        let sdk = await SDK.KeepKeySdk.create(config)
        console.log(config)
        //get api key
        //if apiKey !== sdk.apiKey save

        //Unsigned TX
        let addressInfo = {
            addressNList: [2147483732, 2147483648, 2147483648, 0, 0],
            coin: 'Bitcoin',
            scriptType: 'p2wpkh',
            showDisplay: false
        }

        //push tx to api
        // console.log(kk.instance.SignTransaction())
        let timeStart = new Date().getTime()
        // sdk.address.xrpGetAddress()
        let responseSign = await sdk.address.xrpGetAddress({ address_n: addressInfo.addressNList })
        responseSign = responseSign
        console.log("responseSign: ", responseSign)
        let timeEnd = new Date().getTime()
        console.log("duration: ", (timeStart - timeEnd) / 1000)
        // let responseSign = await kk.instance.GetPublicKeys(null, { paths })
        // console.log("responseSign: ", responseSign.data)

    } catch (e) {
        console.error(e)
    }
}

run_test()