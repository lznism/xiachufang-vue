<template>
    <div class="list">
        <div class="list-item" v-for="(item, index) in list" :key="index">
            <img v-lazy="item.imgUrl">
            <div class="content">
                <p class="title">{{item.title}}</p>
                <p class="desc">
                    <span v-if="item.rate">评分{{item.rate}}</span>&nbsp;&nbsp;
                    <span v-if="item.doneNum">{{item.doneNum}}人做过</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        list: {
            type: Array,
            default: () => []
        }
    }
}
</script>
<style lang="scss" scoped>
@function r($px) {
    @return $px / 75 + rem;
}
.list {
    padding: 0 r(42);
}

.list-item {
    display: flex;
    margin-bottom: r(32);

    img {
        width: r(290);
        height: r(198);
        margin-right: r(24);
        flex-shrink: 0;
    }

    .content {
        .title {
            font-size: r(32);
            color: #383835;
        }

        .desc {
            margin-top: r(10);
            font-size: r(24);
            color: #646464;
        }
    }
}
</style>

