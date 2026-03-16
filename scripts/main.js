let navOpen = false;

$(function () {
    const currentLink = window.location.pathname.replace("/portfolio", "");
    $("#navigation").load("./nav.html", function () {
        $('a[href*="' + currentLink + '"]').addClass("current");
        if (currentLink === "/projectinfo.html") {
            $('a[href*="/projects.html"]').addClass("current");
        }
        if (currentLink === "/") {
            $('a[href*="/"]').removeClass("current");
            $('a[href*="/index.html"]').addClass("current");
        }
    });

    $(window).resize(function () {
        if (window.innerWidth > 450 && navOpen) {
            navOpen = false;
            $("#nav-expanded").addClass("hide");
            updateNavBar();
        }
    });

    if (currentLink !== "/index.html") {
        AOS.init({
            offset: 50,
            delay: 50,
            duration: 500,
            once: true,
            easing: "ease-in-out",
        });
    }
});

$(document).on("click", "#navbtn", function () {
    navOpen = !navOpen;
    if (navOpen) {
        $("#nav-expanded").removeClass("hide");
    } else {
        $("#nav-expanded").addClass("hide");
    }
    updateNavBar();
});

$(window).scroll(updateNavBar);

function updateNavBar() {
    topVal = window.pageYOffset || document.documentElement.scrollTop;
    scalingFactor =
        topVal / window.innerHeight / 0.2 > 1
            ? 1
            : topVal / window.innerHeight / 0.2;
    if (!navOpen) {
        $("nav").css({
            height: `${5 - scalingFactor}em`,
            "padding-bottom": `${1 - scalingFactor}em`,
            background: `linear-gradient(rgba(66, 43, 40, 1), rgba(66, 43, 40, ${scalingFactor}))`,
        });
    } else {
        $("nav").css({
            height: `4em`,
            "padding-bottom": `0em`,
            background: `rgba(66, 43, 40, 1)`,
        });
    }
}
