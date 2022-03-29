function makeAjaxRequest() {


    $.getJSON("counties.json", function (data) {
        const {counties} = data;
        let txt = "";
        counties && counties.forEach((county) => {
            txt += "<tr><td>" + county.name + "</td></tr>";
        });
        $('#countylist').html(txt);

    }).fail(function (error) {
        $('#updatemessage').text(`An error occurred: ${JSON.stringify(error)}`)
    })
}

$(document).ready(function () {
    makeAjaxRequest()
})
