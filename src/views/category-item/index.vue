<template>
    <div class="category-item">
        <xcf-header></xcf-header>
        <div class="head">
            <p class="title">家常菜</p>
            <p class="choice">
                <span class="welcome">最受欢迎</span>
                <span>最近流行</span>
            </p>
        </div>
        <menu-list :list="categoryItemList"></menu-list>
    </div>
</template>
<script>
import XcfHeader from '@/components/header';
import MenuList from '@/components/menu-list';
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        XcfHeader,
        MenuList
    },
    computed: {
        ...mapGetters(['categoryItemList'])
    },
    created () {
        let id = this.$route.params.id;
        this.getCategoryItemList(id);
    },
    methods: {
        ...mapActions(['getCategoryItemList'])
    }
}
</script>
<style lang="scss" scoped>
@function r($px) {
    @return $px / 75 + rem;
}
.head {
    display: flex;
    justify-content: space-between;
    padding: 0 r(42);
    height: r(144);

    .title {
        font-size: r(46);
        color: #383835;
        height: r(144);
        line-height: r(144);
    }

    .choice {
        font-size: r(28);
        height: r(144);
        line-height: r(144);

        .welcome {
            padding-right: r(10);
        }

        .router-link-active {
            color: #f9674e;
        }
    }
}
</style>
