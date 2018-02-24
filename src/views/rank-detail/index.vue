<template>
    <div>
        <xcf-header></xcf-header>
        <div class="rank-detail">
            <h1 class="title">{{rankDetail.title}}</h1>
            <ul class="list">
                <router-link tag="li" :to="item.href" v-for="(item, index) in rankDetail.explore" :key="index">
                    <img class="menu-pic" v-lazy="item.imgUrl">
                    <div class="wrapper">
                        <div class="info">
                            <p class="title">{{item.menuName}}</p>
                            <p class="author">{{item.author}}</p>
                            <p class="doneNum">{{item.doneNum}}人做过</p>
                        </div>
                        <img class="avatar" v-lazy="item.authorImg">
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
import XcfHeader from '@/components/header';
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        XcfHeader
    },
    computed: {
        ...mapGetters(['rankDetail'])
    },
    created () {
        let type = this.$route.params.type;
        this.getRankDetail(type);
    },
    methods: {
        ...mapActions(['getRankDetail'])
    }
};
</script>
<style lang="scss" scoped>
@function rem($px) {
    @return $px / 75 + rem;
}
h1 {
    font-size: rem(46);
    color: #333;
    margin-bottom: rem(80);
}
.rank-detail {
    padding: 0 rem(40);
}
.menu-pic {
    width: rem(670);
}
.wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: rem(60);

    .avatar {
        width: rem(106);
        height: rem(106);
        border-radius: 50%;
    }

    .title {
        font-size: rem(40);
        font-weight: bold;
    }

    .author,
    .doneNum {
        font-size: rem(28);
    }
}
.list li {
    margin-bottom: rem(50);
}
</style>
