import WnButton from "./src/index.vue";
WnButton.install = function (Vue) {
  Vue.component(WnButton.name, WnButton);
};
export default WnButton;
