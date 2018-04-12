import http from '@/utils/http';
import * as types from './mutation-types';
import router from '@/router';

export const getCategory = ({commit}) => {
    http.get('/category').then(res => {
        if (res.code === 0) {
            commit(types.SET_CATEGORY, res.data);
        }
    });
};

export const getHome = ({commit}) => {
    http.get('/home').then(res => {
        if (res.code === 0) {
            commit(types.SET_RANK_MENU, {
                head: res.data.rankHead,
                body: res.data.rankBody
            });
            commit(types.SET_POP_MENU, {
                head: res.data.popHead,
                body: res.data.popBody
            });
            commit(types.SET_RISING_MENU, {
                head: res.data.newMenuHead,
                body: res.data.newMenuBody
            });
        }
    });
};

export const getCategoryItemList = ({commit}, {id, recent=''}) => {
    http.get(`/category-item-list?id=${id}&type=${recent}`).then(res => {
        if (res.code === 0) {
            commit(types.SET_CATEGORY_ITEM_LIST, res.data);
        }
    });
};

export const getMenuDetail = ({commit}, id) => {
    http.get(`/detail/${id}`).then(res => {
        if (res.code === 0) {
            commit(types.SET_MENU_DETAIL, res.data);
        }
    });
};

export const getRankDetail = ({commit}, type) => {
    http.get(`/explore/${type}`).then(res => {
        if (res.code === 0) {
            commit(types.SET_RANK_DETAIL, res.data);
        }
    });
};

export const getSearch = ({commit}, keyword) => {
    http.get(`/search?keyword=${keyword}`).then(res => {
        if (res.code === 0) {
            if (res.isRedirect) {
                let url = res.redirectUrl.match(/\/category\/\d+/)[0];
                router.push({path: url});
            } else {
                router.push({path: '/search', query: {keyword}});
                commit(types.SET_SEARCH_RESULT, res.data);
            }
        }
    });
};
