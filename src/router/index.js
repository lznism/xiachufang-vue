import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: () => import('@/views/home')
    }, {
        path: '/category',
        name: 'category',
        component: () => import('@/views/category')
    }, {
        path: '/category/:id',
        name: 'category-item',
        component: () => import('@/views/category-item')
    }]
});
