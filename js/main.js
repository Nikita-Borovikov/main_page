$('.menu-btn').on('click',function(e) {
        e.preventDefault();
        $('.menu').toggleClass('menu_active menu-btn_active');
        $('.content').toggleClass('content_active');
    });


    window.onload = function(){
        window.setInterval(function(){
        var now = new Date();
        var clock = document.getElementById("clock");
        clock.innerHTML = now.toLocaleTimeString();
        },1000);
      };
     




