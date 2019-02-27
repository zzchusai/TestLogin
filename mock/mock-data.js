
module.exports=function(){
  // let Mock = require('mockjs');
  // var Random = Mock.Random;
  return{
  //   dataOne:function(){
  // return{
    "data":{
      "success": true,
      "count": 1000, //数据长度
      "aa":function ({
      _req,
      Mock
    }){
      let i = 0,
        _data = [],
        page = _req.query.page, //当前页数
        pageSize = _req.query.pageSize, //每次返回的条数
        len = (1000 - pageSize * (page - 1)) < pageSize ? (1000 - pageSize * (page - 1)) : pageSize;
      for (i; i < len; i++) {
        _data.push(
          Mock.mock({
            "id": (page - 1) * pageSize + (i + 1),
            "username": "@cname",
            "age|+1": (page - 1) * pageSize + (i + 1) + 10
          })
        );
      }
      return _data;
    },
  }
}
    // "msg": "请求数据成功"
  }
//   }
// }


