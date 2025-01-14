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

        // let typedData = {
        //     "data":{
        //         "details":{
        //             "token":"0xEF743df8eDa497bCf1977393c401A636518DD630",
        //             "amount":"1000000000000000000000000",
        //             "expiration":1714885164,
        //             "nonce":53
        //         },
        //         "spender":"0x141D9959cAe3853b035000490C03991eB70Fc4aC",
        //         "sigDeadline":1712294964
        //     },
        //     "domain":{
        //         "name":"Permit2",
        //         "chainId":8453,
        //         "verifyingContract":"0x000000000022D473030F116dDEE9F6B43aC78BA3"
        //     },
        //     "primaryType": "PermitSingle",
        //     "types":{
        //         "EIP712Domain": [
        //             {
        //                 "name": "name",
        //                 "type": "string"
        //             },
        //             {
        //                 "name": "chainId",
        //                 "type": "uint256"
        //             },
        //             {
        //                 "name": "verifyingContract",
        //                 "type": "address"
        //             }
        //         ],
        //         "PermitSingle":[
        //             {
        //                 "name":"details",
        //                 "type":"PermitDetails"
        //             },
        //             {
        //                 "name":"spender",
        //                 "type":"address"
        //             },
        //             {
        //                 "name":"sigDeadline",
        //                 "type":"uint256"
        //             }
        //         ],
        //         "PermitDetails":[
        //             {
        //                 "name":"token",
        //                 "type":"address"
        //             },
        //             {
        //                 "name":"amount",
        //                 "type":"uint160"
        //             },
        //             {
        //                 "name":"expiration",
        //                 "type":"uint48"
        //             },
        //             {
        //                 "name":"nonce",
        //                 "type":"uint48"
        //             }
        //         ]
        //     },
        // }

        // let typedData = {
        //     domain: {
        //         name: "Permit2",
        //         chainId: 8453,
        //         verifyingContract: "0x000000000022D473030F116dDEE9F6B43aC78BA3"
        //     },
        //     message: {
        //         details: {
        //             token: "0xEF743df8eDa497bCf1977393c401A636518DD630",
        //             amount: "1000000000000000000000000",
        //             expiration: 1714885164,
        //             nonce: 53
        //         },
        //         spender: "0x141D9959cAe3853b035000490C03991eB70Fc4aC",
        //         sigDeadline: 1712294964
        //     },
        //     primaryType: "PermitSingle",
        //     types: {
        //         EIP712Domain: [
        //             { name: "name", type: "string" },
        //             { name: "chainId", type: "uint256" },
        //             { name: "verifyingContract", type: "address" }
        //         ],
        //         PermitSingle: [
        //             { name: "details", type: "PermitDetails" },
        //             { name: "spender", type: "address" },
        //             { name: "sigDeadline", type: "uint256" }
        //         ],
        //         PermitDetails: [
        //             { name: "token", type: "address" },
        //             { name: "amount", type: "uint160" },
        //             { name: "expiration", type: "uint48" },
        //             { name: "nonce", type: "uint48" }
        //         ]
        //     }
        // };

        let typedData = {"domain":{"name":"Permit2","chainId":8453,"verifyingContract":"0x000000000022D473030F116dDEE9F6B43aC78BA3"},"types":{"PermitSingle":[{"name":"details","type":"PermitDetails"},{"name":"spender","type":"address"},{"name":"sigDeadline","type":"uint256"}],"PermitDetails":[{"name":"token","type":"address"},{"name":"amount","type":"uint160"},{"name":"expiration","type":"uint48"},{"name":"nonce","type":"uint48"}],"EIP712Domain":[{"name":"name","type":"string"},{"name":"chainId","type":"uint256"},{"name":"verifyingContract","type":"address"}]},"message":{"details":{"token":"0xEF743df8eDa497bCf1977393c401A636518DD630","amount":"1000000000000000000000000","expiration":1714886764,"nonce":53},"spender":"0x141D9959cAe3853b035000490C03991eB70Fc4aC","sigDeadline":1712296564},"primaryType":"PermitSingle"}
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
