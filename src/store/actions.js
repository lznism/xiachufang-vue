import http from '@/utils/http';
import * as types from './mutation-types';

export const getCategory = ({commit}) => {
    http.get('/category').then(res => {
        if (res.code === 1) {
            commit(types.SET_CATEGORY, res.message);
        }
    });
};

export const getRankMenu = ({commit}) => {
    http.get('/home/pop-lists').then(res => {
        if (res.code === 1) {
            commit(types.SET_RANK_MENU, res.message);
        }
    });
};

export const getPopMenu = ({commit}) => {
    http.get('/home/pop-menus').then(res => {
        if (res.code === 1) {
            commit(types.SET_POP_MENU, res.message);
        }
    });
};

export const getRisingMenu = ({commit}) => {
    http.get('/home/rising-recipes').then(res => {
        if (res.code === 1) {
            commit(types.SET_RISING_MENU, res.message);
        }
    });
};

export const getCategoryItemList = ({commit}, id) => {
    http.get(`/category/${id}`).then(res => {
        if (res.code === 1) {
            commit(types.SET_CATEGORY_ITEM_LIST, res.message);
        }
    });
};
