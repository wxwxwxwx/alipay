

var aa = angular.module('alipay',['ngAnimate','ngRoute']);
aa.controller('mainC',['$scope',function($scope){
  $scope.title='homepage';
}])


aa.controller('homepageCtrl',['$scope',function($scope){

    $(function(){
      var mySwiper = new Swiper('.homepage .swiper-container',{
        loop:true,
        pagination: '.swiper-pagination',
        autoplay : 3000,
        speed:200,
      })

    })





  $scope.serve=[
    {text:'余额宝',image:'./images/icon1.jpg',width:'.36rem',height:'.43rem',left:'-.18rem'},
    {text:'服务窗',image:'./images/icon2.jpg',width:'.36rem',height:'.43rem',left:'-.18rem'},
    {text:'转账',image:'./images/icon3.jpg',width:'.38rem',height:'.43rem',left:'-.19rem'},
    {text:'手机充值',image:'./images/icon4.jpg',width:'.46rem',height:'.43rem',left:'-.23rem'},
    {text:'红包',image:'./images/icon5.jpg',width:'.36rem',height:'.45rem',left:'-.18rem'},
    {text:'我的快递',image:'./images/icon6.jpg',width:'.43rem',height:'.45rem',left:'-.215rem'},
    {text:'蚂蚁花呗',image:'./images/icon7.jpg',width:'.38rem',height:'.45rem',left:'-.19rem'},
    {text:'滴滴出行',image:'./images/icon8.jpg',width:'.46rem',height:'.45rem',left:'-.23rem'},
    {text:'世界那么大',image:'./images/icon9.jpg',width:'.36rem',height:'.36rem',left:'-.18rem'},
    {text:'信用卡还款',image:'./images/icon10.jpg',width:'.43rem',height:'.36rem',left:'-.215rem'},
    {text:'校园生活',image:'./images/icon11.jpg',width:'.38rem',height:'.36rem',left:'-.19rem'},
    {text:'城市服务',image:'./images/icon12.jpg',width:'.46rem',height:'.36rem',left:'-.23rem'},
  ]

  $scope.serve1=[
    {text:'蚂蚁聚宝',image:'./images/icon1-1.jpg',width:'.37rem',height:'.41rem',left:'-.185rem'},
    {text:'虾米音乐',image:'./images/icon1-2.jpg',width:'.36rem',height:'.41rem',left:'-.18rem'},
    {text:'我的客服',image:'./images/icon1-3.jpg',width:'.42rem',height:'.41rem',left:'-.21rem'},
    {text:'芝麻信用',image:'./images/icon1-4.jpg',width:'.41rem',height:'.41rem',left:'-.205rem'},
    {text:'记账本',image:'./images/icon1-5.jpg',width:'.37rem',height:'.43rem',left:'-.185rem'},
    {text:'股票',image:'./images/icon1-6.jpg',width:'.36rem',height:'.43rem',left:'-.18rem'},
    {text:'淘宝',image:'./images/icon1-7.jpg',width:'.42rem',height:'.43rem',left:'-.21rem'},
    {text:'生活缴费',image:'./images/icon1-8.jpg',width:'.41rem',height:'.43rem',left:'-.215rem'},
    {text:'亲密付',image:'./images/icon1-9.jpg',width:'.37rem',height:'.45rem',left:'-.185rem'},
    {text:'天猫',image:'./images/icon1-10.jpg',width:'.36rem',height:'.45rem',left:'-.18rem'},
    {text:'机票火车票',image:'./images/icon1-11.jpg',width:'.42rem',height:'.45rem',left:'-.21rem'},
    {text:'外卖',image:'./images/icon1-12.jpg',width:'.41rem',height:'.45rem',left:'-.215rem'},
    {text:'阿里旅行',image:'./images/icon1-13.jpg',width:'.37rem',height:'.42rem',left:'-.185rem'},
    {text:'淘票票',image:'./images/icon1-14.jpg',width:'.36rem',height:'.42rem',left:'-.18rem'},
    {text:'亲情账户',image:'./images/icon1-15.jpg',width:'.42rem',height:'.42rem',left:'-.21rem'},
    {text:'天猫超市',image:'./images/icon1-16.jpg',width:'.41rem',height:'.42rem',left:'-.215rem'},
    {text:'加油服务',image:'./images/icon1-17.jpg',width:'.37rem',height:'.44rem',left:'-.185rem'},
    {text:'收款',image:'./images/icon1-18.jpg',width:'.36rem',height:'.44rem',left:'-.18rem'},
    {text:'爱心捐赠',image:'./images/icon1-19.jpg',width:'.42rem',height:'.44rem',left:'-.21rem'},
    {text:'汇率换算',image:'./images/icon1-20.jpg',width:'.41rem',height:'.44rem',left:'-.205rem'},
    {text:'汇率换算',image:'./images/icon1-20.jpg',width:'.41rem',height:'.44rem',left:'-.205rem'},


  ]



}])

aa.controller('meCtrl',['$scope',function($scope){
  $scope.list1 = [
    {image:'images/m1.jpg',name:'余额',info:'0.00',width:'.44rem',height:'.36rem'},
    {image:'images/m2.jpg',name:'银行卡',info:'1',width:'.40rem',height:'.36rem'},
    {image:'images/m3.jpg',name:'余额宝',info:'+0.10',width:'.44rem',height:'.39rem'},
    {image:'images/m4.jpg',name:'定期理财',info:'招财宝等',width:'.40rem',height:'.39rem'},
  ]
  $scope.list2 = [
    {image:'images/m5.jpg',name:'芝麻信用',info:'因为信用，所以简单',width:'.44rem',height:'.43rem'},
    {image:'images/m6.jpg',name:'蚂蚁花呗',info:'可用2，200.00',width:'.40rem',height:'.43rem'},
  ]
  $scope.list3 = [
    {image:'images/m7.jpg',name:'我的保险',info:'有保障更安心',width:'.44rem',height:'.39rem'},
    {image:'images/m8.jpg',name:'基金',info:'买入费率1折起',width:'.40rem',height:'.39rem'},
    {image:'images/m9.jpg',name:'淘宝众筹',info:'认真对待每一个梦想',width:'.44rem',height:'.39rem'},
    {image:'images/m10.jpg',name:'股票',info:'查看行情',width:'.40rem',height:'.39rem'},
    {image:'images/m11.jpg',name:'娱乐宝',info:'万娱乐享特权圆梦想',width:'.44rem',height:'.42rem'},
    {image:'images/m12.jpg',name:'爱心捐赠',info:'爱在行动',width:'.40rem',height:'.42rem'},
  ]

}])

aa.controller('friendCtrl',['$scope',function($scope){
  $scope.life = [
    {image:'images/t-2.jpg',name:'吃饱的海带',info:"[转账]向你转账1000.00元",time:'16/6/2',chats:[
      {chat:'你了解angular.js吗？',is:false},
      {chat:'你了解angular.js吗？',is:true},
      {chat:'你了解angular.js吗？',is:false},
      {chat:'你了解angular.js吗？',is:true},
      {chat:'你了解angular.js吗？',is:false},
      {chat:'你了解angular.js吗？',is:true},
    ]},
    {image:'images/t-3.jpg',name:'琦琦',info:"在吗",time:'16/6/2'},
    {image:'images/t-4.jpg',name:'豆仔',info:"[转账]向你转账600.00元",time:'上午9：00'},
    {image:'images/t-5.jpg',name:'琦琦',info:"[转账]向你转账800.00元",time:'星期三'},
    {image:'images/t-6.jpg',name:'琦琦',info:"[转账]向你转账300.00元",time:'昨天'},

  ]
}])

aa.controller('koubeiCtrl',['$scope',function($scope){
  $scope.ban1 = [
    {name:'美食',image:'./images/k1.jpg',width:'.45rem',height:'.46rem',top:'-.23rem',left:'-.225rem'},
    {name:'火锅',image:'./images/k2.jpg',width:'.44rem',height:'.46rem',top:'-.23rem',left:'-.22rem'},
    {name:'快餐',image:'./images/k3.jpg',width:'.43rem',height:'.46rem',top:'-.23rem',left:'-.215rem'},
    {name:'面包甜点',image:'./images/k4.jpg',width:'.45rem',height:'.46rem',top:'-.23rem',left:'-.225rem'},
    {name:'外卖',image:'./images/k5.jpg',width:'.45rem',height:'.47rem',top:'-.235rem',left:'-.225rem'},
    {name:'超市',image:'./images/k6.jpg',width:'.44rem',height:'.47rem',top:'-.235rem',left:'-.22rem'},
    {name:'丽人',image:'./images/k7.jpg',width:'.43rem',height:'.47rem',top:'-.235rem',left:'-.215rem'},
    {name:'电影',image:'./images/k8.jpg',width:'.45rem',height:'.47rem',top:'-.235rem',left:'-.225rem'},
  ]
  $scope.ban2 = [
    {name:'生鲜水果',image:'./images/k21.jpg',width:'.45rem',height:'.46rem',top:'-.23rem',left:'-.225rem'},
    {name:'小吃',image:'./images/k22.jpg',width:'.44rem',height:'.46rem',top:'-.23rem',left:'-.22rem'},
    {name:'休闲食品',image:'./images/k23.jpg',width:'.43rem',height:'.46rem',top:'-.23rem',left:'-.215rem'},
    {name:'日韩料理',image:'./images/k24.jpg',width:'.45rem',height:'.46rem',top:'-.23rem',left:'-.225rem'},
    {name:'休闲娱乐',image:'./images/k25.jpg',width:'.45rem',height:'.47rem',top:'-.235rem',left:'-.225rem'},
    {name:'面食',image:'./images/k26.jpg',width:'.44rem',height:'.47rem',top:'-.235rem',left:'-.22rem'},
    {name:'酒店预订',image:'./images/k27.jpg',width:'.43rem',height:'.47rem',top:'-.235rem',left:'-.215rem'},
    {name:'周末游',image:'./images/k28.jpg',width:'.45rem',height:'.47rem',top:'-.235rem',left:'-.225rem'},
  ]
  $scope.banner = [
    {image:'./images/ban1.jpg',width:'5.97rem',height:'3.31rem'},
    {image:'./images/ban2.jpg',width:'5.97rem',height:'3.31rem'},

  ]
  $scope.shop = [
    {image:'./images/a1.jpg',name:'海底捞火锅',x:'./images/x1.jpg',xnum:'4.9',money:'人均49元',num:'7.6折',dist1:'川味/重庆',dist2:'1.9km',recom:'优惠商家推荐'},
    {image:'./images/a2.jpg',name:'如一坊',x:'./images/x2.jpg',xnum:'3.6',money:'人均43元',num:'8.3折',dist1:'平阳路',dist2:'7km',recom:'茂业天地知名商家'},
    {image:'./images/a1.jpg',name:'海底捞火锅',x:'./images/x1.jpg',xnum:'4.5',money:'人均23元',num:'9.4折',dist1:'川味/重庆',dist2:'3km',recom:'王府井'},
    {image:'./images/a1.jpg',name:'人民公社',x:'./images/x2.jpg',xnum:'3.8',money:'人均48元',num:'5.2折',dist1:'晋菜',dist2:'2km',recom:'服装城'},
    {image:'./images/a1.jpg',name:'汉拿山韩烤肉',x:'./images/x1.jpg',xnum:'4.1',money:'人均33元',num:'6.6折',dist1:'韩式烤肉',dist2:'0.9km',recom:'附近热门商家'},
    {image:'./images/a1.jpg',name:'韩国石锅拌饭',x:'./images/x2.jpg',xnum:'3.7',money:'人均29元',num:'8.9折',dist1:'韩国特色',dist2:'800m',recom:'最具特色小吃'},

  ]
  $(function(){
    var mySwiper = new Swiper('.bar .swiper-container',{
      pagination: '.swiper-pagination',
      // autoplay : 3000,
    })

  })

}])
aa.controller('chatCtrl',['$scope','$routeParams',function($scope,$routeParams){
  var id = $routeParams.id
  $scope.herimg = chat[id].image;
  $scope.chatlist = chat[id].chats;
}])

aa.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
    controller:'mainC',
    templateUrl:'views/homepage.html'
  }).when('/homepage',{
    controller:'homepageCtrl',
    templateUrl:'views/homepage.html',
  }).when('/me',{
    controller:'meCtrl',
    templateUrl:'views/me.html',
  }).when('/friend',{
    controller:'friendCtrl',
    templateUrl:'views/friend.html',
  }).when('/koubei',{
    controller:'koubeiCtrl',
    templateUrl:'views/koubei.html',
  }).when('/chat/:id',{
    controller:'chatCtrl',
    templateUrl:'views/chat.html',
  })
  .otherwise({
    redirectTo:'/'
  })
}])


aa.directive('uqTitle',function(){
  return {
    restrict:'EAC',
    templateUrl:'views/title.html',


  }
}).directive('uqFooter',function(){
  return {
    restrict:'EAC',
    templateUrl:'views/footer.html',
  }
})
