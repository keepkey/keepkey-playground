
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

        /*

        {
    "signDoc": {
        "account_number": "798680",
        "chain_id": "osmosis-1",
        "msgs": [
            {
                "type": "cosmos-sdk/MsgDelegate",
                "value": {
                    "amount": {
                        "amount": "184775",
                        "denom": "uosmo"
                    },
                    "delegator_address": "osmo1rs7fckgznkaxs4sq02pexwjgar43p5wnkx9s92",
                    "validator_address": "osmovaloper1xf9zpq5kpxks49cg606tzd8qstaykxgt2vs0d5"
                }
            }
        ],
        "memo": "Delegated with ShapeShift",
        "sequence": "1",
        "fee": {
            "gas": "0",
            "amount": []
        }
    },
    "signerAddress": "osmo1rs7fckgznkaxs4sq02pexwjgar43p5wnkx9s92"
}

         */

        //Unsigned TX
        let msg = {
            "addressNList":[
                2147483692,
                2147483766,
                2147483648,
                0,
                0
            ],
            "tx":{
                "msg":[
                    {
                        "type": "cosmos-sdk/MsgDelegate",
                        "value": {
                            "amount": [{
                                "amount": "184775",
                                "denom": "uosmo"
                            }],
                            "delegator_address": "osmo1svf8fucy9m7xhpdf8t3n46j22kr8fh5uaqdf9e",
                            "validator_address": "osmovaloper1xf9zpq5kpxks49cg606tzd8qstaykxgt2vs0d5"
                        }
                    }
                ],
                "fee":{
                    "gas":"0",
                    "amount":[

                    ]
                },
                "signatures":[

                ],
                "memo":"1234"
            },
            "sequence":"8",
            accountNumber:""
        }

        let input = {
            signDoc: {
                // "accountNumber":"574492",
                // "chainId":"cosmoshub-4",
                "account_number":"95421",
                "chain_id":"osmosis-1",
                // TODO: busted openapi-generator types
                // @ts-expect-error
                msgs: msg.tx.msg,
                memo: msg.tx.memo ?? '',
                sequence: msg.sequence,
                fee: {
                    gas: String(msg.fee ?? 0),
                    amount: [],
                },
            },
            signerAddress: "osmo1svf8fucy9m7xhpdf8t3n46j22kr8fh5uaqdf9e",
        }
        console.log("input: ",input)
        let responseSign = await sdk.osmosis.osmosisSignAmino(input)
        console.log(responseSign)
    } catch (e) {
        console.error(e)
    }
}

run_test()