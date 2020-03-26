import Mock from 'mockjs'
 Mock.mock("/api/user/login",{
     "status": 0,
     "data": {
     "id": 0,
     "username": "小白",
     "email": "admin@51purse.com",
     "phone": null,
     "role": 0,
     "createTime": 1479048325000,
     "updateTime": 1479048325000
   }
  }
)
Mock.mock("/api/user/login1",'post',{
  "status": 0,
  "data": {
  "id": 0,
  "username": "小白",
  "email": "admin@51purse.com",
  "phone": null,
  "role": 0,
  "createTime": 1479048325000,
  "updateTime": 1479048325000
}
}
)
