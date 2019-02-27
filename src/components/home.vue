<template>
    <div id="home">
        <el-container>
            <el-header>
                <h2 class="rt"><span class="admin">{{adminName}}</span> <span @click="logout" class="logout">注销</span></h2>
            </el-header>
                <el-container>
                    <el-aside width="200px">
                      <!-- <el-row class="tac"> -->
                      <el-col >
                        <!-- <h5>默认颜色</h5> -->
                        <el-menu
                          default-active="2"
                          class="el-menu-vertical-demo"
                          background-color='#D3DCE6'>
                          <el-submenu index="1">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>首页</span>
                            </template>
                            <el-menu-item-group>
                              <el-menu-item index="1-1" @click="goUserList">普通用户列表</el-menu-item>
                              <el-menu-item index="1-2">会员列表</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                              <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                              <template slot="title">选项4</template>
                              <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                          </el-submenu>
                        </el-menu>
                      </el-col>
                    </el-aside>
                        <el-main>
                          <!-- <keep-alive> -->
                             <router-view></router-view>
                          <!-- </keep-alive> -->
                        </el-main>
                </el-container>
        </el-container>
    </div>
</template>
<script>
import {mapActions,mapGetters,mapMutations} from 'vuex';
  export default {
    data () {
      return {
        adminName:'',
        totalPages:0, //总数
        currentPage:1,
        tableData:[],
        titleData:[],
      }
    },methods: {
      ...mapMutations(["setUser","userToken"]),
      logout(){
        let _this=this;
        _this.setUser({
          currentUser:""
        })
        _this.userToken({
          access_token:""
        })
        _this.$router.push('/login')
      },
      goUserList(){
        let _this=this;
        _this.$router.push('/userList')
      }
    },
    created() {
      let _this=this;
      _this.adminName=localStorage.getItem('username')
    }
  }
</script>

<style lang='scss' scoped=''>
@import '../style/css/mixin.scss';
#home{
    width: 100%;
    height: 500px;
}
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    // line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
    height: 100%;
  }
.el-container > .el-container{
    height: 565px;
}
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .bg-red{
      background: red;
  }
.logout{
    line-height: 60px;
    cursor:pointer;
}
.admin{
  color: black;
  margin-right: 10px;
}
.paging{
  margin-top: 20px;
}
td,th{
  border-right:1px solid #cccccc;
}
</style>