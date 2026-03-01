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

$(window).scroll(updateNavBar);

function updateNavBar() {
    topVal = window.pageYOffset || document.documentElement.scrollTop;
    scalingFactor =
        topVal / window.innerHeight / 0.2 > 1
            ? 1
            : topVal / window.innerHeight / 0.2;
    $("nav").css({
        height: `${5 - scalingFactor}em`,
        "padding-bottom": `${1 - scalingFactor}em`,
        background: `linear-gradient(rgba(66, 43, 40, 1), rgba(66, 43, 40, ${scalingFactor})`,
    });
}
