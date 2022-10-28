$(function(){
    $("#navigation").load("../nav.html", function() {
        $('a[href*="'+window.location.pathname+'"]').addClass("current");
        if(window.location.pathname === "/projectinfo.html") {
            $('a[href*="/projects.html"]').addClass("current");
        }
        if(window.location.pathname === "/") {
            $('a[href*="/"]').removeClass("current");
            $('a[href*="/index.html"]').addClass("current");
        }
    });

    AOS.init({
        offset: 150,
        duration: 500,
        once: true,
        easing: "ease-in-out"
    });
});

