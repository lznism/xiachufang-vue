<template>
    <div>
        <xcf-header></xcf-header>
        <search></search>
        <menu-list :list="searchResults"></menu-list>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
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

