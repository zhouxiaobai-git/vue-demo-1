import Vue from 'vue';
import VueRouter from 'vue-router';

// 往vue里面加一些路由vue-router维护的东西
Vue.use(VueRouter);

import inputPage from './pages/inputPage.vue';
import outputPage from './pages/outputPage.vue';

export default new VueRouter({
    routes: [{

        // 录入页面
        name: "input",
        path: "/input",
        component: inputPage

    }, {

        // 结果页面
        name: "output",
        path: "/output",
        component: outputPage

    }, {

        path: '/*',
        redirect: '/input'

    }]
});