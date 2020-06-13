import Vue from 'nativescript-vue';
import Navigator from 'nativescript-vue-navigator'
import myStore from "./store/store";

//App Settings (JWT Goes Here)
const appSettings = require("tns-core-modules/application-settings");
appSettings.setString("username", "Wolfgang");
const username = appSettings.getString("username");

import App from './components/App';
import { routes } from './routes'
Vue.use(Navigator, { routes })
Vue.prototype.$store = myStore;

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({
    render: h => h(App),
    store:myStore
}).$start();
