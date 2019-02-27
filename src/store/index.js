import Vue from  'vue';
import Vuex from 'vuex';
import * as actions from "./actions";
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

const state={
    isLogin:false,  //登录状态
    access_token:null,
    currentUser:null  //用户信息
}

const store=new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})
export default store;