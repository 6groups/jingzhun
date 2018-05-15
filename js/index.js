//banner
let lonbotu=$(".banner_big");
let lonbodian=$(".lunbo_btn ul li");
let n=0;
$(lonbodian).click(function(){
    let index=$(lonbodian).index(this);
    $(lonbotu).css({"zIndex":-1}).eq(index).css({"zIndex":0});
    $(lonbodian).css({"background":"#fff"}).eq(index).css({"background":"#09A8E8"});
    n=index;
})
function move(){
    n++;
    if(n==5){
        n=0;
    }
    $(lonbotu).css({"zIndex":-1}).eq(n).css({"zIndex":0});
    $(lonbodian).css({"background":"#fff"}).eq(n).css({"background":"#09A8E8"});
}
let t=setInterval(move,2000);
$("#banner").mouseenter(function(){
    clearInterval(t);
})
$("#banner").mouseleave(function(){
    t=setInterval(move,2000);
})
//扶贫前线
$(".fupin_content li").mouseenter(function(){
    console.log($(this).find(".fupin_line"));
    $(this).css("border","0.5px solid #fff").find(".fupin_line").css("display","block");
})
$(".fupin_content li").mouseleave(function(){
    console.log($(this).find(".fupin_line"));
    $(this).css("border","0.5px solid #B5B5B5").find(".fupin_line").css("display","none");
})