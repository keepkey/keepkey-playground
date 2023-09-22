
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
          let msg = {
              "addressNList": [
                  2147483692,
                  2147484579,
                  2147483648,
                  0,
                  0
              ],
              "tx": {
                  "fee": {
                      "amount": [
                          {
                              "amount": "0",
                              "denom": "rune"
                          }
                      ],
                      "gas": "500000000"
                  },
                  "msg": [
                      {
                          "type": "thorchain/MsgDeposit",
                          "value": {
                              "coins": [
                                  {
                                      "asset": "THOR.RUNE",
                                      "amount": "70000000000"
                                  }
                              ],
                              "memo": "s:ETH.FOX-52D:0x27de622cc44c55b53caF299eCedccdAB29aC98A8:2937014586539:ss:30",
                              "signer": "thor1qnxqpu6a6m5wwsh4k2rt74xfunz259caqyqw27"
                          }
                      }
                  ],
                  "signatures": [],
                  "memo": "s:ETH.FOX-52D:0x27de622cc44c55b53caF299eCedccdAB29aC98A8:2937014586539:ss:30"
              },
              "chain_id": "thorchain-mainnet-v1",
              "account_number": "70145",
              "sequence": "0"
          }
        console.log("msg.tx.msgs: ",msg.tx.msg)
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
        let responseSign = await sdk.thorchain.thorchainSignAminoDeposit(input)
        //let responseSign = await sdk.cosmos.cosmosSignAminoRedelegate(input)
        console.log("responseSign: ",responseSign)
    } catch (e) {
        // console.error(e)
        console.error("error: ",e)
        console.error("error.response: ",e.response)
        // console.error("error.response.body: ",e.response.body)
        // console.error("error.response.statusText: ",e.response.statusText)
    }
}

run_test()
