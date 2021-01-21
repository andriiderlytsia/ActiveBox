$(function (){
   // -----------------------------Fixed header--------------
   let header = $('#header');
   let intro = $('#intro');
   let introH = intro.innerHeight();
   let scrollPos = $(window).scrollTop();

   $(window).on('scroll load resize', function (){
       scrollPos = $(this).scrollTop();
       console.log(scrollPos);
       if(scrollPos> introH){
           header.addClass('fixed');
       } else
       {
           header.removeClass('fixed');
       }


   })

    // -----------------------------Smooth scroll--------------
    $("[data-scroll]").on('click', function (event){
        event.preventDefault();

        let blockId = $(this).data('scroll');
        let blockOffSet = $(blockId).offset().top;
        console.log(blockOffSet);
        // console.log(typeof blockId);
        nav.removeClass("show");

        $('html, body').animate({
            scrollTop: blockOffSet -100
        },700)
    });

    // -----------------------------ButtonToggle--------------
    let buttonToggle = $("#buttonToggle");
    let nav = $("#nav");
    buttonToggle.on("click", function (event){
        event.preventDefault();
        nav.toggleClass("show");
    })


});





























