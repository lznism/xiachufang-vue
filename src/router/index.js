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
        redirect: '/category/:id/pop'
    }, {
        path: '/category/:id',
        name: 'category-item',
        component: () => import('@/views/category-item'),
        children: [{
            path: 'pop',
            name: 'category-item:pop',
            component: () => import('@/views/category-item/pop')
        }, {
            path: 'recent',
            name: 'category-item:recent',
            component: () => import('@/views/category-item/recent')
        }]
    }, {
        path: '/menu/:id',
        name: 'menu-item',
        component: () => import('@/views/menu-item')
    }]
});
