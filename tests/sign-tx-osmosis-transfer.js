
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

        let tx = {
            "chain_id": "osmosis-1",
            "account_number": "95421",
            "sequence": "35",
            "msg": [
                {
                    "type": "cosmos-sdk/MsgSend",
                    "value": {
                        "from_address": "osmo1qjwdyn56ecagk8rjf7crrzwcyz6775cj07qz9r",
                        "to_address": "osmo15cenya0tr7nm3tz2wn3h3zwkht2rxrq7g9ypmq",
                        "amount": [
                            {
                                "denom": "uosmo",
                                "amount": "1000"
                            }
                        ]
                    }
                }
            ],
            "fee": {
                "amount": [
                    {
                        "denom": "uosmo",
                        "amount": "2800"
                    }
                ],
                "gas": "80000"
            },
            "signatures": [],
            "memo": "hello world",
            "timeout_height": "0"
        }


        //Unsigned TX
        let unsignedTx = {
            "network": "OSMO",
            "asset": "OSMO",
            "transaction": {
                "context": "0x33b35c665496bA8E71B22373843376740401F106.wallet",
                "type": "transfer",
                "addressFrom": "osmo1qjwdyn56ecagk8rjf7crrzwcyz6775cj07qz9r",
                "recipient": "osmo15cenya0tr7nm3tz2wn3h3zwkht2rxrq7g9ypmq",
                "asset": "OSMO",
                "network": "OSMO",
                "memo": "",
                "amount": "0.0001",
                "fee": {
                    "priority": 5
                },
                "noBroadcast": true
            },
            "HDwalletPayload": {
                tx,
                "addressNList": [2147483692, 2147483766, 2147483648, 0, 0],
                chain_id: tx.chain_id,
                account_number: tx.account_number,
                sequence: tx.sequence,
            },
            "verbal": "osmosis transfer transaction"
        }

        //push tx to api
        // console.log(kk.instance.SignTransaction())
        let responseSign = await sdk.sign.signTransaction({ body: { data: { invocation: { unsignedTx } } } })
        console.log("responseSign: ", responseSign.data)

    } catch (e) {
        console.error(e)
    }
}

run_test()