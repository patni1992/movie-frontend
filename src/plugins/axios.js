import axios from "axios";

export default {
  install(Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: process.env.VUE_APP_API_URL
    });
  }
};
