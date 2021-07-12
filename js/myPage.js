$(function(){
    var k = $(window).height();//当前屏幕的高度
    var flag = false;
    $("#fullpage").fullpage({
        // 是否显示项目导航
        navigation: 'true',
        scrollingSpeed: 500,

        // 回调函数
        // anchorLink是锚链接的名称，index是序号，从1开始计算
        afterLoad : function(anchorLink,index) {
            if(index == 2) {
                $(".search").show().animate({"right":375},1500,function(){
                    $(".search-word").animate({"opacity":1},1000,function(){
                        $(".search").hide();
                        $(".search-02-1").show().animate({"height":30,"right":250,"bottom":452},1500);
                        $(".goods-02").show().animate({"height":225},1500,function(){
                            flag = true;
                        });
                        $(".words-02").animate({"opacity":1},1500);
                    });
                });
            }
        },
        // 刚开始滚动屏幕就触发的回调函数
        // index是离开的页面序号，nextIndex是滚动到的页面序号，direction是向上滚动还是向下滚动，参数up或down
        onLeave : function(index, nextIndex, direction) {
            if(index == 2 && nextIndex == 3 && flag == true){
                $(".shirt-02").show().animate({"bottom":-(k-250),"width":207,"left":260},1000,function(){
                    $(".img-01-a").animate({"opacity":1},2000);
                    $(".btn-01-a").animate({"opacity":1},2000);
                });
                $(".cover").show();
            }
            if(index == 3 && nextIndex == 4) {
               $(".shirt-02").hide();
               $(".t1f").show();
            }
        }
    });
})