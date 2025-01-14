
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
        let {address} = await sdk.address.thorchainGetAddress({ address_n: addressInfo.addressNList })
        console.log("address: ", address)
        //msg

        let input = {"signerAddress":"thor1g9el7lzjwh9yun2c4jjzhy09j98vkhfxfhgnzx","signDoc":{"sequence":"45","source":"0","memo":"=:r:thor1g9el7lzjwh9yun2c4jjzhy09j98vkhfxfhgnzx:0:t:0\"","account_number":"71826","chain_id":"thorchain-mainnet-v1","fee":{"gas":"500000000","amount":[{"amount":"0","denom":"rune"}]},"msgs":[{"value":{"coins":[{"asset":"BCH/BCH","amount":"1000000"}],"memo":"=:r:thor1g9el7lzjwh9yun2c4jjzhy09j98vkhfxfhgnzx:0:t:0\"","signer":"thor1g9el7lzjwh9yun2c4jjzhy09j98vkhfxfhgnzx"},"type":"thorchain/MsgDeposit"}]}}
        console.log("input import: ",input)
        let responseSign = await sdk.thorchain.thorchainSignAminoDeposit(input)
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
