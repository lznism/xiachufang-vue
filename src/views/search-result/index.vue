<template>
    <div>
        <xcf-header></xcf-header>
        <search></search>
        <menu-list :list="searchResults"></menu-list>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import Search from '@/components/search';
import MenuList from '@/components/menu-list';
import XcfHeader from '@/components/header';
export default {
    components: {
        Search,
        MenuList,
        XcfHeader
    },
    computed: {
        ...mapGetters(['searchResults'])
    },
    created() {
        // 防止在搜索结果页面刷新，丢失数据
        if (this.searchResults.length === 0) {
            let keyword = this.$route.query.keyword;
            this.getSearch(keyword);
        }
    },
    methods: {
        ...mapActions(['getSearch'])
    }
};
</script>
<style lang="scss" scoped>
@function r($px) {
    @return $px / 75 + rem;
}

.search {
    margin-bottom: r(20);
}
</style>

