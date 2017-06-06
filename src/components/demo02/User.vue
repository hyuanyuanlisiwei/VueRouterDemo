<template>
    <div class="user">
        User获取动态路径参数id的值:{{$route.params.id}}
    </div>
</template>
<script>
    export default{
        name:"user",
        watch:{
            //因为User组件会复用,
            //所以,当参数变化的时候,不会执行导航钩子
            //但是可以监听$route的变化.
            '$route'(to,from){
                console.log(to);
                console.log(from);
            }
        }
    }
</script>
<style scoped lang="less">
    div{
        margin-top:10px
    }
    .user{
        color: #fff;
        line-height: 2em;
        background-color: #ff21f1;
    }
</style>
