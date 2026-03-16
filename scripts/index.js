switchedTransitionMode = false;
movementDisabled = false;

$(function () {
    if (sessionStorage.getItem("loadingAnimationComplete") !== null) {
        startPage();
        return;
    }
    $("#c").on("animationend", function () {
        if (!movementDisabled) {
            changeCaption();
            convertToAbsolutePosition();
            $(document).mousemove(moveToMousePos);
            $(document).mouseenter(moveToMousePos);
            $(document).click(startGrowth);
        }

        if (movementDisabled) {
            sessionStorage.setItem("loadingAnimationComplete", true);
            startPage();
        }
    });
});

function startPage() {
    $(".dnone").removeClass("dnone");
    $("body").addClass("spacing");
    $(".container").addClass("dnone");

    $("#navigation").load("./nav.html", function () {
        const currentLink = window.location.pathname.replace("/portfolio", "");
        $('a[href*="' + currentLink + '"]').addClass("current");
        if (currentLink === "/projectinfo.html") {
            $('a[href*="/projects.html"]').addClass("current");
        }
        if (currentLink === "/") {
            $('a[href*="/"]').removeClass("current");
            $('a[href*="/index.html"]').addClass("current");
        }
    });
    $("#uppercontainer").scrollLeft(0);
    $("#uppercontainer").on("scroll", updateButtons);
    $(".scroll-button").click(scrollTimeline);
    loadFeaturedProjects();
    AOS.init({
        offset: 100,
        delay: 50,
        duration: 500,
        once: true,
        easing: "ease-in-out",
    });
}

function changeCaption() {
    $("#caption").css({
        opacity: "0",
    });
    setTimeout(() => {
        $("#caption").text("Click anywhere to begin.");
        $("#caption").css({
            opacity: "100",
        });
    }, 400);
}

function convertToAbsolutePosition() {
    ay = $("#a").position()["top"];
    ax = $("#a").position()["left"];

    by = $("#b").position()["top"];
    bx = $("#b").position()["left"];

    cy = $("#c").position()["top"];
    cx = $("#c").position()["left"];

    $(".circle").addClass("absolute");
    $("#a").css({
        top: `${ay}px`,
        left: `${ax}px`,
    });
    $("#b").css({
        top: `${by}px`,
        left: `${bx}px`,
    });
    $("#c").css({
        top: `${cy}px`,
        left: `${cx}px`,
    });

    $(".circle").addClass("transition-slow");
}

function moveToMousePos(e) {
    if (movementDisabled) {
        return;
    }

    x = e.clientX;
    y = e.clientY;

    $("#a").css({
        top: `${y - 15}px`,
        left: `${x - 30}px`,
    });
    $("#b").css({
        top: `${y - 15}px`,
        left: `${x - 30}px`,
    });
    $("#c").css({
        top: `${y - 15}px`,
        left: `${x - 30}px`,
    });

    if (!switchedTransitionMode) {
        setTimeout(() => {
            $(".circle").addClass("transition-fast");
            $(".circle").removeClass("transition-slow");
            switchedTransitionMode = true;
        }, 300);
    }
}

function startGrowth(e) {
    moveToMousePos(e);
    movementDisabled = true;
    $(".circle").addClass("grow");
}

function updateButtons() {
    let newPos = $("#uppercontainer").scrollLeft();

    if (
        newPos + $("#uppercontainer").width() ===
        $("#profilecontainer").width()
    ) {
        $("#btnRight").prop("disabled", true);
    } else {
        $("#btnRight").prop("disabled", false);
    }

    if (newPos === 0) {
        $("#btnLeft").prop("disabled", true);
    } else {
        $("#btnLeft").prop("disabled", false);
    }
}

function scrollTimeline(e) {
    let currPos = $("#uppercontainer").scrollLeft();
    let widthOfElement = $("#edulabel").width();

    if (e.target.id === "btnLeft") {
        $("#uppercontainer").scrollLeft(currPos - widthOfElement);
    } else {
        $("#uppercontainer").scrollLeft(currPos + widthOfElement);
    }
}

function loadFeaturedProjects() {
    $.getJSON("./projects/projects.json", function (jd) {
        for (var i = jd.length - 1; i >= 0; i--) {
            if (jd[i]["featured"]) {
                let contents = $("#featuredproject").html();
                let copy = $(
                    `<a id=card${i} class="featproj" href="./projectinfo.html?id=${i}"></a>`,
                );

                $("#project-holder").append(copy.append(contents));

                $(`#card${i} .title`).text(`${jd[i]["name"]} ↗`);
                $(`#card${i} .desc`).text(jd[i]["overview"]);
                $(`#card${i} .date`).text(jd[i]["year"]);

                $(`#card${i} .projectimgcont`).css(
                    "background-image",
                    `url("./projects/${jd[i]["id"]}/cover.jpg")`,
                );
            }
        }
    });
}
