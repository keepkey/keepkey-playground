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
        // console.log(kk.instance.SignTransaction())
        let responseSign = await sdk.sign.signTransaction({ body: { data: { invocation: { unsignedTx } } } })
        console.log("responseSign: ", responseSign.data)
        console.log("responseSign: ", responseSign.data.signedTx)
        console.log("responseSign: ", JSON.stringify(responseSign.data.signedTx))

    } catch (e) {
        console.error(e)
    }
}

run_test()