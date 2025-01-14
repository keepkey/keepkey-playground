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

        let dataString = "{\"types\":{\"EIP712Domain\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"version\",\"type\":\"string\"},{\"name\":\"chainId\",\"type\":\"uint256\"},{\"name\":\"verifyingContract\",\"type\":\"address\"}],\"OrderComponents\":[{\"name\":\"offerer\",\"type\":\"address\"},{\"name\":\"zone\",\"type\":\"address\"},{\"name\":\"offer\",\"type\":\"OfferItem[]\"},{\"name\":\"consideration\",\"type\":\"ConsiderationItem[]\"},{\"name\":\"orderType\",\"type\":\"uint8\"},{\"name\":\"startTime\",\"type\":\"uint256\"},{\"name\":\"endTime\",\"type\":\"uint256\"},{\"name\":\"zoneHash\",\"type\":\"bytes32\"},{\"name\":\"salt\",\"type\":\"uint256\"},{\"name\":\"conduitKey\",\"type\":\"bytes32\"},{\"name\":\"counter\",\"type\":\"uint256\"}],\"OfferItem\":[{\"name\":\"itemType\",\"type\":\"uint8\"},{\"name\":\"token\",\"type\":\"address\"},{\"name\":\"identifierOrCriteria\",\"type\":\"uint256\"},{\"name\":\"startAmount\",\"type\":\"uint256\"},{\"name\":\"endAmount\",\"type\":\"uint256\"}],\"ConsiderationItem\":[{\"name\":\"itemType\",\"type\":\"uint8\"},{\"name\":\"token\",\"type\":\"address\"},{\"name\":\"identifierOrCriteria\",\"type\":\"uint256\"},{\"name\":\"startAmount\",\"type\":\"uint256\"},{\"name\":\"endAmount\",\"type\":\"uint256\"},{\"name\":\"recipient\",\"type\":\"address\"}]},\"primaryType\":\"OrderComponents\",\"domain\":{\"name\":\"Seaport\",\"version\":\"1.5\",\"chainId\":\"1\",\"verifyingContract\":\"0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC\"},\"message\":{\"offerer\":\"0x141D9959cAe3853b035000490C03991eB70Fc4aC\",\"offer\":[{\"itemType\":\"2\",\"token\":\"0x25EF864904d67e912B9eC491598A7E5A066B102F\",\"identifierOrCriteria\":\"21\",\"startAmount\":\"1\",\"endAmount\":\"1\"}],\"consideration\":[{\"itemType\":\"0\",\"token\":\"0x0000000000000000000000000000000000000000\",\"identifierOrCriteria\":\"0\",\"startAmount\":\"975000000000000000\",\"endAmount\":\"975000000000000000\",\"recipient\":\"0x141D9959cAe3853b035000490C03991eB70Fc4aC\"},{\"itemType\":\"0\",\"token\":\"0x0000000000000000000000000000000000000000\",\"identifierOrCriteria\":\"0\",\"startAmount\":\"25000000000000000\",\"endAmount\":\"25000000000000000\",\"recipient\":\"0x0000a26b00c1F0DF003000390027140000fAa719\"}],\"startTime\":\"1695401149\",\"endTime\":\"1697993149\",\"orderType\":\"0\",\"zone\":\"0x004C00500000aD104D7DBd00e3ae0A5C00560C00\",\"zoneHash\":\"0x0000000000000000000000000000000000000000000000000000000000000000\",\"salt\":\"24446860302761739304752683030156737591518664810215442929803061704826371370774\",\"conduitKey\":\"0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000\",\"totalOriginalConsiderationItems\":\"2\",\"counter\":\"0\"}}"
        let typedData = JSON.parse(dataString)
        console.log("typedData: ", typedData)
        console.log("typedData: ", JSON.stringify(typedData))

        let formatedData = {
            domain: typedData.domain,
            message: {
                details:
            }
        }

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

        // let input = {
        //     "addressNList": [
        //         2147483692,
        //         2147483708,
        //         2147483648,
        //         0,
        //         0
        //     ],
        //     "chainId": 1,
        //     "data": "0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000649c688300000000000000000000000000000000000000000000000000000000000000020b080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000002386f26fc1000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000002386f26fc1000000000000000000000000000000000000000000000000002fa3933ffc89d5739200000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000c770eefad204b5180df6a14ee197d99d808ee52d",
        //     "gasLimit": "0x7a120",
        //     "to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
        //     "value": "0x2386f26fc10000",
        //     "nonce": "0x75",
        //     "maxPriorityFeePerGas": "0xcc9b43",
        //     "maxFeePerGas": "0x0"
        // }
        //
        // let responseSign = await sdk.eth.ethSignTransaction(input)

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
