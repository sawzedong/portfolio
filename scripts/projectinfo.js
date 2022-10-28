$(function() {
    let params = new URLSearchParams(window.location.search);
    const queriedID = params.get('id');
    $.getJSON('/projects/projects.json', function(jd) {
       const info = jd[queriedID];
       $("#projectimage").prop("src", `/projects/img/${info["imglink"]}`);
       $("#projectimage").prop("alt", `Depiction of ${info["name"]}`);
       $("#eventname").text(info["name"]);
       console.log(`/projects/desc/${info["desclink"]}`)
       $("#descplaceholder").load(`/projects/desc/${info["desclink"]}`)
    });
})