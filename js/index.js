
    $(function(){
        var  c=0;
        // alert()
   var  timer=  setInterval(function(){
       
          c++;
          if(c==3){
            c=0;
        }
          
          $('#slider img').eq(c).stop().fadeIn(1000).siblings('img').stop().fadeOut(1000);
          $("#slider ul li").eq(c).css({"background":'white'}).siblings('li').css({'background':'orange'});
          
          
      },3000);
    
    })

       
   
