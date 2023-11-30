document.querySelector("html").addEventListener("click", start);
document.querySelector("html").addEventListener("keypress", end);

var startTime, endTime;
var div = document.querySelector(".print")

function start() {
    startTime = new Date();
};

var counter = 0;
var counter2 = 0
var array = [];

function end() {

    if (counter > 0) {
        endTime = new Date();
        var timeDiff = endTime - startTime;
        var newtime = timeDiff - array[counter2];
        var li = document.createElement("li")
        var textNode = document.createTextNode(newtime);
        li.appendChild(textNode);

        div.appendChild(li);
        array.push(timeDiff);
        counter2++
    } else {
        endTime = new Date();
        var timeDiff = endTime - startTime;
        var li = document.createElement("li")
        var textNode = document.createTextNode(timeDiff);
        li.appendChild(textNode);

        div.appendChild(li);
        array.push(timeDiff);
        counter++;
    }
}
