<template>
    <h1>
        /a-alias的别名是/b-alias: 当前的URL:{{$route.fullPath}}
    </h1>
</template>
<script>
    export default{
        beforeRouteEnter(to,from,next){
            console.log('组件内的导航钩子....');
            console.log(to);
            console.log(from);
            next();
        }
    }
</script>
<style scoped lang="less">
    h1{
        color: #fff;
        background-color: #ffbb29;
        line-height: 2em;
    }

</style>
