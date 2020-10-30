<template>
    <div id="header">
        <van-nav-bar title="个人中心" />
        <h1>my</h1>
        <navigation :active="active"></navigation>
    </div>
</template>
<script>
import { toRefs,reactive  } from "vue";
import navigation from "./navigation.vue"

export default {
    components:{
        navigation
    },
    setup() {
        const data = reactive({
            active:3
        })
        return {
            ...toRefs(data)
        };
    }
};
</script>

<style scoped>

</style>
