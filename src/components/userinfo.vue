<template>
    <h1 class="page-header">用户中心：</h1>
    <div class="table-responsive">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th class="text-center">#</th>
                    <th class="text-center">weixin_user_id</th>
                    <th class="text-center">avatarUrl</th>
                    <th class="text-center">nickName</th>
                    <th class="text-center">性别gender</th>
                    <th class="text-center">手机号</th>
                    
                    <th class="text-center">appId</th>
                    <th class="text-center">env</th>
                    <th class="text-center">openId</th>
                    <th class="text-center">token</th>
                    <th class="text-center">token_time</th>
                    <th class="text-center">create_time</th>
                </tr>
            </thead>
            <tbody style="max-height: 700px;overflow-y: scroll;">
                <tr v-for="(item,index) in list" :key="index">
                    <td class="text-center small text-muted my-td">{{index+1}}</td>
                    <td class="text-center small text-muted my-td">{{item.weixin_user_id}}</td>
                    <td class="text-center small text-muted my-td">
                        <van-image style="width:60px;" :src="item.avatarUrl" />
                    </td>
                    <td class="text-center small text-muted my-td">{{item.nickName}}</td>
                    <td class="text-center small text-muted my-td">
                        <van-tag v-if="item.gender==1" type="primary" size="large">男</van-tag>
                        <van-tag v-else-if="item.gender==0" type="success" size="large">女</van-tag>
                        <van-tag v-else type="warning" size="large">未知</van-tag>
                    </td>
                    <td class="text-center small text-muted my-td">{{item.mobile}}<br>{{item.phoneNumber}}</td>

                    <td class="text-center small text-muted my-td"><van-tag type="primary">{{item.appId}}</van-tag></td>
                    <td class="text-center small text-muted my-td"><van-tag type="success">{{item.env}}</van-tag></td>
                    <td class="text-center small text-muted my-td">{{item.openId}}</td>
                    <td class="text-center small text-muted my-td">{{item.token}}</td>
                    <td class="text-center small text-muted my-td">{{item.token_time}}</td>
                    <td class="text-center small text-muted my-td">{{item.create_time}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <i></i>
</template>
<script>
import { toRefs,reactive,onMounted,onVnodeUnmounted   } from "vue";

import Api from "@/api/index";
export default {
    props:{},
    components:{

    },
    setup(props,context) {
        const data = reactive({
            active:0,
            list:[]
        })
        onMounted(()=>{
            Api.getUserinfo().then(res=>{
                if(res.success){
                    res = res.result||{}
                    let list = res.list||[]
                    data.list = list;
                }else{

                }
            })
        })
        return {
            ...toRefs(data)
        };
    }
};
</script>

<style scoped>
.my-td{
    max-width:180px; height:51px; word-wrap:break-word; word-break:break-all;
}
</style>
