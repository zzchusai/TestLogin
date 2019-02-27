<template>
    <div class='content'>
        <el-row :gutter="24">
            <el-col :span='6' class="hint" label='手机号'>
                账号：
            </el-col>
            <el-col :span="18">
                <el-input  placeHolder='请输入手机号' maxlength=11 v-model="txtPhone" @blur="txtPhoneBlur(txtPhone)"></el-input>
            </el-col>
        </el-row>

         <el-row :gutter="24" >
            <el-col :span='6' class="hint" label='密码'>
                密码：
            </el-col>
            <el-col :span="18">
                <el-input  placeHolder='请输入密码' v-model='txtPwd' @blur="txtPwdBlur(txtPwd)"></el-input>
            </el-col>
        </el-row>
        <el-button size='medium' type='success' class="btnLogin" v-on:click='login()'>登录</el-button>
  </div>
</template>

<script>
import {mapActions,mapGetters,mapMutations} from 'vuex';
  export default {
    data () {
      return {
          txtPhone:'',
          txtPwd:'',
          isPhone:true,
          isPwd:true
      }
    },methods: {
        ...mapMutations(['setUser','userToken']),
        txtPhoneBlur(event){
            let self=this;
            let regPhone=/1[3,5,8][0-9]{9}/;
            if(!regPhone.test(event.trim())&&event.length>0){
                self.$message.error('手机号格式出错');
                self.isPhone=false;
            }else{
                self.isPhone=true;
            }
        },txtPwdBlur(event){
            let self=this;
            let regNumber=/[0-9]/;
            let regWord=/[a-zA-Z]/;
            if(!(regNumber.test(event.trim())&&regWord.test(event.trim()))&&event.length>0) {
                self.$message.error('密码必须由数字和字母组成');
                self.isPwd=false;
            }else{
                self.isPwd=true;
            }
        },login(){
            let self=this;
            if(self.txtPhone.length==0){
                self.$message.error('手机号不能为空');
                return false;
            }else if(self.txtPwd.length==0){
                self.$message.error('密码不能为空');
                return false;
            }
            self.txtPhoneBlur(self.txtPhone);
            self.txtPwdBlur(self.txtPwd);
            if(self.txtPhone=='18111111111'&&self.txtPwd=="123qqq"&&self.isPhone&&self.isPwd){
                self.$message({
                    message:'登陆成功',
                    type:'success'
                })
                self.setUser({
                    currentUser:'zzc',
                })
                self.userToken({
                    access_token:'123'
                })
                let userName="zzc"
                self.$router.push('/home?userName='+userName)
                // self.$router.push({
                //     name:'home',
                //     params:{
                //         userName:userName
                //     }
                // })
            }else{
               self.$message({
                   type:"error",
                   message:'登录账号或密码错误！'
               })
            }
        }
    }
  }
</script>

<style lang='scss' scoped>
 @import '../style/css/mixin';
html{
    font-size: 10px;
}
.content{
    @include center;
    padding: 3rem 2rem;
    font-size: 14px;
    width: 40rem;
    height: 40rem;
    border:1px solid #bdbdbd;
    .hint{
        color: red;
        line-height: 4rem;
        text-align: right;
    }
    .btnLogin{
        width: 100%;
        margin-top: 3rem;
    }
}
</style>