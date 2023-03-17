

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

var canvas = document.getElementById("canvas");

const circleSize = 10;

//get the width ofcanvas
var width = canvas.width;
//get the height of canvas
var height = canvas.height;

var ctx = canvas.getContext("2d");

//get the mouse position always
var mouse = {
    x: undefined,
    y: undefined
}

//clearcanvas function

function clearCanvas() {
    ctx.clearRect(0, 0, width, height);
    window.scrollTo(0, 0);
}

//return mouse position in canvas when hovering canvas
canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x - ctx.canvas.offsetLeft;
    mouse.y = event.y - ctx.canvas.offsetTop;

    //draw a circle at mouse position
    ctx.beginPath();
    ctx.arc(canvas.width - mouse.x, canvas.height - mouse.y, circleSize, 0, Math.PI * 2, false);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, circleSize, 0, Math.PI * 2, false);
    ctx.fillStyle = "#000";
    ctx.fill();
    ctx.closePath();

    console.log(canvas.height - mouse.y);
    console.log(canvas.width - mouse.x);
    drawBufferToScreen();
});


