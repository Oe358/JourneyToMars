var width = window.innerWidth || document.body.clientWidth;

var html = document.getElementsByTagName("html")[0];

html.style.fontSize = width / 100 + "px";

var onWindowResize = function () {
    width = window.innerWidth || document.body.clientWidth;
    html.style.fontSize = width / 100 + "px";
};

console.log(width);

window.addEventListener("resize", onWindowResize);