<template>
    <div>
        <van-nav-bar title="首页" fixed="true"/>
        <div class="content" style="padding:46px 0 50px 0;">
            <van-row style="padding:10px 0;">
                <van-col span="4"><van-tag type="primary">_id</van-tag></van-col>
                <van-col span="4"><van-tag type="primary">appId</van-tag></van-col>
                <van-col span="4"><van-tag type="primary">openId</van-tag></van-col>
                <van-col span="4"><van-tag type="primary">token</van-tag></van-col>
                <van-col span="4"><van-tag type="primary">env</van-tag></van-col>
                <van-col span="4"><van-tag type="primary">create_time</van-tag></van-col>
            </van-row>
            <van-row v-for="(item,index) in list" :key="index">
                <van-col span="4">{{item._id}}</van-col>
                <van-col span="4">{{item.appId}}</van-col>
                <van-col span="4">{{item.openId}}</van-col>
                <van-col span="4">{{item.token}}</van-col>
                <van-col span="4">{{item.env}}</van-col>
                <van-col span="4">{{item.create_time}}</van-col>
            </van-row>
        </div>
        <navigation :active="active"></navigation>
    </div>
</template>
<script>
import { toRefs,reactive,onMounted,onVnodeUnmounted   } from "vue";
import Api from "@/api/index";
import navigation from "./navigation.vue"
export default {
    props:{},
    components:{
        navigation
    },
    setup(props,context) {
        const data = reactive({
            active:0,
            list:[]
        })
        onMounted(()=>{
            console.log(Api)
            Api.getUserinfo().then(res=>{
                    console.log(res)
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
#home{
    position: absolute;
}
</style>
