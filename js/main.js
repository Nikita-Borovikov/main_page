$('.menu-btn').on('click',function(e) {
        e.preventDefault();
        $('.menu').toggleClass('menu_active menu-btn_active');
        $('.content').toggleClass('content_active');
    });




