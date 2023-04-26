
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

        // console.log(sdk.eth)
        //Unsigned TX
        let addressInfo = {
            addressNList: [2147483692, 2147483708, 2147483648, 0, 0],
            coin: 'Cosmos',
            scriptType: 'cosmos',
            showDisplay: false
        }

        //get address
        let {address} = await sdk.address.cosmosGetAddress({ address_n: addressInfo.addressNList })
        console.log("address: ", address)

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
                        // "value":{
                        //     "amount":[
                        //         {
                        //             "denom":"uatom",
                        //             "amount":"1000"
                        //         }
                        //     ],
                        //     "to_address":"cosmos17htlvce5ys8hqhxlkatyuhv8qwtx72ayqnrcks",
                        //     "from_address":address
                        // },
                        // "type":"cosmos-sdk/MsgSend"

                        //delegate
                        "type": "cosmos-sdk/MsgTransfer", //cosmos-sdk/MsgDelegate
                        "value": {
                            "token": {
                                "denom": "uatom",
                                "amount": "184775"
                            },
                            "source_port":"transfer",
                            "source_channel":"channel-141",
                            "sender": address,
                            "receiver": "osmo15cenya0tr7nm3tz2wn3h3zwkht2rxrq7g9ypmq",
                            "timeout_height": {
                                "revision_height": "9339851",
                                "revision_number": "1"
                            },
                            "memo":"test"
                        }
                    }
                ],
                "fee":{
                    "gas":"0",
                    "amount":[
                        {
                            "denom":"uatom",
                            "amount":"1000"
                        }
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
                "chain_id":"cosmoshub-4",
                msgs: msg.tx.msg,
                memo: msg.tx.memo ?? '',
                sequence: msg.sequence,
                fee: {
                    "amount": [
                        {
                            "amount": "2500",
                            "denom": "uatom"
                        }
                    ],
                    "gas": "250000"
                },
            },
            signerAddress: address,
        }
        console.log("input: ",input)
        // let responseSign = await sdk.cosmos.cosmosSignAmino(input)
        let responseSign = await sdk.cosmos.cosmosSignAminoIbcTransfer(input)
        console.log("responseSign: ",responseSign)
    } catch (e) {
        // console.error(e)
        console.error("error: ",e)
        console.error("error.response: ",e.response)
        console.error("error.response.body: ",e.response.body)
        console.error("error.response.statusText: ",e.response.statusText)
    }
}

run_test()