<template>
    <div class="user">
        <h2>这是/user02/:id对应的路由组件: User {{$route.params.id}}</h2>
        <!--嵌套组件-->
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        name:"User02"
    }

</script>
<style scoped lang="less">
    h2,h3{
        margin-top: 10px;
        color: #fff;
        line-height: 2em;
        background-color: #ffa136;
    }
</style>
