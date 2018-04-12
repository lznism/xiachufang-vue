<template>
    <section class="search">
        <input type="text" placeholder="搜索菜谱、食材" @keypress.enter="handleSearch">
        <i class="iconfont icon-fangdajing"></i>
    </section>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions(['getSearch']),

        handleSearch(e) {
            let val = e.target.value;
            if (!val) return;
            this.getSearch(val);
        }
    }
};
</script>
<style lang="scss" scoped>
@function r($px) {
    @return $px / 75 + rem;
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
</style>

