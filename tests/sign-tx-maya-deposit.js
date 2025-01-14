
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
            addressNList: [2147483692, 2147483708, 2147483648, 0, 0],
            coin: 'Cosmos',
            scriptType: 'cosmos',
            showDisplay: false
        }

        //get address
        let {address} = await sdk.address.mayachainGetAddress({ address_n: addressInfo.addressNList })
        console.log("address: ", address)
        //msg

        let signDoc = {
            "account_number": "6359",
            "chain_id": "mayachain-mainnet-v1",
            "sequence": "19",
            "fee": {
                "amount": [
                    {
                        "amount": "3000",
                        "denom": "cacao"
                    }
                ],
                "gas": "200000"
            },
            "memo": "",
            "msgs": [
                {
                    "type": "mayachain/MsgDeposit",
                    "value": {
                        "coins": [
                            {
                                "asset": "MAYA.CACAO",
                                "amount": "1000000"
                            }
                        ],
                        "memo": "SWAP:DASH.DASH:XdTw4G5AWW4cogGd7ayybyBNDbuB45UpgH:10000",
                        "signer": "maya1ls33ayg26kmltw7jjy55p32ghjna09zp7z4etj"
                    }
                }
            ],
            "signatures": []
        }

        let input = {
            signDoc,
            signerAddress: address,
        }

        console.log("input import: ",input)
        console.log("input import: ",JSON.stringify(input))
        let responseSign = await sdk.mayachain.mayachainSignAminoDeposit(input)
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
