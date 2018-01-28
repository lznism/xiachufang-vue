<template>
    <header class="xcf-header">
        <i class="iconfont icon-zuojiantou"></i>
        <img src="../assets/images/logo.png">
    </header>
</template>
<script>
export default {
    name: 'xcf-header'
}
</script>
<style lang="scss" scoped>
.xcf-header {
    height: 1.74rem;
    border-bottom: 1px solid #ccc;
    padding-left: 0.6rem;
    font-size: 0;
    position: relative;

    .iconfont {
        font-size: 0.5rem;
        color: #383835;
        position: absolute;
        top: 0.6rem;
    }

    img {
        height: 0.78rem;
        padding: 0.47rem 0 0 0.86rem;
    }
}
</style>


