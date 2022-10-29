$(function(){
    $("#navigation").load("./nav.html", function() {
        const currentLink = window.location.pathname.replace("/portfolio", "")
        $('a[href*="'+currentLink+'"]').addClass("current");
        if(currentLink === "/projectinfo.html") {
            $('a[href*="/projects.html"]').addClass("current");
        }
        if(currentLink === "/") {
            $('a[href*="/"]').removeClass("current");
            $('a[href*="/index.html"]').addClass("current");
        }
    });

    AOS.init({
        offset: 50,
        delay: 50,
        duration: 500,
        once: true,
        easing: "ease-in-out"
    });
});

