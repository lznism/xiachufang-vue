<template>
    <div id="category">
        <xcf-header></xcf-header>
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
import XcfHeader from '@/components/header';
export default {
    name: 'Category',
    components: {
        XcfHeader
    }
}
</script>
<style lang="scss" scoped>
@function r($px) {
    @return $px / 75 + rem;
}

#all-category {
    padding: 0 r(42);

    h3 {
        color: #383835;
        font-size: r(36);
        line-height: r(106);
        height: r(106);
        font-weight: bold;
    }

    .category-section {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .category-item {
            margin: 0 r(27) r(27) 0;
            position: relative;
            width: r(142);
            height: r(142);

            &:nth-of-type(4n) {
                margin-right: 0;
            }

            img {
                width: r(142);
                height: r(142);
            }

            p {
                color: #fff;
                font-size: r(32);
                position: absolute;
                text-align: center;
                width: 100%;
                bottom: r(10);
                font-weight: bold;
            }
        }
    }
}
</style>

