<template>
    <div class="rank-detail">
        <xcf-header></xcf-header>
        <h1 class="title">发现新菜</h1>
        <ul class="list">
            <li>
                <img class="menu-pic" src="http://s2.cdn.xiachufang.com/cb27950d86684bffae28cb44c6509c1e_6000w_3750h.jpg?imageView2/2/w/620/interlace/1/q/90">
                <div class="wrapper">
                    <div class="info">
                        <p class="title">【蒸三样】</p>
                        <p class="author">夏夏和秋秋</p>
                        <p class="doneNum">0人做过</p>
                    </div>
                    <img class="avatar" src="http://s2.cdn.xiachufang.com/7d6a42b4912d4225baa7893c5106a2cc_1196w_1079h.jpg?imageView2/1/w/160/h/160/interlace/1/q/90">
                </div>
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
