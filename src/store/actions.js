import http from '@/utils/http';
import * as types from './mutation-types';

export const getCategory = ({commit}) => {
    http.get('/category').then(res => {
        if (res.code === 1) {
            commit(types.SET_CATEGORY, res.message);
        }
    });
};
