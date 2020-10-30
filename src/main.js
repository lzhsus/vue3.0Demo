import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from './router'
// import AntDesignVue from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'


// import "./assets/scss/reset.scss"
// require("./assets/css/mint-ui.css");
// require("assets/css/cropper.css");
// require("assets/css/swiper.css");
// require("./assets/scss/reset.scss");

const app = createApp(App)

app.use(Vant);
// app.use(AntDesignVue);
app.use(router)

app.mount('#app')
