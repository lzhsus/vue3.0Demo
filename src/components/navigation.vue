<template>
    <div id="header">
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" style="position: relative;">首页
                <router-link to='/' style="position: absolute;top:0;left:0;width:100%;height:100%;"></router-link>
            </van-tabbar-item>
            <van-tabbar-item icon="search" style="position: relative;">搜索
                <router-link to='/' style="position: absolute;top:0;left:0;width:100%;height:100%;"></router-link>
            </van-tabbar-item>
            <van-tabbar-item icon="friends-o" style="position: relative;">购物车
                <router-link to='/' style="position: absolute;top:0;left:0;width:100%;height:100%;"></router-link>
            </van-tabbar-item>
            <van-tabbar-item icon="setting-o" style="position: relative;">个人中心
                <router-link to='/my' style="position: absolute;top:0;left:0;width:100%;height:100%;"></router-link>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import { toRefs,reactive  } from "vue";

export default {
    props:{
        active:{
            type:Number,
            required:true
        }
    },
    setup(props) {
        const data = reactive({
            active:props.active
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
