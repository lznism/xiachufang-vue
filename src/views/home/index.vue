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
            <div class="row">
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
            <div class="row">
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
            <div class="explore">
                <div class="explore-item">
                    <img src="http://s2.cdn.xiachufang.com/6643b0a5f811419ca7f445cd50a72d18_1080w_720h.jpg?imageView2/1/w/560/h/340/interlace/1/q/90" alt="">
                    <p class="title">发现新菜</p>
                    <p class="desc">新创建的菜谱</p>
                </div>
                <div class="explore-item">
                    <img src="http://s2.cdn.xiachufang.com/6643b0a5f811419ca7f445cd50a72d18_1080w_720h.jpg?imageView2/1/w/560/h/340/interlace/1/q/90" alt="">
                    <p class="title">发现新菜</p>
                    <p class="desc">新创建的菜谱</p>
                </div>
                <div class="explore-item">
                    <img src="http://s2.cdn.xiachufang.com/6643b0a5f811419ca7f445cd50a72d18_1080w_720h.jpg?imageView2/1/w/560/h/340/interlace/1/q/90" alt="">
                    <p class="title">发现新菜</p>
                    <p class="desc">新创建的菜谱</p>
                </div>
            </div>
            <div class="rank-list">
                <div class="rank-item">
                    <img src="http://s2.cdn.xiachufang.com/6643b0a5f811419ca7f445cd50a72d18_1080w_720h.jpg?imageView2/1/w/560/h/340/interlace/1/q/90" alt="">
                    <div class="content">
                        <p class="title">哈哈哈哈</p>
                        <p class="desc">哈哈哈哈</p>
                    </div>
                </div>
                <div class="rank-item">
                    <img src="http://s2.cdn.xiachufang.com/6643b0a5f811419ca7f445cd50a72d18_1080w_720h.jpg?imageView2/1/w/560/h/340/interlace/1/q/90" alt="">
                    <div class="content">
                        <p class="title">哈哈哈哈</p>
                        <p class="desc">哈哈哈哈</p>
                    </div>
                </div>
                <div class="rank-item">
                    <img src="http://s2.cdn.xiachufang.com/6643b0a5f811419ca7f445cd50a72d18_1080w_720h.jpg?imageView2/1/w/560/h/340/interlace/1/q/90" alt="">
                    <div class="content">
                        <p class="title">哈哈哈哈</p>
                        <p class="desc">哈哈哈哈</p>
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
@function r($px) {
    @return $px / 75 + rem;
}

header {
    height: r(120);
    border-bottom: 1px solid #f7f7f7;
    position: relative;
    margin-bottom: r(34);

    .logo {
        height: r(54);
        position: absolute;
        top: r(32);
        left: r(42);
    }
}

.search {
    padding: 0 r(42);
    position: relative;
    font-size: r(36);    

    input {
        height: r(100);
        border: 1px solid #a9a9a9;
        width: 100%;
        padding-left: r(74);
        box-sizing: border-box;
    }

    .iconfont {
        position: absolute;
        font-size: r(36);
        top: r(32);
        left: r(64);
    }
}

.category {
    padding: r(42) r(42) 0;

    .row {
        display: flex;
        margin-bottom: r(16);
        justify-content: space-between;

        &:nth-of-type(1) {
            .category-item {
                &:nth-of-type(2) {
                    background-position-y: r(-210);
                }

                &:nth-of-type(3) {
                    background-position-y: r(-420);
                }
            }
        }

        &:nth-of-type(2) {
            .category-item {
                &:nth-of-type(1) {
                    background-position-y: r(-630);
                }

                &:nth-of-type(2) {
                    background-position-y: r(-840);
                }

                &:nth-of-type(3) {
                    background-position-y: r(-1050);
                }
            }
        }

        .category-item {
            width: r(210);
            height: r(210);
            display: flex;
            flex-direction: column-reverse;
            text-align: center;
            font-weight: bold;
            color: #fff;
            font-size: r(38);
            background: url('http://s2.cdn.xiachufang.com/52f1175bd6c04049b123a8f08edd3fd3_200w_1200h.jpg') no-repeat;
            background-size: 100% auto;

            p {
                margin-bottom: r(30);
            }
        }
    }

    .all-category {
        height: r(100);
        background: #f7f8f6;
        line-height: r(100);
        text-align: center;
        font-size: r(34);
        color: #383838;
    }
}

.rank {
    padding: 0 r(42);

    h3 {
        height: r(144);
        line-height: r(144);
        font-size: r(40);
        color: #383838;
    }

    .explore {
        display: flex;
        overflow-x: auto;
    }

    .explore-item {
        padding-bottom: r(30);
        margin-right: r(20);

        img {
            width: r(458);
            height: r(270);
        }

        .title {
            font-size: r(34);
            margin-top: r(22);
        }

        .desc {
            font-size: r(25);
            margin-top: r(10);
        }

        &:nth-last-of-type(1) {
            margin-right: 0;
        }
    }
}
.rank-list {
    margin-top: r(20);

    .rank-item {
        display: flex;
        margin-bottom: r(30);

        img {
            margin-right: r(24);
        }

        .content {
            display: flex;
            flex-direction: column;

            .title {
                font-size: r(34);
                color: #383838;
                margin-bottom: r(10);
            }

            .desc {
                font-size: r(25);
                color: #727272;
            }
        }
    }
}
</style>
