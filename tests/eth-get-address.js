
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
        // console.log(SDK)
        // SDK.addMiddleware((req, res, next) => next())

        const sdk = await SDK.KeepKeySdk.create(config)
        console.log(config.apiKey)

        // console.log(sdk.eth)
        // console.log(sdk.address)


        //Unsigned TX
        let addressInfo = {
            addressNList: [2147483692, 2147483708, 2147483648, 0, 0],
            coin: 'Ethereum',
            scriptType: 'ethereum',
            showDisplay: false
        }

        //push tx to api
        // console.log(kk.instance.SignTransaction())
        let timeStart = new Date().getTime()
        let response = await sdk.address.ethereumGetAddress({ address_n: addressInfo.addressNList })
        console.log("response: ", response)
        let timeEnd = new Date().getTime()
        console.log("duration: ", (timeStart - timeEnd) / 1000)

    } catch (e) {
        console.error(e)
    }
}

run_test()