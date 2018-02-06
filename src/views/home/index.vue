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
                <router-link tag="div" @click.native="setTitle('家常菜')" to="/category/40076" class="category-item">
                    <p>家常菜</p>
                </router-link>
                <router-link tag="div" @click.native="setTitle('快手菜')" to="/category/40077" class="category-item">
                    <p>快手菜</p>
                </router-link>
                <router-link tag="div" @click.native="setTitle('下饭菜')" to="/category/40078" class="category-item">
                    <p>下饭菜</p>
                </router-link>
            </div>
            <div class="row">
                <router-link tag="div" @click.native="setTitle('早餐')" to="/category/40071" class="category-item">
                    <p>早餐</p>
                </router-link>
                <router-link tag="div" @click.native="setTitle('肉')" to="/category/1012713" class="category-item">
                    <p>肉</p>
                </router-link>
                <router-link tag="div" @click.native="setTitle('鱼')" to="/category/957" class="category-item">
                    <p>鱼</p>
                </router-link>
            </div>
            <router-link tag="div" class="all-category" to="/category">全部菜谱分类</router-link>
        </section>
        <section class="list">
            <h3>菜谱榜单</h3>
            <div class="list-head">
                <div class="head-item" v-for="(item, index) in rankMenu.head" :key="index">
                    <img v-lazy="item.imgUrl">
                    <p class="title">{{item.title}}</p>
                    <p class="desc">{{item.description}}</p>
                </div>
            </div>
            <div class="list-body">
                <div class="body-item" v-for="(item, index) in rankMenu.body" :key="index">
                    <img v-lazy="item.imgUrl">
                    <div class="content">
                        <p class="title">{{item.title}}</p>
                        <p class="desc">
                            <span v-if="item.rate">评分{{item.rate}}</span>
                            <span v-if="item.doneNum">{{item.doneNum}}人做过</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="list">
            <h3>流行菜单</h3>
            <div class="list-head">
                <div class="head-item" v-for="(item, index) in popMenu.head" :key="index">
                    <img v-lazy="item.imgUrl">
                    <p class="title">{{item.title}}</p>
                    <p class="desc">{{item.description}}</p>
                </div>
            </div>
            <div class="list-body">
                <div class="body-item" v-for="(item, index) in popMenu.body" :key="index">
                    <img v-lazy="item.imgUrl">
                    <div class="content">
                        <p class="title">{{item.title}}</p>
                        <p class="desc">
                            <span v-if="item.rate">评分{{item.rate}}</span>
                            <span v-if="item.doneNum">{{item.doneNum}}人做过</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="list">
            <h3>新秀菜单</h3>
            <div class="list-head">
                <div class="head-item" v-for="(item, index) in risingMenu.head" :key="index">
                    <img v-lazy="item.imgUrl">
                    <p class="title">{{item.title}}</p>
                    <p class="desc">{{item.description}}</p>
                </div>
            </div>
            <div class="list-body">
                <div class="body-item" v-for="(item, index) in risingMenu.body" :key="index">
                    <img v-lazy="item.imgUrl">
                    <div class="content">
                        <p class="title">{{item.title}}</p>
                        <p class="desc">
                            <span v-if="item.rate">评分{{item.rate}}</span>
                            <span v-if="item.doneNum">{{item.doneNum}}人做过</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import * as types from '@/store/mutation-types';
export default {
    name: 'Home',
    created () {
        this.getRankMenu();
        this.getPopMenu();
        this.getRisingMenu();
    },
    computed: {
        ...mapGetters(['rankMenu', 'popMenu', 'risingMenu'])
    },
    methods: {
        ...mapActions(['getRankMenu', 'getPopMenu', 'getRisingMenu']),
        ...mapMutations({
            setTitle: types.SET_CATEGORY_ITEM_TITLE
        })
    }
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

.list {
    padding: 0 r(42);

    h3 {
        height: r(144);
        line-height: r(144);
        font-size: r(40);
        color: #383838;
    }

    .list-head {
        display: flex;
        overflow-x: auto;
    }

    .head-item {
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
.list-body {
    margin-top: r(20);

    .body-item {
        display: flex;
        margin-bottom: r(30);

        & > img {
            margin-right: r(24);
            width: r(292);
            height: r(198);
            flex-shrink:0;
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
