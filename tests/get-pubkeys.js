
const { getKeepKeySDK } = require("../lib")

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
        let paths = [
            {
                symbol: 'BTC',
                addressNList: [ 2147483732, 2147483648, 2147483648 ],
                coin: 'Bitcoin',
                script_type: 'p2pkh',
                showDisplay: false
            },
            {
                symbol: 'ETH',
                addressNList: [ 2147483692, 2147483708, 2147483648 ],
                coin: 'Bitcoin',
                script_type: 'p2pkh',
                showDisplay: false
            },
            {
                symbol: 'RUNE',
                addressNList: [ 2147483692, 2147484579, 2147483648 ],
                coin: 'Bitcoin',
                script_type: 'p2pkh',
                showDisplay: false
            },
            {
                symbol: 'ATOM',
                addressNList: [ 2147483692, 2147483766, 2147483648 ],
                coin: 'Bitcoin',
                script_type: 'p2pkh',
                showDisplay: false
            },
            {
                symbol: 'OSMO',
                addressNList: [ 2147483692, 2147483766, 2147483648 ],
                coin: 'Bitcoin',
                script_type: 'p2pkh',
                showDisplay: false
            },
            {
                symbol: 'BNB',
                addressNList: [ 2147483692, 2147484362, 2147483648 ],
                coin: 'Bitcoin',
                script_type: 'p2pkh',
                showDisplay: false
            },
            {
                symbol: 'BCH',
                addressNList: [ 2147483692, 2147483793, 2147483648 ],
                coin: 'Bitcoin',
                script_type: 'p2pkh',
                showDisplay: false
            },
            {
                symbol: 'LTC',
                addressNList: [ 2147483692, 2147483650, 2147483648 ],
                coin: 'Bitcoin',
                script_type: 'p2pkh',
                showDisplay: false
            },
            {
                symbol: 'DOGE',
                addressNList: [ 2147483692, 2147483651, 2147483648 ],
                coin: 'Bitcoin',
                script_type: 'p2pkh',
                showDisplay: false
            }
        ]

        //push tx to api
        // console.log(kk.instance.SignTransaction())
        let timeStart = new Date().getTime()
        let responseSign = await sdk.wallet.getPublicKeys({ getPublicKey: paths })
        console.log("responseSign: ", responseSign.data)
        let timeEnd = new Date().getTime()
        console.log("duration: ",(timeStart - timeEnd) / 1000)
        // let responseSign = await kk.instance.GetPublicKeys(null, { paths })
        // console.log("responseSign: ", responseSign.data)

    } catch (e) {
        console.error(e)
    }
}

run_test()