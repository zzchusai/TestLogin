<template>
  <div class="rolemanage">
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>角色管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table size='small' class="table" border :data="roleList">
      <el-table-column align='center' width='60'  type='selection'>
      </el-table-column>
      <el-table-column label="角色名称" width='300' sortable prop='name'>
      </el-table-column>
      <el-table-column label="角色编码" width='300' sortable prop='code'>
      </el-table-column>
        <el-table-column sortable prop="time" label="修改时间" width="300" >
      </el-table-column>
       <el-table-column label="修改人" max-width='300' prop='editor'>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        roleList:[]
      }
    },
    created() {
      let _this=this;
      _this.getRoleList();
    },
    methods: {
      getRoleList(){
        let _this=this;
        _this.$http({method:"post",url:_this.Host+"/roleList",params:{}}).then(function(res){
          console.log(res.data.data.data.data)
          res.data.data.data.data.map(function(item,index){
            item.time=new Date(Number(item.time)).format('yyyy-MM-dd')
            _this.roleList.push(item)
          })
        })
      },
    },
  }
</script>

<style lang='scss' scoped=''>
.table{
  margin-top: 40px;
}
</style>