// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import rem from './assets/lib/rem';
import Vue from 'vue';
import App from './App';
import router from './router';
import fastclick from 'fastclick';

Vue.config.productionTip = false;
rem(false, 69.44444444);
fastclick.attach(document.body);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
