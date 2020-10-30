<template>
   <div class="">
        {{errReactive}}---{{count}}
   </div>
</template>

<script>
import { ref,toRefs,reactive,onMounted,onVnodeUnmounted,onBeforeMount,onBeforeUpdate,onUpdated } from "vue";
import Api from "@/api/index";
import navigation from "./navigation.vue";
export default {
    props:{
        user:{
            type:String,
            default:"demo-user"
        }
    },
    components:{
        navigation
    },
    // steup 想定一 beforeCreated or created
    // beforeMounted mounted 挂载前 挂载完成
    // beforeUpdated updated 即将更新渲染 更新成功
    // beforeUnmounted unmounted
    setup(props,context) {  
        const { user } = toRefs(props)
        onBeforeMount(()=>{})
        // mounted
        // 
        onBeforeMount(()=>{
            console.log('Component is onBeforeMount!')
        })
        onMounted(() => {
            console.log('Component is mounted!')
        })
        onBeforeUpdate(()=>{
            console.log('Component is onBeforeUpdate!')
        })
        onUpdated(()=>{
            console.log('Component is onUpdated!')
        })
        
        console.log(user)
        const data = reactive({
            active:0,
            list:[]
        })
        const count = ref(0);
        const errReactive = reactive(11)
        setTimeout(()=>{
            count.value++
        },2000)
        return {
            ...toRefs(data),
            errReactive,count
        };

    }
};
</script>

<style>
/* @import url("../assets/css/dashboard.css"); */

</style>
