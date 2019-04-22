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
                          <el-submenu v-for="(item,index) in onetowel" :index='item.id' :key="item.id">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>{{item.name}}</span>
                            </template>
                            <el-menu-item v-for="(items,indexs) in item.child" :index='items.id' :key="items.id" @click="topath(items.path)">
                              <span >{{items.name}}</span>
                            </el-menu-item>
                          </el-submenu>
                        </el-menu>
                      </el-col>
                    </el-aside>
                        <el-main class="main">
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
        onetowel:[]
      }
    },methods: {
      ...mapMutations(['SETUSER','USERTOKEN']),
      logout(){
        let _this=this;
        _this.SETUSER({
          currentUser:""
        })
        _this.USERTOKEN({
          access_token:""
        })
        _this.$router.push('/login')
      },
      goUserList(){
        let _this=this;
        _this.$router.push('/userList')
      },
      getMenu(){
        let _this=this;
        let data={
          type:1
        }
        _this.$http({method:"post",url:_this.Host+"/menu",params:data}).then(function(res){
        _this.onetowel=res.data.data.data;
        })
      },
      topath(path){
        let _this=this;
        _this.$router.push("/"+path);
      }
    },
    created() {
      let _this=this;
      _this.adminName=localStorage.getItem('username')
      _this.getMenu();
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
.main{
  background: #fff;
}
</style>