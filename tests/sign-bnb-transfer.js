
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
            coin: 'Binance',
            scriptType: 'binance',
            showDisplay: false
        }
        //get address
        let {address} = await sdk.address.binanceGetAddress({ address_n: addressInfo.addressNList })
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
                        "inputs": [
                            {
                                "address": "bnb1afwh46v6nn30nkmugw5swdmsyjmlxslgjfugre",
                                "coins": [
                                    {
                                        "amount": 1000,
                                        "denom": "BNB"
                                    }
                                ]
                            }
                        ],
                        "outputs": [
                            {
                                "address": "bnb1v7wds8atg9pxss86vq5qjuz38wqsadq7e5m2rr",
                                "coins": [
                                    {
                                        "amount": 1000,
                                        "denom": "BNB"
                                    }
                                ]
                            }
                        ]
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
                "account_number": "471113",
                "chain_id": "Binance-Chain-Tigris",
                msgs: msg.tx.msg,
                memo: msg.tx.memo ?? '',
                "source": "0",
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
        let responseSign = await sdk.bnb.bnbSignTransaction(input)
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