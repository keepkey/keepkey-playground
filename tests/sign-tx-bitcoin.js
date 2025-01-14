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

        // let input2 = {coin: 'Bitcoin',
        //     inputs: [
        //         {
        //             addressNList: [Array],
        //             scriptType: 'p2wpkh',
        //             amount: 100000,
        //             vout: 1,
        //             txid: '53c14ee5dfa2987e743a68526a5df1c31968a79987b042eccb53d5437b7237f9',
        //             hex: '020000000001019bb3930bcda5bd5b6a4150ca380c398ae4c0e5c4ed36f6377661e1864d6c53be0100000000ffffffff02a1df0400000000001976a914fe9cc804423102b3aefcf431fff6f7337dfbfae688acdf102c04000000001600141757bc97bdee98cd14b9ebc57287f5f91d389aed0247304402200268e540ecc02818045fef428bce41ffb9983c5fa0372fc1804ef384277ecdb9022064a0f6faddafe526f29aac04f6d4992621e1b46fc9b83bf2ccc4b148efc5d95a012103f21cb488a4cb8e07f6af7c0be1118005aaebc8ac4956f87d03dfa8705f663bb000000000'
        //         },
        //         {
        //             addressNList: [Array],
        //             scriptType: 'p2wpkh',
        //             amount: 100000,
        //             vout: 2,
        //             txid: 'c12da3a2a292ad2ba6ccb2ad656e44d1a8dbad7bb4ccf2c51d2ea47be1acb09a',
        //             hex: '02000000000101b12dce090e53095fc2b55cde3ac6e3fadf1ba7a137dfb9fdfd9742922e5cfefc0100000000ffffffff03a3840200000000001600141b4bef55ea31170b5e3bae8f1a0f403f0903f8bc0000000000000000466a443d3a424e422e425553442d4244313a626e62316536326c3476366c636d6d39323830793233326864637879786b717239776476716a6b7571733a333430333337363939393d040000000000001600141757bc97bdee98cd14b9ebc57287f5f91d389aed024730440220108af40494476c1b011688553819a9068ce58fd68f004e08ede979be454c885c02204ba8209a64de4deb0bb02bfe97323eb9166b4f6a8f14b100fd9b54b2fab4cb8e012103f21cb488a4cb8e07f6af7c0be1118005aaebc8ac4956f87d03dfa8705f663bb000000000'
        //         }
        //     ],
        //     outputs: [
        //         {
        //             address: 'bc1qpcaardpf2wzcu6uwd4hhsmt0fz8su80cjfk5lh',
        //             amount: 100000,
        //             addressType: 'spend'
        //         },
        //         {
        //             addressNList: [Array],
        //             isChange: true,
        //             addressType: 'change',
        //             amount: 69896541,
        //             scriptType: 'p2wpkh'
        //         }
        //     ],
        //     opReturnData: ''
        // }

        //let input2 = {"coin":"Bitcoin","inputs":[{"addressNList":[2147483732,2147483648,2147483648,0,0],"scriptType":"p2wpkh","amount":100000,"vout":1,"txid":"53c14ee5dfa2987e743a68526a5df1c31968a79987b042eccb53d5437b7237f9","hex":"020000000001019bb3930bcda5bd5b6a4150ca380c398ae4c0e5c4ed36f6377661e1864d6c53be0100000000ffffffff02a1df0400000000001976a914fe9cc804423102b3aefcf431fff6f7337dfbfae688acdf102c04000000001600141757bc97bdee98cd14b9ebc57287f5f91d389aed0247304402200268e540ecc02818045fef428bce41ffb9983c5fa0372fc1804ef384277ecdb9022064a0f6faddafe526f29aac04f6d4992621e1b46fc9b83bf2ccc4b148efc5d95a012103f21cb488a4cb8e07f6af7c0be1118005aaebc8ac4956f87d03dfa8705f663bb000000000"},{"addressNList":[2147483732,2147483648,2147483648,0,0],"scriptType":"p2wpkh","amount":100000,"vout":2,"txid":"c12da3a2a292ad2ba6ccb2ad656e44d1a8dbad7bb4ccf2c51d2ea47be1acb09a","hex":"02000000000101b12dce090e53095fc2b55cde3ac6e3fadf1ba7a137dfb9fdfd9742922e5cfefc0100000000ffffffff03a3840200000000001600141b4bef55ea31170b5e3bae8f1a0f403f0903f8bc0000000000000000466a443d3a424e422e425553442d4244313a626e62316536326c3476366c636d6d39323830793233326864637879786b717239776476716a6b7571733a333430333337363939393d040000000000001600141757bc97bdee98cd14b9ebc57287f5f91d389aed024730440220108af40494476c1b011688553819a9068ce58fd68f004e08ede979be454c885c02204ba8209a64de4deb0bb02bfe97323eb9166b4f6a8f14b100fd9b54b2fab4cb8e012103f21cb488a4cb8e07f6af7c0be1118005aaebc8ac4956f87d03dfa8705f663bb000000000"}],"outputs":[{"address":"bc1qpcaardpf2wzcu6uwd4hhsmt0fz8su80cjfk5lh","amount":100000,"addressType":"spend"},{"addressNList":[2147483732,2147483648,2147483648,0,0],"isChange":true,"addressType":"change","amount":69896541,"scriptType":"p2wpkh"}],"opReturnData":""}

        // let input2 = {
        //     "coin":"Bitcoin",
        //     "inputs":[
        //         {
        //             "addressNList":[
        //                 2147483732,
        //                 2147483648,
        //                 2147483648,
        //                 0,
        //                 0
        //             ],
        //             "scriptType":"p2pkh",
        //             "amount":"100000",
        //             "vout":1,
        //             "txid":"53c14ee5dfa2987e743a68526a5df1c31968a79987b042eccb53d5437b7237f9",
        //             "hex":"020000000001019bb3930bcda5bd5b6a4150ca380c398ae4c0e5c4ed36f6377661e1864d6c53be0100000000ffffffff02a1df0400000000001976a914fe9cc804423102b3aefcf431fff6f7337dfbfae688acdf102c04000000001600141757bc97bdee98cd14b9ebc57287f5f91d389aed0247304402200268e540ecc02818045fef428bce41ffb9983c5fa0372fc1804ef384277ecdb9022064a0f6faddafe526f29aac04f6d4992621e1b46fc9b83bf2ccc4b148efc5d95a012103f21cb488a4cb8e07f6af7c0be1118005aaebc8ac4956f87d03dfa8705f663bb000000000"
        //         },
        //         {
        //             "addressNList":[
        //                 2147483732,
        //                 2147483648,
        //                 2147483648,
        //                 0,
        //                 0
        //             ],
        //             "scriptType":"p2pkh",
        //             "amount":"100000",
        //             "vout":2,
        //             "txid":"c12da3a2a292ad2ba6ccb2ad656e44d1a8dbad7bb4ccf2c51d2ea47be1acb09a",
        //             "hex":"02000000000101b12dce090e53095fc2b55cde3ac6e3fadf1ba7a137dfb9fdfd9742922e5cfefc0100000000ffffffff03a3840200000000001600141b4bef55ea31170b5e3bae8f1a0f403f0903f8bc0000000000000000466a443d3a424e422e425553442d4244313a626e62316536326c3476366c636d6d39323830793233326864637879786b717239776476716a6b7571733a333430333337363939393d040000000000001600141757bc97bdee98cd14b9ebc57287f5f91d389aed024730440220108af40494476c1b011688553819a9068ce58fd68f004e08ede979be454c885c02204ba8209a64de4deb0bb02bfe97323eb9166b4f6a8f14b100fd9b54b2fab4cb8e012103f21cb488a4cb8e07f6af7c0be1118005aaebc8ac4956f87d03dfa8705f663bb000000000"
        //         }
        //     ],
        //     "outputs":[
        //         {
        //             "address":"bc1qpcaardpf2wzcu6uwd4hhsmt0fz8su80cjfk5lh",
        //             "amount":"100000",
        //             "addressType":"spend"
        //         },
        //         {
        //             "addressNList":[
        //                 2147483732,
        //                 2147483648,
        //                 2147483648,
        //                 0,
        //                 0
        //             ],
        //             "isChange":true,
        //             "addressType":"change",
        //             "amount":"69896541",
        //             "scriptType":"p2wpkh"
        //         }
        //     ],
        //     "opReturnData":""
        // }

        let input2 = {
            "coin":"Bitcoin",
            "inputs":[
                {
                    "addressNList":[
                        0x80000000 + 84,
                        2147483648,
                        2147483648,
                        0,
                        0
                    ],
                    "scriptType":"p2sh",
                    "amount":"130642",
                    "vout":1,
                    "txid":"5c66611fecd82c893305ea50ed3e94cd5404cb33a6cf4bf49d1330a95fd0a046",
                    "hex":"010000000001015cb2d63bf9f50d2f2accb25bec170259fd9f8874ccd11ff25806523420e951bf0100000000ffffffff021027000000000000160014e4517b08fe39c90b7900c32d9a7dfb1fa16ba18152fe0100000000001976a9143b944081068951cc1b040818ad95ee1146cbef6388ac0248304502210091b3ad3ef6b5e1b1c2f16913525729cdba38e2d40ec1335ecb2250cc82bb8d09022041222e57c9713eef110d8f73fc41c7c1826ce1f423880d2d8a40f8d9c12432880121031bdf27522ef952002e09decd17c66b271d719a272929a23773b1c43f5a377cb900000000"
                },
                {
                    "addressNList":[
                        0x80000000 + 84,
                        2147483648,
                        2147483648,
                        0,
                        0
                    ],
                    "scriptType":"p2sh",
                    "amount":"123214",
                    "vout":1,
                    "txid":"9b5d2b22caa027cb8bcc0c2ab4963277b00c78e5a4b145391ec1d4cf2aa348f3",
                    "hex":"0100000001ff1e485467b9b0b2b5932b9a7574d1260e421e85708d278d3acbe712fac843b9020000006a47304402205cb91645ad0a0148c5c0c78f90a6f7d3bf46ec30b4bd71314572931195ed23b702203850aa90e75d595d298405293b32a188cfeef3624cd8bac4be078489551e61e00121026c09a2a27afe3314af008bbea80186108de59972605382809a78d277b3048dd2ffffffff022972000000000000160014e4517b08fe39c90b7900c32d9a7dfb1fa16ba1814ee10100000000001976a9143b944081068951cc1b040818ad95ee1146cbef6388ac00000000"
                }
            ],
            "outputs":[
                {
                    "address":"bc1qu3ghkz8788ysk7gqcvke5l0mr7skhgvpuk6dk4",
                    "amount":251476,
                    "addressType":"spend"
                }
            ],
            "version":1,
            "locktime":0,
            "opReturnData":""
        }

        let inputBroke = {
            "coin":"Bitcoin",
            "inputs":[
                {
                    "addressNList":[
                        2147483732,
                        2147483648,
                        2147483648,
                        0,
                        0
                    ],
                    "scriptType":"p2wpkh", //   bc1q8w2ypqgx39gucxcypqv2m90wz9rvhmmrcnpdjs
                    "amount":"38544",
                    "vout":0,
                    "txid":"a47f60ff416f17cc9b0543f8afe05ae8bad98c9c2c69c207ecc0d50799dc52f0",
                    "hex":"0200000000010192b0bf35840f7846fa0fbad2586bc2dd81d1ae2d82f1691e8726bb49fd11648f0100000000fdffffff0490960000000000001600143b944081068951cc1b040818ad95ee1146cbef63204e0000000000001976a914ff655cc26f2ec3d0e34030bdcf5182e95907a17488acbb4f00000000000017a914d57d7d91f1843c5ab88c9aa48a183363bda3a5cc8706fc020000000000160014b66b3f985645441b52cc64151816f8af697516cd02483045022100d7f1754e6959dc0dfef9da47cb701018aaf457e8d42cfc5db6a37ade94ef9df10220083359151180a80e82a54bd98bfc750f21fdbbdb08e24aebcf1cba7536858cfb0121022340c6019b5bd42bc28c85d88fb5880403eedb701f10b65eaf90e0a4634d199100000000"
                },
                {
                    "addressNList":[
                        2147483692,
                        2147483648,
                        2147483650,
                        0,
                        0
                    ],
                    "scriptType":"p2pkh",
                    "amount":"20000", //1QHQjhMTPNfiumEkVfqRwB9w57aJcXGghb
                    "vout":1,
                    "txid":"a47f60ff416f17cc9b0543f8afe05ae8bad98c9c2c69c207ecc0d50799dc52f0",
                    "hex":"0200000000010192b0bf35840f7846fa0fbad2586bc2dd81d1ae2d82f1691e8726bb49fd11648f0100000000fdffffff0490960000000000001600143b944081068951cc1b040818ad95ee1146cbef63204e0000000000001976a914ff655cc26f2ec3d0e34030bdcf5182e95907a17488acbb4f00000000000017a914d57d7d91f1843c5ab88c9aa48a183363bda3a5cc8706fc020000000000160014b66b3f985645441b52cc64151816f8af697516cd02483045022100d7f1754e6959dc0dfef9da47cb701018aaf457e8d42cfc5db6a37ade94ef9df10220083359151180a80e82a54bd98bfc750f21fdbbdb08e24aebcf1cba7536858cfb0121022340c6019b5bd42bc28c85d88fb5880403eedb701f10b65eaf90e0a4634d199100000000"
                },
                {
                    "addressNList":[
                        2147483697,
                        2147483648,
                        2147483648,
                        0,
                        0
                    ],
                    "scriptType":"p2sh-p2wpkh", // 3M9rBdu7rkVGwmt9gALjuRopAqpVEBdNRR
                    "amount":"20411",
                    "vout":2,
                    "txid":"a47f60ff416f17cc9b0543f8afe05ae8bad98c9c2c69c207ecc0d50799dc52f0",
                    "hex":"0200000000010192b0bf35840f7846fa0fbad2586bc2dd81d1ae2d82f1691e8726bb49fd11648f0100000000fdffffff0490960000000000001600143b944081068951cc1b040818ad95ee1146cbef63204e0000000000001976a914ff655cc26f2ec3d0e34030bdcf5182e95907a17488acbb4f00000000000017a914d57d7d91f1843c5ab88c9aa48a183363bda3a5cc8706fc020000000000160014b66b3f985645441b52cc64151816f8af697516cd02483045022100d7f1754e6959dc0dfef9da47cb701018aaf457e8d42cfc5db6a37ade94ef9df10220083359151180a80e82a54bd98bfc750f21fdbbdb08e24aebcf1cba7536858cfb0121022340c6019b5bd42bc28c85d88fb5880403eedb701f10b65eaf90e0a4634d199100000000"
                }
            ],
            "outputs":[
                {
                    "address":"bc1qu3ghkz8788ysk7gqcvke5l0mr7skhgvpuk6dk4",
                    "amount":"73099",
                    "addressType":"spend"
                }
            ],
            "version":1,
            "locktime":0
        }

        //push tx to api
        console.log("unsignedTx: 1 ", JSON.stringify(input))
        console.log("unsignedTx: 2 ", JSON.stringify(input2))
        let responseSign = await sdk.utxo.utxoSignTransaction(inputBroke);
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
