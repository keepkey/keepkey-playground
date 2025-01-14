
const { KeepKeySdk, SignDocTransfer  } = require("@keepkey/keepkey-sdk")

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
            addressNList: [                2147483692,
                2147484579,
                2147483648,
                0,
                0],
            coin: 'Cosmos',
            scriptType: 'cosmos',
            showDisplay: false
        }

        //get address
        let {address} = await sdk.address.thorchainGetAddress({ address_n: addressInfo.addressNList })
        console.log("address: ", address)
        //msg

        //
        // let raw = {
        //     "signDoc": {
        //         "fee": {
        //             "gas": "0",
        //             "amount": []
        //         },
        //         "msgs": [
        //             {
        //                 "value": {
        //
        //                 },
        //                 "type": "thorchain/MsgDeposit"
        //             }
        //         ],
        //         "memo": "s:ETH.ETH:0x141D9959cAe3853b035000490C03991eB70Fc4aC:854399:ss:30",
        //         "sequence": "1"
        //     },
        //     "signerAddress": "thor1g9el7lzjwh9yun2c4jjzhy09j98vkhfxfhgnzx"
        // }

        //Unsigned TX
        let msg = {
            "addressNList":[
                2147483692,
                2147484579,
                2147483648,
                0,
                0
            ],
            "tx":{
                "msg":[
                    {
                        "type": "thorchain/MsgSend",
                        "value": {
                            "amount":
                                [{
                                    "amount": "100",
                                    "denom": "rune"
                                }]
                            ,
                            "from_address": address,
                            "to_address": "thor1wy58774wagy4hkljz9mchhqtgk949zdwwe80d5"
                        }
                    }
                ],
                "fee":{
                    "gas":"0",
                    "amount":[
                        {
                            "denom":"urune",
                            "amount":"1000"
                        }
                    ]
                },
                "signatures":[

                ],
                "memo":"1234"
            },
            "sequence":"8",
            account_number:"2722"
        }
        console.log("msg.tx.msgs: ",msg.tx.msgs)
        let input = {
            signDoc: {
                "chain_id":"thorchain",
                msgs: msg.tx.msg,
                memo: msg.tx.memo ?? '',
                sequence: msg.sequence,
                account_number:"12",
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

        //let broke = {"signerAddress":"thor1g9el7lzjwh9yun2c4jjzhy09j98vkhfxfhgnzx","signDoc":{"account_number":"71826","chain_id":"thorchain-1","fee":{"gas":"500000000","amount":[{"amount":"0","denom":"rune"}]},"msgs":[{"value":{"amount":[{"denom":"rune","amount":"76596"}],"to_address":"thor10t3zmsks33mgf7ajkmzj2elt553ufrxgav90ms","from_address":"thor1g9el7lzjwh9yun2c4jjzhy09j98vkhfxfhgnzx"},"type":"thorchain/MsgSend"}],"memo":" ","sequence":"54"}}
        //let broke = {"signerAddress":"thor1g9el7lzjwh9yun2c4jjzhy09j98vkhfxfhgnzx","signDoc":{"account_number":"71826","chain_id":"thorchain-1","fee":{"gas":"500000000","amount":[{"amount":"0","denom":"rune"}]},"msgs":[{"value":{"amount":[{"denom":"rune","amount":"765888178"}],"to_address":"thor1sjg2y8rz78d9dscsjenveg3k3jtkuyj46wl5ec","from_address":"thor1g9el7lzjwh9yun2c4jjzhy09j98vkhfxfhgnzx"},"type":"thorchain/MsgSend"}],"memo":" ","sequence":"55"}}
        //let broke = {"signerAddress":"thor1g9el7lzjwh9yun2c4jjzhy09j98vkhfxfhgnzx","signDoc":{"account_number":"71826","chain_id":"thorchain-1","fee":{"gas":"500000000","amount":[{"amount":"0","denom":"rune"}]},"msgs":[{"value":{"amount":[{"denom":"rune","amount":"691856028"}],"to_address":"thor10t3zmsks33mgf7ajkmzj2elt553ufrxgav90ms","from_address":"thor1g9el7lzjwh9yun2c4jjzhy09j98vkhfxfhgnzx"},"type":"thorchain/MsgSend"}],"memo":" ","sequence":"59"}}

        console.log("input import: ",input)
        console.log("input import: ",JSON.stringify(input))
        let responseSign = await sdk.thorchain.thorchainSignAminoTransfer(input)
        //let responseSign = await sdk.cosmos.cosmosSignAminoRedelegate(input)
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
