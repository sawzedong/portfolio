$(function () {
    let params = new URLSearchParams(window.location.search);
    const queriedID = params.get("id");
    $.getJSON("./projects/projects.json", function (jd) {
        const info = jd[queriedID];
        $("#projectimage").prop("src", `./projects/${info["id"]}/cover.jpg`);
        $("#projectimage").prop("alt", `Depiction of ${info["name"]}`);
        $("#eventname").text(info["name"]);
        $("#eventdate").text(info["date"]);
        $("#eventoverview").text(info["overview"]);
        console.log(`/projects/desc/${info["desclink"]}`);
        $("#descplaceholder").load(`./projects/${info["id"]}/writeup.html`);
    });
});
