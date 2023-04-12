const { KeepKeySdk } = require("@keepkey/keepkey-sdk")

let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function () {
    try {
        let config = {
            apiKey: process.env['SERVICE_KEY'] || '6d31495a-729f-4bd4-a46c-3fb71f0e9822',
            pairingInfo:{
                name: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
                imageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
                basePath:spec,
                url:"http://localhost:1646"
            }
        }
        //init
        const sdk = await KeepKeySdk.create(config)

        //pair
        // console.log(config.apiKey)

        let input = {
            "coin":"BitcoinCash",
            "inputs":[
            {
                "addressNList":[
                    2147483692,
                    2147483793,
                    2147483648,
                    1,
                    7
                ],
                "scriptType":"p2pkh",
                "amount":"1146384",
                "vout":1,
                "txid":"3fdb6a02bc77a443494816791694446684a6633d0be48046a213a04562c9b46b",
                "hex":"0100000001e74c63ac6ae7aca14a874b0677dc4a8ca36c3123f04b89d5b98958133222986b010000006b483045022100b0fe60b1fe77d7058143dc06fd5d1fd910c18161c943664f7a754236b7e6022d02206aaede556c6b1845be69738b7abf0bbfb615f93e093ee40080fe857fb2bb449d41210395750368671d6c6cf8ac130c963beec72c97655da16da3a23065c166933611ceffffffff02a0860100000000001976a9148c179b1a64247e850526eb3acbf5a04865d830bf88ac107e1100000000001976a914b3183c28fea187ea7dd660761d5422900627609088ac00000000"
            }
        ],
            "outputs":[
            {
                "addressType":"spend",
                "amount":"100000",
                "address":"bitcoincash:qzxp0xc6vsj8apg9ym4n4jl45pyxtkpshuvr9smjp3"
            },
            {
                "addressType":"change",
                "amount":"1046158",
                "addressNList":[
                    2147483692,
                    2147483793,
                    2147483648,
                    1,
                    7
                ],
                "scriptType":"p2pkh",
                "isChange":true
            }
        ],
            "version":1,
            "locktime":0
        }

        //push tx to api
        console.log("unsignedTx: ", JSON.stringify(input))
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