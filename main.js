
document.querySelector("html").addEventListener("click", start);
document.querySelector("html").addEventListener("keypress", end);

var startTime, endTime;
var div = document.querySelector(".print")

function start() {
    startTime = new Date();
}

function end() {
    endTime = new Date();
    var timeDiff = endTime - startTime;
    var li = document.createElement("li")
    var textNode = document.createTextNode(timeDiff);
    li.appendChild(textNode);

    div.appendChild(li);
}
