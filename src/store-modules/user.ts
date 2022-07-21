import { getterTree, mutationTree, actionTree } from 'typed-vuex';

export const namespaced = true;

export const state = () => ({
    name: ''
});

export const getters = getterTree(state, {
    getName: (state) => state.name
});

export const mutations = mutationTree(state, {
    SET_NAME(state, name: string) {
        state.name = name;
    }
});

export const actions = actionTree({state, getters, mutations}, {
    setName({commit}, name: string) {
        commit('SET_NAME', name);
    }
});
