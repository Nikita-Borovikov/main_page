$('.menu-btn').on('click',function(e) {
        e.preventDefault();
        $('.menu').toggleClass('menu_active menu-btn_active');
        $('.content').toggleClass('content_active');
    });

    // const anchors = document.querySelectorAll('a[href="#"]')

    // for (let anchor of anchors) {
    //     anchor.addEventListener("click", function(event) {
    //         event.preventDefault();
    //         const blockID = anchor.getAttribute('href')
    //         document.querySelector('' + blockID).scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start'
    //         })
    //     })
    // }



