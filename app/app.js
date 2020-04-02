import Vue from 'nativescript-vue';
import Vuex from './vuex';
import Navigator from './nativescript-vue-navigator'

//App Settings (JWT Goes Here)
const appSettings = require("tns-core-modules/application-settings");
appSettings.setString("username", "Wolfgang");
const username = appSettings.getString("username");

Vue.use(Vuex)

const myStore = new Vuex.Store({
    state: {
        count: 0
    }
})

import App from './components/App';
import { routes } from './routes'
Vue.use(Navigator, { routes })
Vue.use(Vuex, { myStore })

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;


new Vue({
    render: h => h(App),
    store: myStore
}).$start();
