/**
 * Created by 晨轩 on 2020/4/26.
 */


//声明对象
//var cx = {};
//cx.test=function(){
//    alert("我是test：外部引用");
//}

//使用工厂模式
//function getCx(){
//    var cx={};
//    cx.test = function(){
//        alert("工厂");
//    }
//    return cx;
//
//}

//匿名
//(function(){
//    var cx={};
//    test = function(){
//        alert("工厂");
//    }
//    alert("匿名自调用")
//return test();
//})()


(function(obj){
    //var cx={};
    obj.test = function(){
        alert("工厂");
    }
    alert("闭包")

})(window)






