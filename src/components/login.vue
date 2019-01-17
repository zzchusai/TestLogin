<template>
    <div class='content'>
        <el-row :gutter="24">
            <el-col :span='6' class="hint" label='账号'>
                账号：
            </el-col>
            <el-col :span="18">
                <el-input  placeHolder='请输入账号' v-model="txtUser" v-on:change='txtUserChange()'></el-input>
            </el-col>
        </el-row>

         <el-row :gutter="24" >
            <el-col :span='6' class="hint" label='密码'>
                密码：
            </el-col>
            <el-col :span="18">
                <el-input  placeHolder='请输入密码' v-model='txtPwd'></el-input>
            </el-col>
        </el-row>

            <el-button size='medium' type='success' class="btnLogin">登录</el-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
          txtUser:'',
          txtPwd:''
      }
    },methods: {
        txtUserChange(event){
            console.log(event)
        }
    },
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