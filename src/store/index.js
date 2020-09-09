import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        frames: [
            { name: 'Vue.js', star: 15 },
            { name: 'React.js', star: 13 },
            { name: 'Angular.js', star: 12 },
        ]
    },
    mutations: {},
    actions: {},
    modules: {},
});