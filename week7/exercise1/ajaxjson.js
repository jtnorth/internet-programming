function makeAjaxRequest() {
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = newActiveXObject("Microsoft.XMLHTTP");
    }
    if (xhr) {
        xhr.open("GET", "counties.json", true);
        xhr.send();
        xhr.onreadystatechange = showContents;
    } else {
        document.getElementById("updatemessage").innerHTML = "Could not perform stated Request";
    }
}

function showContents() {
    if (xhr.readyState === 4) {
        let txt = "";
        if (xhr.status === 200) {
            let {counties} = JSON.parse(xhr.responseText);
            counties && counties.forEach((county) => {
                txt += "<tr><td>" + county.name + "</td></tr>";
            })
        }


        document.getElementById("countylist").innerHTML = txt;

        //clear error message in case of success state after error
        document.getElementById("updatemessage").innerHTML = "";
    } else {
        document.getElementById("updatemessage").innerHTML = "An error occurred: " + xhr.status;
        //clear table in case of error state after success
        document.getElementById("countylist").innerHTML = "";

    }
}

window.onload = makeAjaxRequest;
