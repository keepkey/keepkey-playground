
const { KeepKeySdk } = require("@keepkey/keepkey-sdk")

let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function () {
    try {

        let config = {
            apiKey: process.env['SERVICE_KEY'] || 'a0511aea-9fb7-4e68-a41c-636f1f97ce0d',
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
        let {address} = await sdk.address.thorchainGetAddress({ address_n: addressInfo.addressNList })
        console.log("address: ", address)
        //msg

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
                "chain_id":"thorchain-mainnet-v1",
                msgs: msg.tx.msg,
                memo: msg.tx.memo ?? '',
                sequence: msg.sequence,
                fee: {
                    "amount": [
                        {
                            "amount": "2500",
                            "denom": "rune"
                        }
                    ],
                    "gas": "250000"
                },
            },
            signerAddress: address,
        }
        console.log("input: ",input)
        console.log("JSON: ",JSON.stringify(input))

        //broke
        let inputBroke = {
            "signerAddress":"thor1g9el7lzjwh9yun2c4jjzhy09j98vkhfxfhgnzx",
            "signDoc":
                {
                    "account_number":"71826",
                    "chain_id":"thorchain-1",
                    "fee":{
                        "gas":"500000000",
                        "amount":[
                            {"amount":"0","denom":"rune"}
                        ]
                    },
                    "msgs":[
                        {
                            "value":{
                                "coins":[
                                        {"asset":"THOR.RUNE","amount":"200000000"}
                                    ],
                                    "memo":"=:ETH.ETH:0x141D9959cAe3853b035000490C03991eB70Fc4aC",
                                    "signer":"thor1g9el7lzjwh9yun2c4jjzhy09j98vkhfxfhgnzx"
                                },
                            "type":"thorchain/MsgDeposit"
                        }
                    ],
                    "memo":"=:ETH.ETH:0x141D9959cAe3853b035000490C03991eB70Fc4aC",
                    "sequence":"59"
                }
        }

        let responseSign = await sdk.thorchain.thorchainSignAminoDeposit(inputBroke)
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
