<template>
    <div>
        <xcf-header></xcf-header>
        <div class="head-img">
            <img v-lazy="menuDetail.headImgUrl">
        </div>
        <div class="title">
            <h1>{{menuDetail.title}}</h1>
            <p>
                <span>{{menuDetail.rate}}综合评分</span>
                <span>{{menuDetail.doneNum}}人做过</span>
            </p>
        </div>
        <div class="description">
            {{menuDetail.description}}
        </div>
        <div class="userinfo">
            <p class="author">作者：{{menuDetail.author}}</p>
            <img class="avatar" :src="menuDetail.avatar">
        </div>
        <table class="materials">
            <tr>
                <td colspan="2">用料</td>
            </tr>
            <tr v-for="(item, index) in menuDetail.materials" :key="index">
                <td>{{item.ingredient}}</td>
                <td>{{item.weight}}</td>
            </tr>
        </table>
        <ul class="steps">
            <li v-for="(item, index) in menuDetail.steps" :key="index">
                <p class="step-num">{{item.subTitle}}</p>
                <img v-lazy="item.stepImg" v-if="item.stepImg">
                <p class="desc">{{item.description}}</p>
            </li>
        </ul>
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
            ...mapGetters(['menuDetail'])
        },
        created () {
            let id = this.$route.params.id;
            this.getMenuDetail(id);
        },
        methods: {
            ...mapActions(['getMenuDetail'])
        }
    }
</script>
<style lang="scss" scoped>
@function rem($px) {
    @return $px / 75 + rem;
}

.head-img {
    img {
        width: 100%;
    }
}

.title {
    height: rem(250);
    text-align: center;
    font-weight: bold;

    & > h1 {
        font-size: rem(60);
        padding-top: rem(60);
    }

    & > p {
        font-size: rem(28);
    }
}

.description {
    padding: 0 rem(40) rem(20);
    font-size: rem(32);
    line-height: rem(56);
}

.userinfo {
    width: rem(670);
    margin: 0 auto;
    padding: rem(50) 0;
    border-top: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-between;

    img {
        border-radius: 50%;
        width: rem(104);
        height: rem(104);
    }

    .author {
        height: rem(104);
        line-height: rem(104);
        font-size: rem(32);
    }
}

.materials {
    font-size: rem(40);
    width: rem(670);
    margin: 0 auto;

    tr {
        height: rem(98);
        line-height: rem(98);
        border-bottom: 1px solid #ededec;
    }
}

.steps {
    margin-top: rem(50);
    padding: 0 rem(40);

    .step-num {
        font-size: rem(40);
        line-height: rem(100);
        height: rem(100);
    }

    img {
        width: 100%;
    }

    .desc {
        font-size: rem(32);
        line-height: rem(56);
        color: #333;
    }
}
</style>
