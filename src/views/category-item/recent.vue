<template>
    <menu-list :list="categoryItemList"></menu-list>
</template>

<script>
import MenuList from '@/components/menu-list';
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        MenuList
    },
    computed: {
        ...mapGetters(['categoryItemList'])
    },
    created () {
        this._getList();
    },
    methods: {
        _getList() {
            let id = this.$route.params.id;
            this.getCategoryItemList({id, recent: '/recent'});
        },
        ...mapActions(['getCategoryItemList'])
    }
}
</script>