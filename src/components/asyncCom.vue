<template>
    <h1>一个异步小组件{{data.name}}</h1>
</template>
<script>
    import { ref,watchEffect,reactive } from "vue";
    let timer;
    export default {
        name:"asyncCom",
        props:{
            timeout:{
                type:Number,
                required:true
            }
        },
        async setup(props){
            const timer = (res,timeout)=>setTimeout(res,timeout);
            let res = null;
            const stop = watchEffect((onInvalidate)=> {
                clearTimeout(timer)
                timer(res,props.timeout)
            })
            function sleep() {
                return new Promise((resolve,reject)=>{
                    res = resolve
                    timer(res,props.timeout)
                })
            }
            const data = reactive({
                name:"2015"
            })
            await sleep();
            return {
                data
            }

        }
    }
    
</script>