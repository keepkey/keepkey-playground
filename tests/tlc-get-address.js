
const SDK = require("@keepkey/keepkey-sdk")


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
        const sdk = await SDK.KeepKeySdk.create(config)
        //handle no bridge

        console.log(config.apiKey)
        // console.log(sdk)
        // console.log(sdk.bitcoinGetAddress)


        //Unsigned TX
        let addressInfo = {
            addressNList: [2147483732, 2147483648, 2147483648, 0, 0],
            coin: 'Litecoin',
            scriptType: 'p2wpkh',
            showDisplay: false
        }

        //push tx to api
        // console.log(kk.instance.SignTransaction())
        let timeStart = new Date().getTime()
        console.log(sdk.address)
        let response = await sdk.address.utxoGetAddress({
            address_n: addressInfo.addressNList,
            script_type:addressInfo.scriptType,
            coin:addressInfo.coin
        })
        console.log("response: ", response)
        let timeEnd = new Date().getTime()
        console.log("duration: ", (timeStart - timeEnd) / 1000)

        // let responseSign = await kk.instance.GetPublicKeys(null, { paths })
        // console.log("responseSign: ", responseSign.data)

    } catch (e) {
        console.error(e)
    }
}

run_test()
