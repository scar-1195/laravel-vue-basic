import("../bootstrap");

import Vue from "vue";
import App from "./pages/App.vue";

export const bus = new Vue();

const admin = new Vue({
    el: "#admin",
    render: (h) => h(App),
});
