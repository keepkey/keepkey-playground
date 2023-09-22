
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
        let addressInfo = {
            addressNList: [2147483692, 2147483708, 2147483648, 0, 0],
            coin: 'Ethereum',
            scriptType: 'ethereum',
            showDisplay: false
        }

        //push tx to api
        // console.log(kk.instance.SignTransaction())
        let timeStart = new Date().getTime()
        console.log(sdk.address)
        let response = await sdk.address.ethereumGetAddress({ address_n: addressInfo.addressNList })
        console.log("response: ", response)

        let input = {
            "address":response.address,
            message:"0x0123"
        }
        console.log("input: ",input)
        console.log("")
        let responseSign = await sdk.eth.ethSign(input)
        console.log(responseSign)
    } catch (e) {
        console.error(e)
    }
}

run_test()
