const { KeepKeySdk } = require("@keepkey/keepkey-sdk")

let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function () {
    try {
        let config = {
            apiKey: process.env['SERVICE_KEY'] || '1fa0c776-eaa9-499d-a2e5-f76af6073912',
            pairingInfo: {
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

        let typedData = {
            "types": {
                "EIP712Domain": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "version",
                        "type": "string"
                    },
                    {
                        "name": "chainId",
                        "type": "uint256"
                    },
                    {
                        "name": "verifyingContract",
                        "type": "address"
                    }
                ],
                "OrderComponents": [
                    {
                        "name": "offerer",
                        "type": "address"
                    },
                    {
                        "name": "zone",
                        "type": "address"
                    },
                    {
                        "name": "offer",
                        "type": "OfferItem[]"
                    },
                    {
                        "name": "consideration",
                        "type": "ConsiderationItem[]"
                    },
                    {
                        "name": "orderType",
                        "type": "uint8"
                    },
                    {
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "name": "endTime",
                        "type": "uint256"
                    },
                    {
                        "name": "zoneHash",
                        "type": "bytes32"
                    },
                    {
                        "name": "salt",
                        "type": "uint256"
                    },
                    {
                        "name": "conduitKey",
                        "type": "bytes32"
                    },
                    {
                        "name": "counter",
                        "type": "uint256"
                    }
                ],
                "OfferItem": [
                    {
                        "name": "itemType",
                        "type": "uint8"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "identifierOrCriteria",
                        "type": "uint256"
                    },
                    {
                        "name": "startAmount",
                        "type": "uint256"
                    },
                    {
                        "name": "endAmount",
                        "type": "uint256"
                    }
                ],
                "ConsiderationItem": [
                    {
                        "name": "itemType",
                        "type": "uint8"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "identifierOrCriteria",
                        "type": "uint256"
                    },
                    {
                        "name": "startAmount",
                        "type": "uint256"
                    },
                    {
                        "name": "endAmount",
                        "type": "uint256"
                    },
                    {
                        "name": "recipient",
                        "type": "address"
                    }
                ]
            },
            "primaryType": "OrderComponents",
            "domain": {
                "name": "Seaport",
                "version": "1.5",
                "chainId": 137,
                "verifyingContract": "0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC"
            },
            "message": {
                "offerer": "0x8c9Ed98b7C3961D22Cc871356C7b73d194608817",
                "offer": [
                    {
                        "itemType": "2",
                        "token": "0xa9a6A3626993D487d2Dbda3173cf58cA1a9D9e9f",
                        "identifierOrCriteria": "64560424590441301826453812164224751707642265079650986418901366599236941237984",
                        "startAmount": "1",
                        "endAmount": "1"
                    }
                ],
                "consideration": [
                    {
                        "itemType": "1",
                        "token": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
                        "identifierOrCriteria": "0",
                        "startAmount": "194707500000000000",
                        "endAmount": "194707500000000000",
                        "recipient": "0x8c9Ed98b7C3961D22Cc871356C7b73d194608817"
                    },
                    {
                        "itemType": "1",
                        "token": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
                        "identifierOrCriteria": "0",
                        "startAmount": "4992500000000000",
                        "endAmount": "4992500000000000",
                        "recipient": "0x0000a26b00c1F0DF003000390027140000fAa719"
                    }
                ],
                "startTime": "1696393777",
                "endTime": "1699072168",
                "orderType": 0,
                "zone": "0x0000000000000000000000000000000000000000",
                "zoneHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
                "salt": "24446860302761739304752683030156737591518664810215442929815805592127532436551",
                "conduitKey": "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
                "totalOriginalConsiderationItems": "2",
                "counter": "0"
            }
        }
        console.log("typedData: ", typedData)
        console.log("typedData: ", JSON.stringify(typedData))

        let input = {
            "addressNList":[
                2147483692,
                2147483708,
                2147483648,
                0,
                0
            ],
            address,
            "typedData":typedData
        }

        let responseSign = await sdk.eth.ethSignTypedData(input)
        console.log("responseSign: ", responseSign)

        console.log("responseSign: ", responseSign)
        if(responseSign === '0x6d3b15cce976242ac7e513876e7fd8c243c77cc7c5ad1e85b67f1a4e3140a06b43bbbc78aaada6c04c026a3b64eec8cd4c1bcfd5211adbf6cde944927172e8a81c'){
            console.log("WINNING FUCKER! ")
        } else {
            console.log("FAIL")
        }
        //✅ "0x141D9959cAe3853b035000490C03991eB70Fc4aC" is the signer; Signature is: "0x6d3b15cce976242ac7e513876e7fd8c243c77cc7c5ad1e85b67f1a4e3140a06b43bbbc78aaada6c04c026a3b64eec8cd4c1bcfd5211adbf6cde944927172e8a81c"

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
