<template>
    <div>
        <xcf-header></xcf-header>
        <div class="head-img">
            <img src="http://s2.cdn.xiachufang.com/d584500a529a4573afccd21d66d937e1_1280w_854h.jpg?imageView2/1/w/640/h/520/interlace/1/q/90">
        </div>
        <div class="title">
            <h1>主标题</h1>
            <p>
                <span>9.3综合评分</span>
                <span>76人做过</span>
            </p>
        </div>
        <div class="description">
            description
        </div>
        <div class="userinfo">
            <p class="author">作者：aaa</p>
            <img class="avatar" src="http://s2.cdn.xiachufang.com/d584500a529a4573afccd21d66d937e1_1280w_854h.jpg?imageView2/1/w/640/h/520/interlace/1/q/90">
        </div>
        <table class="materials">
            <tr>
                <td colspan="2">用料</td>
            </tr>
            <tr>
                <td>材料</td>
                <td>用量</td>
            </tr>
        </table>
        <ul class="steps">
            <li>
                <p class="step-num">步骤1</p>
                <img src="http://s2.cdn.xiachufang.com/d584500a529a4573afccd21d66d937e1_1280w_854h.jpg?imageView2/1/w/640/h/520/interlace/1/q/90">
                <p class="desc">全部食材</p>
            </li>
        </ul>
    </div>
</template>
<script>
    import XcfHeader from '@/components/header';
    export default {
        components: {
            XcfHeader
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
