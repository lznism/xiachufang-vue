import * as types from './mutation-types';

export default {
    [types.SET_CATEGORY](state, category) {
        state.category = category;
    }
};
