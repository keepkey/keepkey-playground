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
            "domain": {
                "name": "EETH",
                "version": "1",
                "chainId": 1,
                "verifyingContract": "0x35fa164735182de50811e8e2e824cfb9b6118ac2"
            },
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
                "Permit": [
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint256"
                    },
                    {
                        "name": "nonce",
                        "type": "uint256"
                    },
                    {
                        "name": "deadline",
                        "type": "uint256"
                    }
                ]
            },
            "data": {
                "owner": "0x141d9959cae3853b035000490c03991eb70fc4ac",
                "spender": "0x308861a430be4cce5502d0a12724771fc6daf216",
                "value": "20000000000000000",
                "nonce": "0x0",
                "deadline": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
            },
            "primaryType": "Permit"
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
