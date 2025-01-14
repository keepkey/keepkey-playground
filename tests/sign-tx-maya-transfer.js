
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
            addressNList: [2147483692, 2147484579, 2147483648, 0, 0],
            coin: 'Cosmos',
            scriptType: 'cosmos',
            showDisplay: false
        }

        //get address
        let {address} = await sdk.address.mayachainGetAddress({ address_n: addressInfo.addressNList })
        console.log("address: ", address)
        //msg

        let signDoc = {
            "account_number": "6967",
            "chain_id": "mayachain-mainnet-v1",
            "sequence": "28",
            "fee": {
                "amount": [
                    {
                        "amount": "0",
                        "denom": "cacao"
                    }
                ],
                "gas": "500000000"
            },
            "memo": "",
            "msgs": [
                {
                    "type": "mayachain/MsgSend",
                    "value": {
                        "amount": [
                            {
                                "amount": "1000000000",
                                "denom": "cacao"
                            }
                        ],
                        "from_address": address,
                        "to_address": "maya10vv88dr88r5llfxr7sxa2wv74sfx5lscql3hxt"
                    }
                }
            ]
        }

        // let input = {
        //     signDoc,
        //     signerAddress: address,
        // }

        let input = {"signerAddress":"maya1g9el7lzjwh9yun2c4jjzhy09j98vkhfxfqkl5k","signDoc":{"account_number":"6967","chain_id":"mayachain-mainnet-v1","fee":{"gas":"500000000","amount":[{"amount":"0","denom":"cacao"}]},"msgs":[{"value":{"amount":[{"denom":"MAYA.CACAO","amount":"266766764539"}],"to_address":"maya14jutklw4xaawvx0p90m45nur64mmhjz3mwmvvs","from_address":"maya1g9el7lzjwh9yun2c4jjzhy09j98vkhfxfqkl5k"},"type":"mayachain/MsgSend"}],"memo":" ","sequence":"53"}}
        console.log("input import: ",input)
        console.log("input import: ",JSON.stringify(input))
        let responseSign = await sdk.mayachain.mayachainSignAminoTransfer(input)
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
