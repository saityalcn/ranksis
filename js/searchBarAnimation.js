function searchBarActive() {
    document.getElementById("searchbarareaid").style["display"] = "block";
    var elem = document.getElementById("searchbarareaid");
    var pos = -80;
    var id = setInterval(frame, 5);

    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.marginTop = pos + "px";
        }
    }

}

function searchBarPassive() {
    var elem = document.getElementById("searchbarareaid");
    var pos = 0;
    var id = setInterval(frame, 5);

    function frame() {
        if (pos == -80) {
            clearInterval(id);
        } else {
            pos--;
            elem.style.marginTop = pos + "px";
        }
    }
}