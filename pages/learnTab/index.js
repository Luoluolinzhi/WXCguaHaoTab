// pages/tab/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    roomType:{},
    houseInfo:{},
    lists:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.roomChange();
  },
  roomChange: function(event){
    // var res = {
      //   "code": 100,
      //   "msg": "处理成功",
      //   "extend": {
      //     "dayTimeAllow": [
      //       {
      //         "day": "2018-05-18",
      //         "times": [
      //           {
      //             "time": "11:00",
      //             "allow": 1
      //           },
      //           {
      //             "time": "12:00",
      //             "allow": 0
      //           },
      //           {
      //             "time": "13:00",
      //             "allow": 1
      //           },
      //           {
      //             "time": "14:00",
      //             "allow": 0
      //           },
      //           {
      //             "time": "15:00",
      //             "allow": 0
      //           },
      //           {
      //             "time": "16:00",
      //             "allow": 0
      //           }
      //         ]
      //       },
      //       {
      //         "day": "2018-05-25",
      //         "times": [
      //           {
      //             "time": "11:00",
      //             "allow": 1
      //           },
      //           {
      //             "time": "11:00",
      //             "allow": 1
      //           },
      //           {
      //             "time": "11:00",
      //             "allow": 1
      //           },
      //           {
      //             "time": "11:00",
      //             "allow": 1
      //           },
      //           {
      //             "time": "11:00",
      //             "allow": 1
      //           },
      //           {
      //             "time": "11:00",
      //             "allow": 1
      //           }
      //         ]
      //       }
      //     ]
      //   }
    // }
    var that = this; 
    var res = {
      "code": 100,
      "msg": "处理成功",
      data:{
        house_type: [
          {
            room_str: "三居室",
            lists: [
              {
                title: "三室两厅两卫",
                area: "150平"
              },
              {
                title: "三室两厅两卫",
                area: "150平"
              },
              {
                title: "三室两厅两卫",
                area: "150平"
              },
            ]
          },
          {
            room_str: "四居室",
            lists: [
              {
                title: "四室两厅两卫",
                area: "150平"
              },
              {
                title: "四室两厅两卫",
                area: "150平"
              },
              {
                title: "四室两厅两卫",
                area: "150平"
              },
            ]
          }
        ]
      }
    }
    res.data.house_type.forEach(function(item,index){
      if(index == 0){
        item.d = true;
      }else{
        item.d = false;
      }
    })
    that.setData({
      roomType : res,
      houseInfo: res.data.house_type[0],
    })
  },
  
  clickRoomType: function(event){
    var roomTypeTemp = this.data.roomType;
    var index = event.currentTarget.dataset.index;
    roomTypeTemp.data.house_type.forEach(function(item){
      item.d=false; 
    })
    roomTypeTemp.data.house_type[index].d = true;
    this.setData({
      roomType: roomTypeTemp,
      houseInfo: roomTypeTemp.data.house_type[index],
    })
  },
  // clickRoomType: function (event) {
  //   var roomTypeTemp = this.data.roomType;
  //   var index = event.currentTarget.dataset.index;
  //   roomTypeTemp.data.house_type.forEach(function (item) {
  //     item.d = false;
  //   })
  //   roomTypeTemp.data.house_type[index].d = true;
  //   var lists = event.currentTarget.dataset.lists;
  //   this.setData({
  //     roomType: roomTypeTemp,
  //     lists : lists
  //   })
  // },
})
