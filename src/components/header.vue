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
@function r($px) {
    @return $px / 75 + rem;
}
.xcf-header {
    height: r(121);
    line-height: r(121);
    border-bottom: 1px solid #f6f6f6;
    position: relative;
    font-size: 0;

    .iconfont {
        font-size: r(28);
        color: #383835;
        margin-left: r(32);
    }

    img {
        height: r(55);
        position: absolute;
        top: r(32);
        left: r(74);
    }
}
</style>


