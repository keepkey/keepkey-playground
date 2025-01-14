const { KeepKeySdk } = require("@keepkey/keepkey-sdk")

let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function () {
    try {
        let config = {
            apiKey: process.env['SERVICE_KEY'] || '86003907-0807-42bd-af0b-03b32042c751',
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
        console.log(config.apiKey)


        let input = {
            "coin": "BitcoinCash",
            "inputs": [
                {
                    "addressNList": [
                        2147483692,
                        2147483793,
                        2147483648,
                        0,
                        0
                    ],
                    "amount": "928643",
                    "hex": "010000000980d4085fdca52681a41d77cb72f91eb888bfe8e964fb82df59303afb97a2731c000000006a47304402207e6eb6f27522b127bf0001eb027246ddd82507835e9ade26c16c134f52dfc05a02201571645d9d47eaacda556b8ee58645e06f9a46688a9d318d59f55d36f85b26854121036f261fee0c5293c699932a217b5bc4ddbb928612e4426e5aa26605d0a3bc7706ffffffff1918a6a63ed007a43db0a15c31a266cc3e3c998275fa55268d896a5559a2d946000000006a4730440220514f69794ae79f8d8029334ecc5953cd7f6df8d67aa79f0bf4de45123f8e32a402203b223bf613403cd8b5b9ade69bfb89162ae188fa4687fe00822523b0ae11fb7d4121036f261fee0c5293c699932a217b5bc4ddbb928612e4426e5aa26605d0a3bc7706ffffffffe96cb59c9981bc330e4cc47ccca0499fcbf6acdfcb351353c0f1a3e37195a9c1000000006a473044022060ad1d985815edc78fff7d8e46889a5abe137d9058a7b935d56a596fab07610a02207dcf143f1e3cedc7a7b519ed06e990f3a2e18d92a8f86dfd3438c09825210f1d4121036f261fee0c5293c699932a217b5bc4ddbb928612e4426e5aa26605d0a3bc7706ffffffffb5af74db3b2880cdc4f9b57e8fd7e82d1c5f0dccaac5e433df37b8a39e51d4a3000000006a473044022054a40ecd94dbb44adbff6522e92cef43b27310125dddcdaca4a15c5e68ab6ba502202035f0128a021fc769985c6253674835ec404ecb2e0d041ed29132fc29be4f474121036f261fee0c5293c699932a217b5bc4ddbb928612e4426e5aa26605d0a3bc7706ffffffffd4013e9a8aa5181655f5258bb42a8368d92e634b4cde9229a5f14457790b20a4000000006a473044022029693d88520b95a5424c87e1f4455f94a13936a85fff5399ccb6f6b2efb44d060220370d6ba1ed705379e184b5ac5e01f59dbf07e95b3a752f36e2f3529ff8bea4594121036f261fee0c5293c699932a217b5bc4ddbb928612e4426e5aa26605d0a3bc7706ffffffffda3ee9d475f1b20f0ab8610ec3880f1de67c74d3021b68e3dd6ce0568daaed35000000006b483045022100bb25043bdc66e91623013b584d128b6e8ac1486acac7e569d19f216faa05d6e002203678a4cb837efc18ba53569bdc2a44d008d56162523ebe22f7e406223ac480b44121036f261fee0c5293c699932a217b5bc4ddbb928612e4426e5aa26605d0a3bc7706ffffffff02ef93a20416edc07cdab8c6e5ef5bb4a650cd506712311f118e165a3f3042e9000000006b483045022100ea16d881148b8315fab46daa364d5bdbd3e5ba01eda02b28bbf3893729641a04022029b6905d41acfc0a90ddbd35bbd5ea26f5734767cd9f8d18962ea7148c4fa16b4121036f261fee0c5293c699932a217b5bc4ddbb928612e4426e5aa26605d0a3bc7706ffffffffb513905f8f6c4da24b88a6294f60a42403151146e312df41b4c6d9cd46b09e7d000000006a473044022011b48c1d4437be58f3dcda32ff55f5b905a42834e29cad0815191b61d462f7c502203bad4bc8bd989052878a142da51c75f5270a33277bb187096ce2c8b017695b644121036f261fee0c5293c699932a217b5bc4ddbb928612e4426e5aa26605d0a3bc7706ffffffff5e44bfd41158ffc4ed6c1bfe0c95cb6c80acf45ed2bef37b7bcfaa6146e46eab000000006b483045022100dea2172ce3e8f67c433863364fc742c3b9951f48dfea030ebb9532af1dc861f70220195dea856170275e02119ab5eedb0c3e5bf8abe8646bbf14dea8d395a8a6f6654121036f261fee0c5293c699932a217b5bc4ddbb928612e4426e5aa26605d0a3bc7706ffffffff03832b0e00000000001976a914922e5b61190e4aeda1d185ec1354cf50b75fb21388ace4b421baa30000001976a914d145e21dcc387b69d02042691f9bbd575b67d63688ac0000000000000000466a444f55543a3532444334363836433743394444354643324333453735334239303736363835313335344138413044464343303831313535384343343930423832424635443600000000",
                    "scriptType": "p2pkh",
                    "txid": "84f64bc6e4b45d398cd0843a5af3f1f2287f6cb0c26dd6d85b26834e9bcffd35",
                    "vout": 0
                }
            ],
            "locktime": 0,
            "opReturnData": "",
            "outputs": [
                {
                    "address": "19Hzr7HDwK1utBjdFkyM8T33QPXKyjgUYD",
                    "addressType": "spend",
                    "amount": 10000
                },
                {
                    "address": "1EKwBwnhLJULarn1kE9i2p5ootLexgSLAu",
                    "addressType": "spend",
                    "amount": 917965
                }
            ],
            "version": 1
        }


        // let input = {
        //     "coin":"BitcoinCash",
        //     "inputs":[
        //     {
        //         "addressNList":[
        //             2147483692,
        //             2147483793,
        //             2147483648,
        //             1,
        //             7
        //         ],
        //         "scriptType":"p2pkh",
        //         "amount":"1146384",
        //         "vout":1,
        //         "txid":"3fdb6a02bc77a443494816791694446684a6633d0be48046a213a04562c9b46b",
        //         "hex":"0100000001e74c63ac6ae7aca14a874b0677dc4a8ca36c3123f04b89d5b98958133222986b010000006b483045022100b0fe60b1fe77d7058143dc06fd5d1fd910c18161c943664f7a754236b7e6022d02206aaede556c6b1845be69738b7abf0bbfb615f93e093ee40080fe857fb2bb449d41210395750368671d6c6cf8ac130c963beec72c97655da16da3a23065c166933611ceffffffff02a0860100000000001976a9148c179b1a64247e850526eb3acbf5a04865d830bf88ac107e1100000000001976a914b3183c28fea187ea7dd660761d5422900627609088ac00000000"
        //     }
        // ],
        //     "outputs":[
        //     {
        //         "addressType":"spend",
        //         "amount":"100000",
        //         "address":"bitcoincash:qzxp0xc6vsj8apg9ym4n4jl45pyxtkpshuvr9smjp3"
        //     },
        //     {
        //         "addressType":"change",
        //         "amount":"1046158",
        //         "addressNList":[
        //             2147483692,
        //             2147483793,
        //             2147483648,
        //             1,
        //             7
        //         ],
        //         "scriptType":"p2pkh",
        //         "isChange":true
        //     }
        // ],
        //     "version":1,
        //     "locktime":0
        // }

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
