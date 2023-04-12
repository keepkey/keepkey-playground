const { KeepKeySdk } = require("@keepkey/keepkey-sdk")

let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function () {
    try {
        let config = {
            apiKey: process.env['SERVICE_KEY'] || 'test-123',
            pairingInfo:{
                name: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
                imageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
                basePath:spec,
                url:"http://localhost:1646"
            }
        }
        //init
        const sdk = await KeepKeySdk.create(config)

        const tx = {
            version: 1,
            locktime: 0,
            vin: [
                {
                    vout: 1,
                    sequence: 4294967295,
                    scriptSig: {
                        hex: "483045022072ba61305fe7cb542d142b8f3299a7b10f9ea61f6ffaab5dca8142601869d53c0221009a8027ed79eb3b9bc13577ac2853269323434558528c6b6a7e542be46e7e9a820141047a2d177c0f3626fc68c53610b0270fa6156181f46586c679ba6a88b34c6f4874686390b4d92e5769fbb89c8050b984f4ec0b257a0e5c4ff8bd3b035a51709503",
                    },
                    txid: "c16a03f1cf8f99f6b5297ab614586cacec784c2d259af245909dedb0e39eddcf",
                },
                {
                    vout: 1,
                    sequence: 4294967295,
                    scriptSig: {
                        hex: "48304502200fd63adc8f6cb34359dc6cca9e5458d7ea50376cbd0a74514880735e6d1b8a4c0221008b6ead7fe5fbdab7319d6dfede3a0bc8e2a7c5b5a9301636d1de4aa31a3ee9b101410486ad608470d796236b003635718dfc07c0cac0cfc3bfc3079e4f491b0426f0676e6643a39198e8e7bdaffb94f4b49ea21baa107ec2e237368872836073668214",
                    },
                    txid: "1ae39a2f8d59670c8fc61179148a8e61e039d0d9e8ab08610cb69b4a19453eaf",
                },
            ],
            vout: [
                {
                    value: "390000",
                    scriptPubKey: {
                        hex: "76a91424a56db43cf6f2b02e838ea493f95d8d6047423188ac",
                    },
                },
            ],
        };
        const inputs = [
            {
                addressNList: [
                    2147483692,
                    2147483653,
                    2147483648,
                    0,
                    0
                ],
                scriptType: "p2pkh",
                amount: String(390000),
                vout: 0,
                txid: "d5f65ee80147b4bcc70b75e4bbf2d7382021b871bd8867ef8fa525ef50864882",
                tx,
                //hex: "0100000002cfdd9ee3b0ed9d9045f29a252d4c78ecac6c5814b67a29b5f6998fcff1036ac1010000008b483045022072ba61305fe7cb542d142b8f3299a7b10f9ea61f6ffaab5dca8142601869d53c0221009a8027ed79eb3b9bc13577ac2853269323434558528c6b6a7e542be46e7e9a820141047a2d177c0f3626fc68c53610b0270fa6156181f46586c679ba6a88b34c6f4874686390b4d92e5769fbb89c8050b984f4ec0b257a0e5c4ff8bd3b035a51709503ffffffffaf3e45194a9bb60c6108abe8d9d039e0618e8a147911c68f0c67598d2f9ae31a010000008b48304502200fd63adc8f6cb34359dc6cca9e5458d7ea50376cbd0a74514880735e6d1b8a4c0221008b6ead7fe5fbdab7319d6dfede3a0bc8e2a7c5b5a9301636d1de4aa31a3ee9b101410486ad608470d796236b003635718dfc07c0cac0cfc3bfc3079e4f491b0426f0676e6643a39198e8e7bdaffb94f4b49ea21baa107ec2e237368872836073668214ffffffff0170f30500000000001976a91424a56db43cf6f2b02e838ea493f95d8d6047423188ac00000000",
            },
        ];
        const outputs = [
            {
                address: "1MJ2tj2ThBE62zXbBYA5ZaN3fdve5CPAz1",
                addressType: "spend",
                // scriptType: core.BTCOutputScriptType.PayToAddress,
                amount: String(390000 - 10000),
                isChange: false,
            },
        ];

        let input = {
            coin: "Bitcoin",
            inputs,
            outputs,
            version: 1,
            locktime: 0,
        }

        //push tx to api
        console.log("unsignedTx: ", JSON.stringify(input))
        let responseSign = await sdk.bitcoin.btcSignTransaction(input)
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