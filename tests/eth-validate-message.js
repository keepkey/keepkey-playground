const { KeepKeySdk } = require("@keepkey/keepkey-sdk")

let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function () {
    try {
        let config = {
            apiKey: process.env['SERVICE_KEY'] || 'test-123',
            pairingInfo:{
                name: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
                imageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
                basePath:spec
            }
        }
        //init
        const sdk = await KeepKeySdk.create(config)

        // let message = {
        //     "type": "token",
        //     "name": "Shapeshift Fox",
        //     "contract": "c770eefad204b5180df6a14ee197d99d808ee52d",
        //     "blockchain": "Ethereum mainnet",
        //     "decimals": 18,
        //     "symbol": "FOX",
        //     "chainId": 1
        // }
        // message = JSON.stringify(message)
        // let input = {
        //     address:"0x2356a15042f98f0a53784f42237bd4b2873aadcf",
        //     signature:"0x2029e464b14030c52b1234839efd06bae90ace956115c789f03df49c2f5e9b6c2c48585190c04cc0baa77136f1f65e03b684ad5bd955ab8fcccaf5657465ccda1b",
        //     message
        // }

        // let input = {
        //     address:"0x2356a15042f98f0a53784f42237bd4b2873aadcf",
        //     signature:"0x96b14a9fa17dda48fd995fa4a95fafe438d29e9eb294e7750a4aa442e048d90138f689cdfef4e6e83b96fea6319e28f67c735635705f7acc4402768b1f621fe71b",
        //     message:'{"type":"token","name":"reset","contract":"0000000000000000000000000000000000000000","blockchain":"none","decimals":0,"symbol":"RESET","chainId":0}'
        // }

        // let input =     {
        //     address: '0x2356a15042f98f0a53784f42237bd4b2873aadcf',
        //     message: '{"type":"token","name":"RFOX","contract":"0xa1d6Df714F91DeBF4e0802A542E13067f31b8262","blockchain":"ethereum","decimals":18,"symbol":"RFOX","chainId":1}',
        //     signature: '0x634e85051a548cf3a0dfadcf569326b56e4fa7e79fe2f46d18d0b34b001ce3cc3e22a73e5d93b2883074c0721335086a0dfdb6c547e95302da2a2ce4dc6a25b41c'
        // }

        // let input =     {
        //     address: '0x2356a15042f98f0a53784f42237bd4b2873aadcf',
        //     message: '{"type":"token","name":"RFOX","contract":"0xa1d6Df714F91DeBF4e0802A542E13067f31b8262","blockchain":"ethereum","decimals":18,"symbol":"RFOX","chainId":1}',
        //     signature: '0x634e85051a548cf3a0dfadcf569326b56e4fa7e79fe2f46d18d0b34b001ce3cc3e22a73e5d93b2883074c0721335086a0dfdb6c547e95302da2a2ce4dc6a25b41c'
        // }

        let input = {
            address: '0x2356a15042f98f0a53784f42237bd4b2873aadcf',
            message: '{"type": "dapp", "name": "dapp.name", "url": "dapp.name.com"}',
            signature:"0xe75690e03c5557dad69cf33b3c42733227f4b21ac600348dbf3b47764e8134bc2fce03b606eb47e3bda873c8b62f37e189aceab125034665f898910b39fd710a1c"
        }
        input.message = `0x${Buffer.from(input.message, "utf8").toString("hex")}`

        let responseSign = await sdk.eth.ethVerify(input)
        console.log("responseSign: ", responseSign)
        console.log("responseSign: ", responseSign)
        console.log("responseSign: ", JSON.stringify(responseSign))

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