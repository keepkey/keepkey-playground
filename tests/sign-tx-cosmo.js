
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
            "addressNList": [2147483692, 2147483708, 2147483648, 0, 0],
            "tx":{
                "msg":[
                    {
                        "value":{
                            "amount":
                                {
                                    "denom":"uatom",
                                    "amount":"1000"
                                }
                            ,
                            "to_address":"cosmos17htlvce5ys8hqhxlkatyuhv8qwtx72ayqnrcks",
                            "from_address":address
                        },
                        "type":"cosmos-sdk/MsgSend"
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
            accountNumber:"574492"
        }

        let input = {
            signDoc: {
                // "accountNumber":"574492",
                // "chainId":"cosmoshub-4",
                "account_number":"574492",
                "chain_id":"cosmoshub-4",
                msgs: msg.tx.msg,
                memo: msg.tx.memo ?? '',
                sequence: msg.sequence,
                fee: {
                    gas: String(msg.fee ?? 0),
                    amount: [],
                },
            },
            signerAddress: address,
        }
        console.log("input: ",JSON.stringify(input))
        let responseSign = await sdk.cosmos.cosmosSignAmino(input)
        console.log(responseSign)
    } catch (e) {
        console.error("error.response.body: ",e.response.body)
        console.error("error.response.statusText: ",e.response.statusText)
    }
}

run_test()
