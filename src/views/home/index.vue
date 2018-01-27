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
#home {
    padding-bottom: 0.8rem;
}

header {
    height: 1.74rem;
    position: relative;
    border-bottom: 1px solid #f6f6f6;

    .logo {
        height: 0.77rem;
        position: absolute;
        top: 0.47rem;
        left: 0.6rem;
    }
}

.search {
    padding: 0.48rem 0.6rem 0;
    position: relative;

    input {
        border: 1px solid #e8e6e5;
        box-sizing: border-box;
        height: 1.47rem;
        width: 9.56rem;
        outline: none;
        font-size: 0.51rem;
        padding-left: 1.08rem;
    }

    ::-webkit-input-placeholder {
        color: #a9a9a9;
    }

    .iconfont {
        position: absolute;
        top: 1.1rem;
        left: 0.9rem;
        font-size: 0.51rem;
        color: #a9a9a9;
    }
}

.category {
    padding: 0.48rem 0.6rem 0.24rem;

    .category-item {
        width: 3.03rem;
        height: 3.03rem;
        float: left;
        background: url('./images/category.jpg') no-repeat;
        background-size: 100% auto;
        margin-right: 0.24rem;

        &:nth-last-of-type(1) {
            margin-right: 0;
        }

        p {
            font-size: 0.54rem;
            font-weight: bold;
            text-align: center;
            padding-top: 1.95rem;
            color: #fff;
        }
    }

    .row {
        margin-bottom: 0.24rem;

        &:nth-of-type(1) {
            .category-item {
                &:nth-of-type(2) {
                    background-position: 0 -208px;
                }
                &:nth-of-type(3) {
                    background-position: 0 -416px;
                }
            }
        }

        &:nth-of-type(2) {
            .category-item {
                &:nth-of-type(1) {
                    background-position: 0 -624px;
                }
                &:nth-of-type(2) {
                    background-position: 0 -832px;
                }
                &:nth-of-type(3) {
                    background-position: 0 -1040px;
                }
            }
        }
    }

    .all-category {
        width: 9.6rem;
        height: 1.46rem;
        background-color: #f7f8f6;
        text-align: center;
        line-height: 1.46rem;
        font-size: 0.48rem;
        color: #383833;
    }
}

.rank {
    padding: 0 0.6rem;

    h3 {
        height: 2.07rem;
        line-height: 2.07rem;
        font-size: 0.55rem;
        color: #383833;
    }

    .explore {
        overflow-x: auto;
        display: flex;
        margin-bottom: 1rem;
    }

    .explore-item {
        margin-right: 0.3rem;
        font-size: 0;
        width: 6.6rem;

        img {
            width: 6.6rem;
            height: 3.9rem;
        }

        .explore-item-title {
            font-size: 0.5rem;
            padding-top: 0.32rem;
            color: #383833;
        }

        .explore-item-desc {
            padding-top: 0.13rem;
            font-size: 0.36rem;
            color: #777777;
        }
    }

    .rank-item {
        font-size: 0;

        img {
            width: 4.2rem;
            height: 2.86rem;
            padding-right: 0.4rem;
        }

        .rank-item-title {
            font-size: 0.5rem;
            line-height: 0.66rem;
            color: #383833;
        }

        .rank-item-desc {
            font-size: 0.36rem;
            color: #777;
            padding-top: 0.3rem;
        }

    }
}
</style>


