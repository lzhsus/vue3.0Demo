
module.exports = {
    // 获取玩家信息
    getUserinfo(data, opt={}) {
        return request('db_userinfo', data, Object.assign({}, opt ));
    },
    // 订单
    getUserOrderBuyList(data, opt={}) {
        return request('user_order_buy_list', data, Object.assign({}, opt ));
    },
    
}

let wxCloud = null;
function request(url,data={},opt){
    let res;
    return new Promise(async (resolve,reject)=>{
        try {
            if(!wxCloud){
                wxCloud  = await accessResourceWithoutAuth()
            }
            res = await database()()
            let result = {
                errcode:0,
                msg:"",
                result:{
                    list:res.list
                },
                success:false
            }
            if(res.errMsg=='collection.aggregate:ok'){
                result.msg="操作成功";
                result.errcode = 1;
                result.success = true
            }
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
   function database(){
       return ()=>wxCloud.database().collection(url).aggregate()
            .match(data)
            .limit(9999)
            .end()
    }
}
function accessResourceWithoutAuth(){
    return new Promise(async (resolve,reject)=>{
        let wxCloud = new cloud.Cloud({
            identityless: true, // 表示是未登录模式
            resourceAppid: 'wxe7bd80f710c7cb35',//'资源方小程序 AppID',
            resourceEnv: 'text-4zw80',//'资源方云环境 ID',
        })
        await wxCloud.init()
        resolve(wxCloud)
    })
}