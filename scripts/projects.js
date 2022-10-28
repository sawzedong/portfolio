$(function() {
    $.getJSON('/projects/projects.json', function(jd) {
        for(var i = 0; i < jd.length; i++) {
            let contents = $('#template').html();
            let copy = $(`<a class="project-card" id=card${i} href="/projectinfo.html?id=${i}"></a>`);
            $('#project-holder').append(copy.append(contents));
            $(`#card${i} .title`).text(jd[i]["name"]);
            $(`#card${i} .project-card-img`).prop("src", `/projects/img/${jd[i]["imglink"]}`);
            $(`#card${i} .project-card-img`).prop("alt", `Depiction of ${jd[i]["name"]}`);
            $(`#card${i} .desc`).text(jd[i]["overview"]);
        }
    });
})