
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
        //msg
        //
        let raw = {
            "signDoc": {
                "fee": {
                    "gas": "0",
                    "amount": []
                },
                "msgs": [
                    {
                        "value": {
                            "amount": [
                                {
                                    "amount": "2503274",
                                    "denom": "uatom"
                                },
                            ],
                            "from_address": "cosmos1rs7fckgznkaxs4sq02pexwjgar43p5wn7akqnc",
                            "to_address": "cosmos16azur03a4k2qttwk4hpsujuz6x6q547w4hnnpu"
                        },
                        "type": "cosmos-sdk/MsgSend"
                    }
                ],
                "memo": "s:ETH.ETH:0x141D9959cAe3853b035000490C03991eB70Fc4aC:961587:ss:30",
                "sequence": "12",
                "chain_id": "cosmoshub-4",
                "account_number": "1563453"
            },
            "signerAddress": "cosmos1rs7fckgznkaxs4sq02pexwjgar43p5wn7akqnc"
        }

        //

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
        let responseSign = await sdk.cosmos.cosmosSignAmino(input)
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
