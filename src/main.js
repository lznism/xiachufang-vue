// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import rem from './assets/lib/rem';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
rem(false, 200);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
