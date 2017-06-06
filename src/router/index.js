import Vue from 'vue'
import VueRouter from 'vue-router'

import BaiDu from '@/components/demo01/BaiDu'
import TengXun from '@/components/demo01/TengXun'

import User from '@/components/demo02/User'

import User02 from '@/components/demo03/User02'
import UserProfile from '@/components/demo03/UserProfile'
import UserPosts from '@/components/demo03/UserPosts'
import UserHome from '@/components/demo03/UserHome'

import Person from '@/components/demo04/Person'

import Alias from '@/components/demo05/Alias'

Vue.use(VueRouter)

const routes=[
    // demo01
    {path:"/baidu",components:{view_01:BaiDu}},
    {path:"/tengxun",components:{view_01:TengXun}},
    // demo01结束
    //demo02开始
    {path:"/user/:id",components:{view_02:User}},
    //demo02结束
    //demo-03开始
    {path:"/user02/:id",components:{view_03:User02},
     children:[
         {path:'profile',component:UserProfile},
         {path:'posts',component:UserPosts},
         {path:'',component:UserHome}
     ]},
    //demo03结束
    //demo04开始
    {path:"/person/:id",name:"person",components:{view_04:Person}},
    //demo04结束
    {path:"/before-redirect",redirect:'/after-redirect'},
    {path:"/a-alias",components:{view_05:Alias},alias:'/b-alias',
        beforeEnter(to,from,next){
            console.log("路由内的导航钩子...");
            console.log(to);
            console.log(from);
            next();
        }
    },


];
export default new VueRouter({
    mode:'history',
    linkActiveClass:'active',
    routes
});
