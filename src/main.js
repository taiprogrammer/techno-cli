/*eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.directive("background-white", {
  bind(el, binding, vnode) {
    el.style.background = "#fff";
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
