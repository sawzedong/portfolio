let animationCounter = 0
$("#lockimage").on("animationend", function() {
    animationCounter ++;
    if (animationCounter === 2) {
        $("#lockimage").addClass("dnone")
    }
})