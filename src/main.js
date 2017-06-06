// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router/'
import App from './App'

Vue.use(VueRouter);

//全局导航钩子
router.beforeEach((to,from,next)=>{
  console.log("全局导航钩子.....");
  console.log(to);
  console.log(from);
  next();

});

//6, 挂载到vue实例上(整个vue控制的dom范围都可以使用该路由)
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
