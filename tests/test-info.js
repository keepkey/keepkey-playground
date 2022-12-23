require("dotenv").config({path:'../../../../.env'})
let kkApi = require("../lib")

let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function(){
    try{
        let config = {
            queryKey:process.env['SDK_KEY'] || 'abc-123',
            spec
        }

        //get config
        console.log("config: ",config)
        let kk = new kkApi(spec,config)
        kk = await kk.init()

        // console.log("kk.instance: ",kk.instance)
        let user = await kk.instance.User()
        console.log("user.data: ",user.data)

        //


    }catch(e){
        console.error(e)
    }
}

run_test()