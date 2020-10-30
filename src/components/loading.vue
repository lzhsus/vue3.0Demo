<template>
    <h1 id="text">加载中{{loading}}</h1>
</template>
<script>
import { ref,onUnmounted } from "vue";
export default {
    name:"loading",
    props:{
        timeout:{
            type:Number,
            required:true
        }
    },
    setup(){
        let loading = ref("")
        let i=0;
        let arr = [".","..",'...']
        let timer = setInterval(() => {
            loading.value = arr[i]
            i = (i+1)%4
        }, 350);
        onUnmounted(()=>{
            clearInterval(timer)
        })
        return { loading }
    }
}
</script>
<style scoped>
#text{
    font-size: 18px;text-align: center;color: #000;
}
</style>