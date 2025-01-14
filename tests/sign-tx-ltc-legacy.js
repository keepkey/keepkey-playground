

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
            "coin":"Litecoin",
            "inputs":[
                {
                    "addressNList":[
                        2147483692,
                        2147483650,
                        2147483648,
                        0,
                        0
                    ],
                    "scriptType":"p2sh",
                    "amount":"18841566",
                    "vout":0,
                    "txid":"2885bb2525c1eecb2845d24428e08efbd05bff394bf20be55e098bbf1ed68539",
                    "hex":"010000000376f71ff58dd499221e85c00eaf945cd50bc7f019d8992d3b6206ee47cfd6fdde000000006b483045022100ab230061f0fe38a13a36e248e3d5948f16707ca525277a56b09cf040bfc4865f02205ad08b9e8b3d5265f8a6ed541957c2d07a8daa18b7ac1e1934cbf2d8f1b485810121028d4afd45e2c8f9da89eece81278d5182358263c0bc45f2fe5d0ba7de9229aa84ffffffff45f704d0dfa05447eaac24f2c52747d6910e1eaa075ef0c53bc84d27e86933bd000000006b48304502210081315c62bf31783c797901a5626bfb72da0499f832213512b18cf593d6677095022041b33fa5b47f7983f5223b8bfe1e02fc95aadbe49d3425c36dad0eba8cc90454012103c45fafdf4a84e59d69fd90cad3504f0aa5941b8f518c958925e850cb4be3f5adffffffff82a9c625eb1eef57473962a520a40ecd1970302a464e5cf72977119770062728010000006a473044022006a96b27cbbde1f7ed8c6e5e8722ce363dd8592261f46a939e38534c21f6656002204b496709f3335fd78a513ee4eec8b11b6a28fa03d3fbc30c053c9f4519d0fb7901210324f19a28e3e32692894c642edc29058c19be960a23df2c153407f790735adbc2ffffffff01de7f1f01000000001976a914064f5a6523fc8c055f87b99e56f67cbf611ff7fa88ac00000000"
                }
            ],
            "outputs":[
                {
                    "address":"LMcHLHjcAhMtM6SPQ7Da9acBQWcviaX2Fu",
                    "amount":"100000",
                    "addressType":"spend"
                },
                {
                    "addressNList":[
                        2147483732,
                        2147483650,
                        2147483648,
                        1,
                        0
                    ],
                    "scriptType":"p2pkh",
                    "isChange":true,
                    "amount":18739758,
                    "addressType":"change"
                }
            ],
            "version":1,
            "locktime":0,
            "opReturnData":" "
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
