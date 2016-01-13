/**
 * Created by sist on 2016-01-13.
 */
$(document).ready(function(){
   /*
    div에 마우스 커서를 올렸을 때
    변경되기까지의 속도를 0.8초로 설정함.
    이후 easeOutBounce의 가속도 효과 추가함.
     */
    $("div").on("mouseenter",function(){
        $("div").animate({"width":"500px",
                            "height":"500px"},800,"easeOutBounce");
    });

    //div에 마우스 커서가 벗어날때
    $("div").on("mouseleave",function(){
        $("div").animate({"width":"300px",
            "height":"300px"},800,"easeOutBounce");
    });

    /*
     .stop()구문으로 모션의 중첩 끊어주기.
     */
});











