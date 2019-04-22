<template>
    <div>
        <table style="width:100%;border:1px solid #cccccc">
            <thead  style="height:30px">
                <tr>
                    <th v-for="(item,index) in titleData">{{item}}</th>
                </tr>
            </thead>
            <tbody v-for="(item,index) in tableData">
            <tr @click.stop="userDetails(item.id)" style="cursor:pointer">
                <td>{{item.id}}</td>
                <td>{{item.username}}</td>
                <td>{{item.age}}</td>
            </tr>
            </tbody>
        </table>
    <div class="paging">
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="10"
            layout="total, prev, pager, next, jumper"
            :total="totalPages">
        </el-pagination>
    </div>
    </div>
    </div>
</template>

<script>
  export default {
    data () {
        return {
            totalPages:0, //总数
            currentPage:1,
            tableData:[],
            titleData:[],
      }
    },
    created() {
        let _this=this;
        let titlesData=['id','用户名','年龄']
        _this.titleData=titlesData;
        _this.currentPage=1;
        _this.pageSize=10;
        let page=Number(_this.$route.query.page);
        if(page<1||!page){
            page=1
        }else{
            _this.currentPage=page;
        }

        _this.getListData(_this.currentPage,_this.pageSize);
    },
    methods: {
        handleCurrentChange(num) {
          let _this=this;
          //num表示当前页
          _this.currentPage=num;
          _this.pageSize=10;
          _this.getListData(num)
           window.history.pushState(null,null,"?page="+num)
        },getListData(page){
          let _this=this;
          let data={
            page:page,
            pageSize:10
          };
           _this.$http({method:'post',url:_this.Host+'/homeData',params:data}).then(function (data) {
              // console.log(data.data)
              _this.tableData=data.data.data
              _this.totalPages=data.data.count
          })
          window.history.pushState(null,null,"?page="+page)
        },
        userDetails(id){
            let _this=this;
            id=encodeURI("啊啊啊啊");
            // console.log(id)
             _this.$router.push('/userDetails?id='+encodeURI(id))
        }
    },
  }
</script>

<style lang='scss' scoped=''>
.paging{
    margin-top: 20px;
}
th{
    height: 50px;
    border: 2px solid black;
    font-size: 16px;
}
td{
    height: 30px;
    border:1px solid #cccccc;
}
</style>