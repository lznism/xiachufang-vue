<template>
    <div id="category">
        <xcf-header></xcf-header>
        <div id="all-category">
            <section v-for="(item, index) in category" :key="index">
                <h3 class="title">{{item.title}}</h3>
                <div class="category-section clearfix">
                    <div class="category-item" v-for="(_item, _index) in item.info" :key="_index">
                        <img :src="_item.imgUrl">
                        <p>{{_item.title}}</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import XcfHeader from '@/components/header';
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Category',
    components: {
        XcfHeader
    },
    computed: {
        ...mapGetters(['category'])
    },
    created() {
        this.getCategory();
    },
    methods: {
        ...mapActions(['getCategory'])
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
        .category-item {
            margin: 0 r(27) r(27) 0;
            position: relative;
            width: r(142);
            height: r(142);
            float: left;

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
                overflow: hidden;
                bottom: r(10);
                font-weight: bold;
                white-space:nowrap;
                text-overflow:ellipsis;
            }
        }
    }
}
</style>

