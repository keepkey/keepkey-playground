

const { KeepKeySdk } = require("@keepkey/keepkey-sdk")

let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function () {
    try {
        let config = {
            apiKey: process.env['SERVICE_KEY'] || '82f47bce-59ad-4737-9c32-30b7dc138a93',
            pairingInfo:{
                name: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
                imageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
                basePath:spec,
                url:"http://localhost:1646"
            }
        }
        //init
        const sdk = await KeepKeySdk.create(config)
        console.log("config: ", config)

        let input = {
            "coin": "Dogecoin",
            "inputs": [
                {
                    "scriptType": "p2pkh",
                    "amount": "1506676063",
                    "vout": 1,
                    "txid": "123dfd1acdcb35362957c87ba39aa3ee1ae00129e2f4b320fbbb0bf0b500a170",
                    "hex": "01000000019c96b8fc5e19a32ac34400160f4c6dd8f9467da52ad2f35a72a0ec09ad36f053010000006b483045022100f6f49a5bc2e4ed39015a4b1f3f4a777ed2bd37978c18ec728bd0f37fa225b2530220108d6fc0780d656aef26e0d7ee5d6232f28a43dc72d0e8bdd0aa57857c51af6a0121027b412766de9ad8ac9c7fea96bdaec771c29d73ddf9734949fff2c71863473555ffffffff0200ca9a3b000000001976a91437d2a8db142e2ca7fee6e7c76f22595b307711c788ac5f0dce59000000001976a9148c9f4603b71116441545b3719e80023e8b9f8bb888ac00000000"
                }
            ],
            "outputs": [
                {
                    "scriptType": "p2pkh",
                    "addressType": "spend",
                    "address": "DAEG4hDdnAECxEbPW9vHMQ1kdVgoRfWJo8",
                    "amount": "110"
                },
                {
                    "scriptType": "p2pkh",
                    "addressType": "spend",
                    "isChange": true,
                    "amount": "1506336953",
                    "addressNList": [
                        2147483692,
                        2147483651,
                        2147483648,
                        0,
                        0
                    ]
                }
            ],
            "version": 1,
            "locktime": 0
        }

        //push tx to api
        let responseSign = await sdk.utxo.utxoSignTransaction(input)
        console.log("responseSign: ", responseSign.data)
        // console.log("responseSign: ", responseSign.data.signedTx)
        console.log("responseSign: ", JSON.stringify(responseSign))

    } catch (e) {
        console.error(e)
        console.log("e: ", Object.keys(e))
        console.log("e: ", e.response)
        console.log("e: ", Object.keys(e.name.toString()))
        console.log("e: ", Object.keys(e.response.toString()))
        // console.log("e: ", e.response)

        console.log("e: ", e.response.toString())
    }
}

run_test()
