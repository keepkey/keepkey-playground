const { KeepKeySdk } = require("@keepkey/keepkey-sdk")

let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function () {
    try {
        let config = {
            apiKey: process.env['SERVICE_KEY'] || 'test-123',
            pairingInfo:{
                name: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
                imageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
                basePath:spec
            }
        }
        //init
        const sdk = await KeepKeySdk.create(config)

        let toAddress = "rU6ByS8KEgTdVEtV1P8RSMxUxP26THqkye"
        let fromAddress = "rU6ByS8KEgTdVEtV1P8RSMxUxP26THqkye"
        let amount = "1000"

        let tx = {
            "type": "auth/StdTx",
            "value": {
                "fee": {
                    "amount": [
                        {
                            "amount": "1000",
                            "denom": "drop"
                        }
                    ],
                    "gas": "28000"
                },
                "memo": "KeepKey",
                "msg": [
                    {
                        "type": "ripple-sdk/MsgSend",
                        "value": {
                            "amount": [
                                {
                                    "amount": amount,
                                    "denom": "drop"
                                }
                            ],
                            "from_address": fromAddress,
                            "to_address": toAddress
                        }
                    }
                ],
                "signatures": null
            }
        }

        //Unsigned TX
        let unsignedTx = {
            "network": "XRP",
            "asset": "XRP",
            "transaction": {
                "context": "0x33b35c665496bA8E71B22373843376740401F106.wallet",
                "type": "transfer",
                "addressFrom": "rU6ByS8KEgTdVEtV1P8RSMxUxP26THqkye",
                "recipient": "rU6ByS8KEgTdVEtV1P8RSMxUxP26THqkye",
                "asset": "XRP",
                "network": "XRP",
                "memo": "",
                "amount": "0.0001",
                "fee": {
                    "priority": 5
                },
                "noBroadcast": true
            },
            "HDwalletPayload": {
                "addressNList": [
                    2147483692,
                    2147483708,
                    2147483648,
                    0,
                    0
                ],
                tx:tx,
                flags: undefined,
                sequence: "3",
                lastLedgerSequence: "0",
                payment: {
                    amount: amount,
                    destination: toAddress,
                    destinationTag: "1234567890",
                },
            },
            "verbal": "Ripple transaction"
        }

        //push tx to api
        console.log("unsignedTx: ", JSON.stringify(unsignedTx.HDwalletPayload))
        let responseSign = await sdk.xrp.xrpSignTransaction(unsignedTx.HDwalletPayload)
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