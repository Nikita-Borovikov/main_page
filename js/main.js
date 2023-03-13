$('.menu-btn').on('click',function(e) {
        e.preventDefault();
        $('.menu').toggleClass('menu_active menu-btn_active');
        $('.content').toggleClass('content_active');
    });

let anchors = document.querySelectorAll('nav a[href="#"]');

for (let anchor of anchors) {
    if(anchor) {
        anchor.addEventListener('click', function(v){
            anchorId = this.getAttribute('href');
            console.log(anchorId);
        })
    }
}



     



