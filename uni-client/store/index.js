import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 
const store = new Vuex.Store({
	state: {
		dynamicTabbar: [] // 动态tabbar
	},
	getters: {},
	actions: {
		changeTabbar({commit}, payload) {
			commit('updateTabbar', payload)
		}
	},
	mutations: {
		updateTabbar(state, payload) {
			state.dynamicTabbar = payload
		}
	}
})
 
export default store