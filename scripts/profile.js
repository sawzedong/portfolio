const totalStars = 4
$(function() {
    $(".rating").each(function(index, element) {
        let ratedStars = parseInt($(element).attr("data-rating"))
        for(var i = 0; i < ratedStars; i++) {
            $(element).append(`<span class="fa fa-star checked"></span>`)
        }
        for(var i = 0; i < totalStars - ratedStars; i++) {
            $(element).append(`<span class="fa fa-star"></span>`)
        }
    })
})