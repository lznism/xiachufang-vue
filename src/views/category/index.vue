<template>
    <div id="category">
        <div id="all-category">
            <section>
                <h3 class="title">热门分类</h3>
                <div class="category-section">
                    <div class="category-item">
                        <img src="http://s2.cdn.xiachufang.com/a1cb7a48a56011e6947d0242ac110002_200w_200h.jpg">
                        <p>家常菜</p>
                    </div>
                    <div class="category-item">
                        <img src="http://s2.cdn.xiachufang.com/a1cb7a48a56011e6947d0242ac110002_200w_200h.jpg">
                        <p>家常菜</p>
                    </div>
                    <div class="category-item">
                        <img src="http://s2.cdn.xiachufang.com/a1cb7a48a56011e6947d0242ac110002_200w_200h.jpg">
                        <p>家常菜</p>
                    </div>
                    <div class="category-item">
                        <img src="http://s2.cdn.xiachufang.com/a1cb7a48a56011e6947d0242ac110002_200w_200h.jpg">
                        <p>家常菜</p>
                    </div>
                    <div class="category-item">
                        <img src="http://s2.cdn.xiachufang.com/a1cb7a48a56011e6947d0242ac110002_200w_200h.jpg">
                        <p>家常菜</p>
                    </div>
                    <div class="category-item">
                        <img src="http://s2.cdn.xiachufang.com/a1cb7a48a56011e6947d0242ac110002_200w_200h.jpg">
                        <p>家常菜</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Category'
}
</script>
<style lang="scss" scoped>
.title {
    height: 1.54rem;
    line-height: 1.54rem;
    color: #383835;
    font-weight: bold;
    font-size: 0.5rem;
    padding-left: 0.6rem;
}
.category-section {
    padding: 0 0.6rem;
    display: flex;
    flex-wrap: wrap;

    .category-item {
        position: relative;
        width: 2.1rem;
        height: 2.1rem;
        border-radius: 0.1rem;
        margin: 0 0.39rem 0.39rem 0;

        &:nth-of-type(4n) {
            margin-right: 0;
        }

        img {
            width: 100%;
            height: 100%;
        }

        p {
            position: absolute;
            width: 100%;
            text-align: center;
            color: #fff;
            font-size: 0.48rem;
            z-index: 10;
            bottom: 0.1rem;
        }
    }
}
</style>

