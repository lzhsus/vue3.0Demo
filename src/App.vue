<template>
    <!-- <img src="./logo.png" />
    <h1>Hello Vue ! {{name}}</h1>
    <button @click="inc">Clicked {{ count }} times.</button>

    <div ref="root"></div>

    <div v-for="(item,index) in list" :ref="el=>{ divs[index]=el }">
        {{item}}
    </div>
    <input type="text" v-model="input.name">
    <input type="text" v-model="inputName"> -->
    <!-- <h1>{{state.count}}*2={{double}}</h1>
    <button @click="add">累加</button> -->
    <!-- <Suspense>
        <template #default>
            异步组件
            <AsyncCom :timeout="3000"></AsyncCom>
        </template>
        <template #fallback>
            <Loading></Loading>
        </template>
    </Suspense> -->
    <!-- {{timeout}}
    <Suspense>
        <AsyncCom :timeout="timeout"></AsyncCom>
        <template #fallback>
            <Loading :timeout="timeout"></Loading>
        </template>
    </Suspense>
    <button @click="isOpen=true">打开 Teleport</button>
    <div id="foot-content"></div>
    <Teleport to="#foot-content">
        <div v-if="isOpen">
            <p>vue 新增组件 底部信息</p>
            <button @click="isOpen=false">取消</button>
        </div>
    </Teleport>
    <TodoMvc></TodoMvc> -->
    <!-- <home></home> -->
    <!-- <van-nav-bar title="标题" /> -->
    <!-- <router-link to="/"></router-link> -->
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
                <form class="navbar-form navbar-right">
                    <input type="text" class="form-control" placeholder="Search...">
                </form>
            </div>
        </div>
    </nav>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3 col-md-2 sidebar">
                <ul class="nav nav-sidebar">
                    <li class="active">
                        <router-link to="/">首页</router-link>
                    </li>
                    <li>
                        <router-link to="/userinfo">用户</router-link>
                    </li>
                    <li>
                        <router-link to="/order">订单</router-link>
                    </li>
                    <li><a href="#">认证</a></li>
                </ul>
            </div>
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                        <li class="breadcrumb-item"><a href="#">Library</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
                <router-view></router-view>
            </div>
        </div>
    </div>
    <!-- <div class="tabbar">
        <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
        </van-tabbar>
    </div> -->
    <i></i>
</template>

<script>
// reg 接受一个内部值并且返回一返回性且可变的ref，re具有。value执行内部值的单一属性
// import { ref,reactive,computed,watchEffect } from "vue";
import { h, ref, reactive,readonly,onMounted,computed,watchEffect,watch,onBeforeUpdate,toRef,toRefs,isRef,isProxy,isReactive,isReadonly,customRef,Teleport } from 'vue'
import Home from "@/components/home.vue";
import AsyncCom from "@/components/asyncCom.vue";
import Loading from "@/components/loading.vue";
import TodoMvc from "@/components/TodoMvc.vue";
export default {
    // 初始化props
    props:{name:String,foo:String},
    // 一个新的组件选项，作为在组件内使用composition api 的入口点
    // 从生命周期来看 会在beforecreate钩子之前被调用
    components:{
        AsyncCom,Home,Loading,TodoMvc
    },
    setup(props,context) {    
        // 网络状态
        // const { networkState } = useNetworkState()
        // console.log("网络状态：",networkState)
        // console.log("props:",props)
        // console.log("context:",context)
        // setup返回的ref 会自动解构 不需要。value
        // let count = 1||ref(1);
        // const state = reactive({
        //     count:1
        // })
        // const double = computed(()=>state.count*2)
        // const stop = watchEffect(()=>console.log('jt',state.count))
        // Virtual DOM patch（虚拟dom补丁） 算法中
        // Virtual DOM mount（虚拟dom挂载）
        // 此时模板ref仅能在dom渲染初始化之后才能访问
        // const root = ref(null);
        // const list = reactive([1, 2, 3])
        // const divs = ref([])
        // const state = reactive({
        //     foo: 1,
        //     bar: 2,
        //     name:"lzhsus"
        // })
        // // 可以传入一个对象 响应 普通 或者ref 返回一个自读属性
        // const copy = readonly(state)
        // watchEffect(()=>{
        //     console.log('copy:',copy.foo)
        // })
        // // 用reactive 对选哪个的属性创建一个ref,这个ref可以被传递并且保存响应性
        // const fooRef = toRef(state, 'foo')
        // // 将一个props的属性作为ref传递给组合巡逻机函数，toRef就派上用场
        // // useSomeFeature(toRef(props, 'foo'))
        // const stateAdRefs = toRefs(state)
        // fooRef.value++
        // // copy.foo++
        // console.log('::',state.foo) // 2
        // state.foo++
        // console.log(fooRef.value) // 3

        // console.log('stateAdRefs:',stateAdRefs.foo) 
        // console.log('stateAdRefs:',stateAdRefs.bar) 
        // console.log('stateAdRefs:',stateAdRefs.name.value) 
        // // 检查是否为一个ref对象
        // console.log('isRef:',' fooRef:'+isRef(fooRef),' list:'+isRef(list))
        // // 检查一个对象是否是由reactive或者readonl方式创建的代理
        // console.log('isProxy:',' fooRef:'+isProxy(fooRef),' list:'+isProxy(list))
        // // 检查一个对象是否是有reactive创建的响应应是
        // // 或者 由readonly创建 但是又被reactive创建的另一个代理 包裹着
        // const c01 = reactive({test:1})
        // const d01 = readonly({test:1})

        // const c02 = reactive(d01)
        // console.log('isReactive：',' c01:'+isReactive(c01),' d01:'+isReactive(d01),' c02:'+isReactive(c02))
        // // 检查一个对象是否是有readonlu创建的自读属性
        // console.log('isReadonly',' c01:'+isReadonly(c01),' d01:'+isReadonly(d01),' c02:'+isReadonly(c02))

        // onBeforeUpdate(() => {
        //     divs.value = []
        // })
        // onMounted(()=>{
        //     console.log('root---',root)
        //     console.log('root---',root.value)
        //     console.log('root---',divs.value)
        // })
        // const timeout = ref(6000);
        // const isEnd = ref(0);
        // const stop = watchEffect((onInvalidate)=> {
        //     if(isEnd.value){
        //         timeout.value = 100
        //     }
        //     onInvalidate(()=>{

        //     })
        //     console.log('-------------'+isEnd.value)
        // },{
        //     flush:"post",//默认post 同步 sync pre组件更新前
        //     onTrigger(e){
        //         console.log('依赖项改变 触发set')
        //     },
        //     onTrack(e){
        //         console.log('依赖项被调用，触发get')
        //     }
        // })
        // const timeout2 = computed(()=>{
        //     let result = !isEnd.show?timeout.value:100;
        //     return result
        // })
        // function inc(){ 
        //     isEnd.value = 1
        //     setTimeout(() => {
        //     }, 2000);
        //     count++ 
        // }
        
        // const fetchData = ()=>{
        //     console.log('fetchData')
        // }

        // const input = reactive({
        //     name:""
        // })
        // const inputName = useDebouncedRef('',200);
        // // watchEffect(()=>{
        // //     console.log('textInput:',inputName)
        // // })
        // watch(() => inputName,(val, oldVal) => {
        //         console.log('textInput:',inputName)
        //     })
        // // watch(()=>{
        // //     console.log('textInput:',textInput)
        // // },)
        // const isOpen = ref(false)
        const data = reactive({
            active:0,
        })
        return {
            ...toRefs(data)
            // count,inc,name,root,list,divs,
            // input,
            // inputName,fetchData,timeout2,isEnd,timeout,isOpen
            // state,
            // add,
            // double
        };
        // const count = ref(0)
        // const object = reactive({ foo: 'bar' })

        // return () => h('div', [count.value, object.foo])
    },
};

// function  useDebouncedRef(value,delay=200) {
//     let timeout;
//     // coustomRef用于自动一个ref 可以显示的
//     return customRef((track,trigger)=>{
//         return {
//             get(){
//                 track()
//                 return value;
//             },
//             set(newValue){
//                 clearInterval(timeout)
//                 timeout = setTimeout(()=>{
//                     value = newValue;
//                     trigger()
//                 },delay)
//             }
//         }
//     })
// }
</script>

<style>

</style>
