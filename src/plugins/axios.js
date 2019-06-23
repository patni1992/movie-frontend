import axios from "axios";

export default {
  install(Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: process.env.VUE_APP_APP_URL
    });
  }
};
