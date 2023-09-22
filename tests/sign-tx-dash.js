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
        let inputDash = {
            "coin": "Dash",
            "inputs": [
                {
                    //"addressNList": [2147483692, 2147483653, 2147483648, 0, 0],
                    "scriptType": "p2pkh",
                    "amount": "138791400",
                    "vout": 0,
                    "txid": "7bf822b0d24094b9eb95bc536fc83e2ea2250d76b3ee485efa173ba91a607eaf",
                    "hex": "0200000001bd45d819befe8eb4f63c7cab40f54310a88da6d6a434f6856085bb0a318f6315000000006b483045022100fffe72251016e22a9d62cb5e81880014471a8670df9972428e9384116c6f8ff102207ad2846253e6e107731d5a062998fff0b142a905552dbe37b59ede3ec2db65000121020e4325904d8f1473cc2a5841d53bfe0a2e7d01fdbd947adb76d99cb58bf6cec0fdffffff02e8c94508000000001976a914e2e74abdea3612eeb9def06e9c54bbb62b74daf688acff944e01000000001976a914ef8b1dac4586c7d94eb208f5a91365946ff72b3188ac00000000",
                }
            ],
            "outputs": [
                {
                    "address": "XwNbd46qdmbVWLdXievBhBMW7JYy8WiE7n",
                    "addressType": "spend",
                    "scriptType": "p2pkh",
                    "amount": "1000000",
                    "isChange": false
                },
                {
                    "addressNList": [2147483692, 2147483653, 2147483648, 0, 0],
                    "addressType": "spend",
                    "scriptType": "p2pkh",
                    "amount": "137789140",
                    "isChange": true
                }
            ],
            "version": 1,
            "locktime": 0
        }

        // let input = {
        //     "coin": "Bitcoin",
        //     "inputs": [
        //         {
        //             "addressNList": [
        //                 2147483692,
        //                 2147483653,
        //                 2147483648,
        //                 0,
        //                 0
        //             ],
        //             "amount": "390000",
        //             "hex": "0100000002cfdd9ee3b0ed9d9045f29a252d4c78ecac6c5814b67a29b5f6998fcff1036ac1010000008b483045022072ba61305fe7cb542d142b8f3299a7b10f9ea61f6ffaab5dca8142601869d53c0221009a8027ed79eb3b9bc13577ac2853269323434558528c6b6a7e542be46e7e9a820141047a2d177c0f3626fc68c53610b0270fa6156181f46586c679ba6a88b34c6f4874686390b4d92e5769fbb89c8050b984f4ec0b257a0e5c4ff8bd3b035a51709503ffffffffaf3e45194a9bb60c6108abe8d9d039e0618e8a147911c68f0c67598d2f9ae31a010000008b48304502200fd63adc8f6cb34359dc6cca9e5458d7ea50376cbd0a74514880735e6d1b8a4c0221008b6ead7fe5fbdab7319d6dfede3a0bc8e2a7c5b5a9301636d1de4aa31a3ee9b101410486ad608470d796236b003635718dfc07c0cac0cfc3bfc3079e4f491b0426f0676e6643a39198e8e7bdaffb94f4b49ea21baa107ec2e237368872836073668214ffffffff0170f30500000000001976a91424a56db43cf6f2b02e838ea493f95d8d6047423188ac00000000",
        //             "scriptType": "p2pkh",
        //             "tx": {
        //                 "version": 1,
        //                 "locktime": 0,
        //                 // "hash": "7bf822b0d24094b9eb95bc536fc83e2ea2250d76b3ee485efa173ba91a607eaf",
        //                 // "hex": "0200000001bd45d819befe8eb4f63c7cab40f54310a88da6d6a434f6856085bb0a318f6315000000006b483045022100fffe72251016e22a9d62cb5e81880014471a8670df9972428e9384116c6f8ff102207ad2846253e6e107731d5a062998fff0b142a905552dbe37b59ede3ec2db65000121020e4325904d8f1473cc2a5841d53bfe0a2e7d01fdbd947adb76d99cb58bf6cec0fdffffff02e8c94508000000001976a914e2e74abdea3612eeb9def06e9c54bbb62b74daf688acff944e01000000001976a914ef8b1dac4586c7d94eb208f5a91365946ff72b3188ac00000000",
        //                 // "txid": "7bf822b0d24094b9eb95bc536fc83e2ea2250d76b3ee485efa173ba91a607eaf",
        //                 "vin": [
        //                     {
        //                         // "addr": "XdsAkkhiH66eCJx445hQ1s4Fdi5eNkwfd4",
        //                         vout: 1,
        //                         "sequence": 4294967295,
        //                         "scriptSig": {
        //                             "hex": "483045022072ba61305fe7cb542d142b8f3299a7b10f9ea61f6ffaab5dca8142601869d53c0221009a8027ed79eb3b9bc13577ac2853269323434558528c6b6a7e542be46e7e9a820141047a2d177c0f3626fc68c53610b0270fa6156181f46586c679ba6a88b34c6f4874686390b4d92e5769fbb89c8050b984f4ec0b257a0e5c4ff8bd3b035a51709503"
        //                         },
        //                         "txid": "c16a03f1cf8f99f6b5297ab614586cacec784c2d259af245909dedb0e39eddcf",
        //                         // "value": 160723567,
        //                         // "valueSat": 160723567
        //                     },
        //                     {
        //                         "scriptSig": {
        //                             "hex": "48304502200fd63adc8f6cb34359dc6cca9e5458d7ea50376cbd0a74514880735e6d1b8a4c0221008b6ead7fe5fbdab7319d6dfede3a0bc8e2a7c5b5a9301636d1de4aa31a3ee9b101410486ad608470d796236b003635718dfc07c0cac0cfc3bfc3079e4f491b0426f0676e6643a39198e8e7bdaffb94f4b49ea21baa107ec2e237368872836073668214"
        //                         },
        //                         "sequence": 4294967295,
        //                         "txid": "1ae39a2f8d59670c8fc61179148a8e61e039d0d9e8ab08610cb69b4a19453eaf",
        //                         "vout": 1
        //                     }
        //                 ],
        //                 "vout": [
        //                     {
        //                         "value": "390000",
        //                         "scriptPubKey": {
        //                             "hex": "76a914e2e74abdea3612eeb9def06e9c54bbb62b74daf688ac"
        //                         },
        //                     },
        //                     // {
        //                     //     "value": "21927167",
        //                     //     "scriptPubKey": {
        //                     //         "hex": "76a914ef8b1dac4586c7d94eb208f5a91365946ff72b3188ac"
        //                     //     },
        //                     // }
        //                 ]
        //             },
        //             "txid": "d5f65ee80147b4bcc70b75e4bbf2d7382021b871bd8867ef8fa525ef50864882",
        //             "vout": 0,
        //         }
        //     ],
        //     "outputs": [
        //         {
        //             "address": "1MJ2tj2ThBE62zXbBYA5ZaN3fdve5CPAz1",
        //             "addressType": "spend",
        //             "amount": String(390000 - 10000),
        //             "isChange": false,
        //             // "scriptType": "p2pkh"
        //         },
        //         // {
        //         //     "address": "XkMz9QEgQdGes68LbzBEReqzUXArGgvD2F",
        //         //     "addressType": "change",
        //         //     "amount": "137789140",
        //         //     "isChange": true,
        //         //     "scriptType": "p2pkh"
        //         // }
        //     ],
        //     "version": 1,
        //     "locktime": 0,
        // }

        // let inputDash = {
        //     "coin": "Dash",
        //     "inputs": [
        //         {
        //             "addressNList": [
        //                 2147483692,
        //                 2147483653,
        //                 2147483648,
        //                 0,
        //                 0
        //             ],
        //             "scriptType": "p2pkh",
        //             "amount": "390000",
        //             "hex": "0200000001bd45d819befe8eb4f63c7cab40f54310a88da6d6a434f6856085bb0a318f6315000000006b483045022100fffe72251016e22a9d62cb5e81880014471a8670df9972428e9384116c6f8ff102207ad2846253e6e107731d5a062998fff0b142a905552dbe37b59ede3ec2db65000121020e4325904d8f1473cc2a5841d53bfe0a2e7d01fdbd947adb76d99cb58bf6cec0fdffffff02e8c94508000000001976a914e2e74abdea3612eeb9def06e9c54bbb62b74daf688acff944e01000000001976a914ef8b1dac4586c7d94eb208f5a91365946ff72b3188ac00000000",
        //             "txid": "7bf822b0d24094b9eb95bc536fc83e2ea2250d76b3ee485efa173ba91a607eaf",
        //             "vout": 0,
        //             "tx": {
        //                 // "txid": "7bf822b0d24094b9eb95bc536fc83e2ea2250d76b3ee485efa173ba91a607eaf",
        //                 // "hash": "7bf822b0d24094b9eb95bc536fc83e2ea2250d76b3ee485efa173ba91a607eaf",
        //                 "locktime": 0,
        //                 "version": 1,
        //                 "vin": [
        //                     {
        //                         "txid": "15638f310abb856085f634a4d6a68da81043f540ab7c3cf6b48efebe19d845bd",
        //                         // "addr": "XdsAkkhiH66eCJx445hQ1s4Fdi5eNkwfd4",
        //                         sequence: 4294967295,
        //                         "scriptSig": {
        //                             "hex": "0014459a4d8600bfdaa52708eaae5be1dcf959069efc"
        //                         },
        //                         // "valueSat": 160723567,
        //                         "value": 160723567,
        //                         "vout": 0
        //                     }
        //                 ],
        //                 "vout": [
        //                     {
        //                         "value": "138791400",
        //                         "scriptPubKey": {
        //                             "hex": "76a914e2e74abdea3612eeb9def06e9c54bbb62b74daf688ac"
        //                         }
        //                     },
        //                     {
        //                         "value": "21927167",
        //                         "scriptPubKey": {
        //                             "hex": "76a914ef8b1dac4586c7d94eb208f5a91365946ff72b3188ac"
        //                         }
        //                     }
        //                 ],
        //                 "hex": "0200000001bd45d819befe8eb4f63c7cab40f54310a88da6d6a434f6856085bb0a318f6315000000006b483045022100fffe72251016e22a9d62cb5e81880014471a8670df9972428e9384116c6f8ff102207ad2846253e6e107731d5a062998fff0b142a905552dbe37b59ede3ec2db65000121020e4325904d8f1473cc2a5841d53bfe0a2e7d01fdbd947adb76d99cb58bf6cec0fdffffff02e8c94508000000001976a914e2e74abdea3612eeb9def06e9c54bbb62b74daf688acff944e01000000001976a914ef8b1dac4586c7d94eb208f5a91365946ff72b3188ac00000000"
        //             }
        //         }
        //     ],
        //     "outputs": [
        //         {
        //             "address": "XwNbd46qdmbVWLdXievBhBMW7JYy8WiE7n",
        //             "addressType": "spend",
        //             "scriptType": "p2pkh",
        //             "amount": "1000000",
        //             "isChange": false
        //         },
        //         {
        //             "addressNList": [
        //                 2147483692,
        //                 2147483653,
        //                 2147483649,
        //                 2147483649
        //             ],
        //             "addressType": "spend",
        //             "scriptType": "p2pkh",
        //             "amount": "137789140",
        //             "isChange": true
        //         }
        //     ],
        //     "version": 1,
        //     "locktime": 0
        // }

        // let inputDash = {
        //     "coin": "Dash",
        //     "inputs": [
        //     {
        //         "addressNList": [
        //             2147483692,
        //             2147483653,
        //             2147483648,
        //             0,
        //             0
        //         ],
        //         "scriptType": "p2pkh",
        //         "amount": "390000",
        //         "hex": "0200000001bd45d819befe8eb4f63c7cab40f54310a88da6d6a434f6856085bb0a318f6315000000006b483045022100fffe72251016e22a9d62cb5e81880014471a8670df9972428e9384116c6f8ff102207ad2846253e6e107731d5a062998fff0b142a905552dbe37b59ede3ec2db65000121020e4325904d8f1473cc2a5841d53bfe0a2e7d01fdbd947adb76d99cb58bf6cec0fdffffff02e8c94508000000001976a914e2e74abdea3612eeb9def06e9c54bbb62b74daf688acff944e01000000001976a914ef8b1dac4586c7d94eb208f5a91365946ff72b3188ac00000000",
        //         "txid": "7bf822b0d24094b9eb95bc536fc83e2ea2250d76b3ee485efa173ba91a607eaf",
        //         "vout": 0,
        //         "tx": {
        //             // "txid": "7bf822b0d24094b9eb95bc536fc83e2ea2250d76b3ee485efa173ba91a607eaf",
        //             // "hash": "7bf822b0d24094b9eb95bc536fc83e2ea2250d76b3ee485efa173ba91a607eaf",
        //             "locktime": 0,
        //             "version": 1,
        //             "vin": [
        //                 {
        //                     "txid": "15638f310abb856085f634a4d6a68da81043f540ab7c3cf6b48efebe19d845bd",
        //                     // "addr": "XdsAkkhiH66eCJx445hQ1s4Fdi5eNkwfd4",
        //                     sequence: 4294967295,
        //                     "scriptSig": {
        //                         "hex": "0014459a4d8600bfdaa52708eaae5be1dcf959069efc"
        //                     },
        //                     // "valueSat": 160723567,
        //                     "value": 160723567,
        //                     "vout": 0
        //                 }
        //             ],
        //             "vout": [
        //                 {
        //                     "value": "138791400",
        //                     "scriptPubKey": {
        //                         "hex": "76a914e2e74abdea3612eeb9def06e9c54bbb62b74daf688ac"
        //                     }
        //                 },
        //                 {
        //                     "value": "21927167",
        //                     "scriptPubKey": {
        //                         "hex": "76a914ef8b1dac4586c7d94eb208f5a91365946ff72b3188ac"
        //                     }
        //                 }
        //             ],
        //             "hex": "0200000001bd45d819befe8eb4f63c7cab40f54310a88da6d6a434f6856085bb0a318f6315000000006b483045022100fffe72251016e22a9d62cb5e81880014471a8670df9972428e9384116c6f8ff102207ad2846253e6e107731d5a062998fff0b142a905552dbe37b59ede3ec2db65000121020e4325904d8f1473cc2a5841d53bfe0a2e7d01fdbd947adb76d99cb58bf6cec0fdffffff02e8c94508000000001976a914e2e74abdea3612eeb9def06e9c54bbb62b74daf688acff944e01000000001976a914ef8b1dac4586c7d94eb208f5a91365946ff72b3188ac00000000"
        //         }
        //     }
        // ],
        //     "outputs": [
        //     {
        //         "address": "XwNbd46qdmbVWLdXievBhBMW7JYy8WiE7n",
        //         "addressType": "spend",
        //         "scriptType": "p2pkh",
        //         "amount": "1000000",
        //         "isChange": false
        //     },
        //     {
        //         "addressNList": [
        //             2147483692,
        //             2147483653,
        //             2147483649,
        //             2147483649
        //         ],
        //         "addressType": "spend",
        //         "scriptType": "p2pkh",
        //         "amount": "137789140",
        //         "isChange": true
        //     }
        // ],
        //     "version": 1,
        //     "locktime": 0
        // }

        let inputBTC = {
            "coin": "Dash",
            "inputs": [
                {
                    "addressNList": [
                        2147483692,
                        2147483653,
                        2147483648,
                        0,
                        0
                    ],
                    // "scriptType": "p2pkh",
                    "amount": "390000",
                    "hex": "0200000001bd45d819befe8eb4f63c7cab40f54310a88da6d6a434f6856085bb0a318f6315000000006b483045022100fffe72251016e22a9d62cb5e81880014471a8670df9972428e9384116c6f8ff102207ad2846253e6e107731d5a062998fff0b142a905552dbe37b59ede3ec2db65000121020e4325904d8f1473cc2a5841d53bfe0a2e7d01fdbd947adb76d99cb58bf6cec0fdffffff02e8c94508000000001976a914e2e74abdea3612eeb9def06e9c54bbb62b74daf688acff944e01000000001976a914ef8b1dac4586c7d94eb208f5a91365946ff72b3188ac00000000",
                    "txid": "d5f65ee80147b4bcc70b75e4bbf2d7382021b871bd8867ef8fa525ef50864882",
                    "vout": 0,
                    // "tx": {
                    //     "locktime": 0,
                    //     "version": 1,
                    //     "vin": [
                    //         {
                    //             "scriptSig": {
                    //                 "hex": "483045022072ba61305fe7cb542d142b8f3299a7b10f9ea61f6ffaab5dca8142601869d53c0221009a8027ed79eb3b9bc13577ac2853269323434558528c6b6a7e542be46e7e9a820141047a2d177c0f3626fc68c53610b0270fa6156181f46586c679ba6a88b34c6f4874686390b4d92e5769fbb89c8050b984f4ec0b257a0e5c4ff8bd3b035a51709503"
                    //             },
                    //             "sequence": 4294967295,
                    //             "txid": "c16a03f1cf8f99f6b5297ab614586cacec784c2d259af245909dedb0e39eddcf",
                    //             "vout": 1
                    //         },
                    //         {
                    //             "scriptSig": {
                    //                 "hex": "48304502200fd63adc8f6cb34359dc6cca9e5458d7ea50376cbd0a74514880735e6d1b8a4c0221008b6ead7fe5fbdab7319d6dfede3a0bc8e2a7c5b5a9301636d1de4aa31a3ee9b101410486ad608470d796236b003635718dfc07c0cac0cfc3bfc3079e4f491b0426f0676e6643a39198e8e7bdaffb94f4b49ea21baa107ec2e237368872836073668214"
                    //             },
                    //             "sequence": 4294967295,
                    //             "txid": "1ae39a2f8d59670c8fc61179148a8e61e039d0d9e8ab08610cb69b4a19453eaf",
                    //             "vout": 1
                    //         }
                    //     ],
                    //     "vout": [
                    //         {
                    //             "scriptPubKey": {
                    //                 "hex": "76a91424a56db43cf6f2b02e838ea493f95d8d6047423188ac"
                    //             },
                    //             "value": "390000"
                    //         }
                    //     ]
                    // }
                }
            ],
            "outputs": [
                {
                    "address": "XwNbd46qdmbVWLdXievBhBMW7JYy8WiE7n",
                    "addressType": "spend",
                    "scriptType": "p2pkh",
                    "amount": "1000000",
                    "isChange": false
                },
                {
                    "addressNList": [
                        2147483692,
                        2147483653,
                        2147483648,
                        0,
                        0
                    ],
                    "addressType": "change",
                    "scriptType": "p2pkh",
                    "amount": "137789140",
                    "isChange": true
                }
            ],
            "version": 1,
            "locktime": 0,
        }

        // let inputBTC = {
        //     "coin": "Bitcoin",
        //     "inputs": [
        //         {
        //             "addressNList": [
        //                 2147483692,
        //                 2147483653,
        //                 2147483648,
        //                 0,
        //                 0
        //             ],
        //             "amount": "390000",
        //             "hex": "0100000002cfdd9ee3b0ed9d9045f29a252d4c78ecac6c5814b67a29b5f6998fcff1036ac1010000008b483045022072ba61305fe7cb542d142b8f3299a7b10f9ea61f6ffaab5dca8142601869d53c0221009a8027ed79eb3b9bc13577ac2853269323434558528c6b6a7e542be46e7e9a820141047a2d177c0f3626fc68c53610b0270fa6156181f46586c679ba6a88b34c6f4874686390b4d92e5769fbb89c8050b984f4ec0b257a0e5c4ff8bd3b035a51709503ffffffffaf3e45194a9bb60c6108abe8d9d039e0618e8a147911c68f0c67598d2f9ae31a010000008b48304502200fd63adc8f6cb34359dc6cca9e5458d7ea50376cbd0a74514880735e6d1b8a4c0221008b6ead7fe5fbdab7319d6dfede3a0bc8e2a7c5b5a9301636d1de4aa31a3ee9b101410486ad608470d796236b003635718dfc07c0cac0cfc3bfc3079e4f491b0426f0676e6643a39198e8e7bdaffb94f4b49ea21baa107ec2e237368872836073668214ffffffff0170f30500000000001976a91424a56db43cf6f2b02e838ea493f95d8d6047423188ac00000000",
        //             "scriptType": "p2pkh",
        //             "tx": {
        //                 "locktime": 0,
        //                 "version": 1,
        //                 "vin": [
        //                     {
        //                         "scriptSig": {
        //                             "hex": "483045022072ba61305fe7cb542d142b8f3299a7b10f9ea61f6ffaab5dca8142601869d53c0221009a8027ed79eb3b9bc13577ac2853269323434558528c6b6a7e542be46e7e9a820141047a2d177c0f3626fc68c53610b0270fa6156181f46586c679ba6a88b34c6f4874686390b4d92e5769fbb89c8050b984f4ec0b257a0e5c4ff8bd3b035a51709503"
        //                         },
        //                         "sequence": 4294967295,
        //                         "txid": "c16a03f1cf8f99f6b5297ab614586cacec784c2d259af245909dedb0e39eddcf",
        //                         "vout": 1
        //                     },
        //                     {
        //                         "scriptSig": {
        //                             "hex": "48304502200fd63adc8f6cb34359dc6cca9e5458d7ea50376cbd0a74514880735e6d1b8a4c0221008b6ead7fe5fbdab7319d6dfede3a0bc8e2a7c5b5a9301636d1de4aa31a3ee9b101410486ad608470d796236b003635718dfc07c0cac0cfc3bfc3079e4f491b0426f0676e6643a39198e8e7bdaffb94f4b49ea21baa107ec2e237368872836073668214"
        //                         },
        //                         "sequence": 4294967295,
        //                         "txid": "1ae39a2f8d59670c8fc61179148a8e61e039d0d9e8ab08610cb69b4a19453eaf",
        //                         "vout": 1
        //                     }
        //                 ],
        //                 "vout": [
        //                     {
        //                         "scriptPubKey": {
        //                             "hex": "76a91424a56db43cf6f2b02e838ea493f95d8d6047423188ac"
        //                         },
        //                         "value": "390000"
        //                     }
        //                 ]
        //             },
        //             "txid": "d5f65ee80147b4bcc70b75e4bbf2d7382021b871bd8867ef8fa525ef50864882",
        //             "vout": 0
        //         }
        //     ],
        //     "locktime": 0,
        //     "outputs": [
        //         {
        //             "address": "1MJ2tj2ThBE62zXbBYA5ZaN3fdve5CPAz1",
        //             "addressType": "spend",
        //             "amount": "380000",
        //             "isChange": false
        //         }
        //     ],
        //     "version": 1
        // }

        let input = inputDash
        // let input = inputBTC
        //push tx to api
        console.log("unsignedTx: ", JSON.stringify(input))

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
