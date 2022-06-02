/*eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.directive("background-modal", {
  bind(el, binding, vnode) {
    // el.style.background = "";
    // programmer setting in html the bind of value ->
    // el.style.background = binding.value;
    // to set a background color or a color
    // if (binding.arg === "fundo") {
    //   el.style.background = "#fff";
    // } else {
    //   el.style.color = "red";
    // }
    //modifiers example
    // let atraso = 0;
    // if (binding.modifiers["atrasar"]) atraso = 3000;
    // setTimeout(() => {
    //   if (binding.arg === "fundo") {
    //     el.style.backgroundColor = "red";
    //   } else {
    //     el.style.color = "red";
    //   }
    // }, atraso);
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
