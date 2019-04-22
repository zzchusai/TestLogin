// import * as Type from './mutation-types';

export const SETUSER=(state,user)=>{
        console.log(user.currentUser)
        if (user.currentUser != null || user.currentUser!=""){
            state.currentUser=user.currentUser;
            state.isLogin=true;
            localStorage.setItem('username',user.currentUser)
        }else{
            localStoarge.removeItem('username');
            localStorage.removeItem('access-token');
            state.isLogin=false;
            state.currentUser=null;
            state.token='';
        }
    };
  export const USERTOKEN=(state,token)=>{
        if (token!=null||token!=""){
            state.access_token = token.access_token;
            localStorage.setItem('access-token', token.access_token)
        }else{
            state.token=null;
        }
    }


