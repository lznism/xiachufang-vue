<template>
    <div class="category-item">
        <xcf-header></xcf-header>
        <div class="head">
            <p class="title">{{categoryItemTitle}}</p>
            <p class="choice">
                <router-link :to="`/category/${id}/pop`" class="welcome">最受欢迎</router-link>
                <router-link :to="`/category/${id}/recent`">最近流行</router-link>
            </p>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import XcfHeader from '@/components/header';
import { mapGetters } from 'vuex';
export default {
    components: {
        XcfHeader
    },
    data () {
        return {
            id: ''
        };
    },
    computed: {
        ...mapGetters(['categoryItemTitle'])
    },
    created () {
        let id = this.$route.params.id;
        this.id = id;
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
