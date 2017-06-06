<template>
  <div id="app">
    <section class="view view_01">
      <h1>VueRouter---起步例子</h1>
      <!--路由发起-->
      <router-link to="/baidu">导航到百度</router-link>
      <router-link to="/tengxun">导航到腾讯</router-link>
      <!--路由出口-->
      <router-view name="view_01"></router-view>
    </section>

    <section class="view view_02">
      <h1>动态路由匹配</h1>
      <router-link to="/user/hyy">参数hyy</router-link>
      <router-link to="/user/lsw">参数lsw</router-link>
      <router-view name="view_02"></router-view>
    </section>

    <section class="view view_03">
      <h1>嵌套路由</h1>
      <router-link to="/user02/hyy">id参数hyy</router-link>
      <router-link to="/user02/hyy2/profile">嵌套到profile</router-link>
      <router-link to="/user02/hyy3/posts">嵌套到posts</router-link>
      <router-view name="view_03"></router-view>
    </section>

    <section class="view view_04">
      <h1>命名路由</h1>
      <p>如果path比较长,则给路由设置一个有意义name属性代替,注意to绑定的是一个对象,所以要用:to.</p>
      <p>命名视图, 一个路由对应多个渲染结果, 所以给router-view设置名字,路由重使用components进行配置.</p>
      <router-link :to="{name:'person',params:{id:123}}">导航到/person/123</router-link>
      <router-view name="view_04"></router-view>
    </section>

    <section class="view view_05">
      <h1>重定向和别名----捎带着有全局钩子,路由内的钩子,和组件内的钩子</h1>
      <p>注意观察地址栏url的变化</p>
      <router-link to="/before-redict">重定向</router-link>
      <router-link to="/a-alias">别名--访问/a-alias</router-link>
      <router-link to="/b-alias">别名--访问/b-alias</router-link>
      <router-view name="view_05"></router-view>
    </section>

    <section class="view view_06">
      <h1>路由元信息</h1>
      <p>路由记录: routes配置中的每一项叫做一个路由记录,因为路由记录可有嵌套,所以一个路由匹配成功后, 他可能匹配多个路由记录,这些多有记录在$route.matched中有记录</p>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style scoped lang="less">
    h1{
      color: #fff;
      background-color: #00f;
      line-height: 2em;
      border-left: 5px solid #f00;
    }
    a{
      margin: 30px;
    }
    .active{
       color: #1714ff;
    }
    .view{
      border: 2px solid red;
      margin: 20px;
      padding: 20px;
    }


</style>




