
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


        //Unsigned TX
        let paths = [
            {
                symbol: 'BTC',
                address_n: [ 2147483732, 2147483648, 2147483648 ],
                coin: 'Bitcoin',
                script_type: 'p2pkh',
                showDisplay: false
            },
            {
                symbol: 'ETH',
                address_n: [ 2147483692, 2147483708, 2147483648 ],
                coin: 'Bitcoin',
                script_type: 'p2pkh',
                showDisplay: false
            },
            {
                symbol: 'RUNE',
                address_n: [ 2147483692, 2147484579, 2147483648 ],
                coin: 'Bitcoin',
                script_type: 'p2pkh',
                showDisplay: false
            },
            {
                symbol: 'ATOM',
                address_n: [ 2147483692, 2147483766, 2147483648 ],
                coin: 'Bitcoin',
                script_type: 'p2pkh',
                showDisplay: false
            },
            {
                symbol: 'OSMO',
                address_n: [ 2147483692, 2147483766, 2147483648 ],
                coin: 'Bitcoin',
                script_type: 'p2pkh',
                showDisplay: false
            },
            {
                symbol: 'BNB',
                address_n: [ 2147483692, 2147484362, 2147483648 ],
                coin: 'Bitcoin',
                script_type: 'p2pkh',
                showDisplay: false
            },
            {
                symbol: 'BCH',
                address_n: [ 2147483692, 2147483793, 2147483648 ],
                coin: 'Bitcoin',
                script_type: 'p2pkh',
                showDisplay: false
            },
            {
                symbol: 'LTC',
                address_n: [ 2147483692, 2147483650, 2147483648 ],
                coin: 'Bitcoin',
                script_type: 'p2pkh',
                showDisplay: false
            },
            {
                symbol: 'DOGE',
                address_n: [ 2147483692, 2147483651, 2147483648 ],
                coin: 'Bitcoin',
                script_type: 'p2pkh',
                showDisplay: false
            }
        ]

        //push tx to api
        // console.log(kk.instance.SignTransaction())
        let timeStart = new Date().getTime()
        let responseSign = await sdk.system.info.getPublicKey(paths[7])
        console.log("responseSign: ", responseSign)
        let timeEnd = new Date().getTime()
        console.log("duration: ",(timeStart - timeEnd) / 1000)
        // let responseSign = await kk.instance.GetPublicKeys(null, { paths })
        // console.log("responseSign: ", responseSign.data)

    } catch (e) {
        console.error(e)
    }
}

run_test()