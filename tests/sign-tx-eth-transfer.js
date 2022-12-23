const { getKeepKeySDK } = require("../lib")

let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function () {
    try {
        let config = {
            serviceKey: process.env['SERVICE_KEY'] || 'abc-123',
            serviceName: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
            serviceImageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
            spec
        }
        //init
        const sdk = await getKeepKeySDK(config)

        //Unsigned TX
        let unsignedTx = {
            "network": "ETH",
            "asset": "ETH",
            "transaction": {
                "context": "0x33b35c665496bA8E71B22373843376740401F106.wallet",
                "type": "transfer",
                "addressFrom": "0x33b35c665496bA8E71B22373843376740401F106",
                "recipient": "0x33b35c665496bA8E71B22373843376740401F106",
                "asset": "ETH",
                "network": "ETH",
                "memo": "",
                "amount": "0.0001",
                "fee": {
                    "priority": 5
                },
                "noBroadcast": true
            },
            "HDwalletPayload": {
                "addressNList": [
                    2147483692,
                    2147483708,
                    2147483648,
                    0,
                    0
                ],
                "nonce": "0x2c4",
                "gasPrice": "0xf22d45af6",
                "gasLimit": "0x13880",
                "value": "0x5af3107a4000",
                "to": "0x33b35c665496bA8E71B22373843376740401F106",
                "data": "",
                "chainId": 1
            },
            "verbal": "Ethereum transaction"
        }

        //push tx to api
        // console.log(kk.instance.SignTransaction())
        let responseSign = await sdk.sign.signTransaction({ body: { data: { invocation: { unsignedTx } } } })
        console.log("responseSign: ", responseSign.data)

    } catch (e) {
        console.error(e)
    }
}

run_test()