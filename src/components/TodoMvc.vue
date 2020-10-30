<template>
    <section class="todoapp">
        <header class="header">
            <h1>Vue todos</h1>
            <input class="new-tode" placeholder="想干的事情" type="text" v-model="newTodo" @keyup.enter="addTodo">
        </header>
        <section class="main" v-show="todos.length">
            <ul class="todo-list">
                <li class="todo" v-for="(item,index) in todos" :key="index">
                    <div class="view">
                        <input type="checkbox" class="toggle" v-model="item.completed">
                        <label for="">{{item.title}}</label>
                        <button class="destroy" @click="removeTod(index)">X</button>
                    </div>
                </li>
            </ul>
        </section>
    </section>

</template>

<script>
import { ref,reactive,toRefs } from "vue";

export default {
    name:"TodoMvc",
    setup() {
        const state = reactive({
            newTodo:'',
            todos:[{
                id:1,title:"吃饭",completed:false,
            },{
                id:2,title:"睡觉",completed:false,
            }]
        })
        function addTodo(){
            var value = state.newTodo&&state.newTodo.trim()
            if( !value ) return;
            state.todos.push({
                id:state.todos.length+1,
                title:value,
                completed:false
            })
            state.newTodo = '';
        }
        function removeTod(index){
            state.todos.splice(index,1)
        }
        return {
            ...toRefs(state),
            addTodo,removeTod
        };
    }
};
</script>

<style scoped>
    .todoapp{
        width: 500px;margin:20px auto;
        background: #fff;box-shadow: 0 0 20px rgba(141, 73, 73, 0.4);
        padding: 20px;box-sizing: border-box;border-radius: 20px;   
    }
    .header{
        text-align: center;
    }
    .new-tode{
        width: 300px;margin: auto;height: 40px;line-height: 40px;
        border: 1px solid #ccc;padding: 0 20px;
    }
    ul,li{
        list-style: none;
    }
    .todo{
        width: 100%;font-size: 12px;text-align: center;height: 33px;line-height: 33px;border-bottom: 1px solid rgb(226, 224, 224);
        position: relative;
    }
    .toggle{
        position: absolute;top: 50%;left: 20px;transform: translateY(-50%);
        width: 22px;height: 22px;border-radius: 50% !important;
    }
    button{
        position: absolute;top:50%;right: 20px;transform: translateY(-50%);
        border: none;background: transparent;color: #ccc;cursor: pointer;
    }
</style>
