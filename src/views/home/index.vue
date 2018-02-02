<template>
    <div id="home">
        <header>
            <img src="../../assets/images/logo.png" alt="logo" class="logo">
        </header>
        <section class="search">
            <input type="text" placeholder="搜索菜谱、食材">
            <i class="iconfont icon-fangdajing"></i>
        </section>
        <section class="category">
            <div class="clearfix row">
                <div class="category-item">
                    <p>家常菜</p>
                </div>
                <div class="category-item">
                    <p>家常菜</p>
                </div>
                <div class="category-item">
                    <p>家常菜</p>
                </div>
            </div>
            <div class="clearfix row">
                <div class="category-item">
                    <p>家常菜</p>
                </div>
                <div class="category-item">
                    <p>家常菜</p>
                </div>
                <div class="category-item">
                    <p>家常菜</p>
                </div>
            </div>
            <div class="all-category">全部菜谱分类</div>
        </section>
        <section class="rank">
            <h3>菜谱榜单</h3>
            <div class="explore clearfix">
                <div class="explore-item">
                    <img src="http://s2.cdn.xiachufang.com/6643b0a5f811419ca7f445cd50a72d18_1080w_720h.jpg?imageView2/1/w/560/h/340/interlace/1/q/90" alt="">
                    <p class="explore-item-title">发现新菜</p>
                    <p class="explore-item-desc">新创建的菜谱</p>
                </div>
            </div>
            <div class="rank-list">
                <div class="rank-item clearfix">
                    <div class="fl">
                        <img src="http://s2.cdn.xiachufang.com/6643b0a5f811419ca7f445cd50a72d18_1080w_720h.jpg?imageView2/1/w/560/h/340/interlace/1/q/90" alt="">
                    </div>
                    <div class="fl">
                        <p class="rank-item-title">哈哈哈哈</p>
                        <p class="rank-item-desc">哈哈哈哈</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'Home'
}
</script>
<style lang="scss" scoped>

</style>
