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

        let addressInfo = {
            addressNList: [2147483692, 2147483708, 2147483648, 0, 0],
            coin: 'Ethereum',
            scriptType: 'ethereum',
            showDisplay: false
        }

        let {address} = await sdk.address.ethereumGetAddress({ address_n: addressInfo.addressNList })
        console.log("address: ", address)

        let input = {
            "addressNList":[
                2147483692,
                2147483708,
                2147483648,
                0,
                0
            ],
            address,
            "typedData":{
                "types":{
                    "PermitSingle":[
                        {
                            "name":"details",
                            "type":"PermitDetails"
                        },
                        {
                            "name":"spender",
                            "type":"address"
                        },
                        {
                            "name":"sigDeadline",
                            "type":"uint256"
                        }
                    ],
                    "PermitDetails":[
                        {
                            "name":"token",
                            "type":"address"
                        },
                        {
                            "name":"amount",
                            "type":"uint160"
                        },
                        {
                            "name":"expiration",
                            "type":"uint48"
                        },
                        {
                            "name":"nonce",
                            "type":"uint48"
                        }
                    ],
                    "EIP712Domain":[
                        {
                            "name":"name",
                            "type":"string"
                        },
                        {
                            "name":"chainId",
                            "type":"uint256"
                        },
                        {
                            "name":"verifyingContract",
                            "type":"address"
                        }
                    ]
                },
                "domain":{
                    "name":"Permit2",
                    "chainId":"1",
                    "verifyingContract":"0x000000000022d473030f116ddee9f6b43ac78ba3"
                },
                "primaryType":"PermitSingle",
                "message":{
                    "details":{
                        "token":"0x6b175474e89094c44da98b954eedeac495271d0f",
                        "amount":"1461501637330902918203684832716283019655932542975",
                        "expiration":"1690560188",
                        "nonce":"0"
                    },
                    "spender":"0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
                    "sigDeadline":"1687969988"
                }
            }
        }

        let responseSign = await sdk.eth.ethSignTypedData(input)
        console.log("responseSign: ", responseSign)


    } catch (e) {
        console.error(e)
        console.log("e: ", Object.keys(e))
        console.log("e: ", e.response)
        console.log("e: ", Object.keys(e.name.toString()))
        console.log("e: ", Object.keys(e.response.toString()))
        // console.log("e: ", e.response)

        console.log("e: ", e.response.toString())
    }
}

run_test()
