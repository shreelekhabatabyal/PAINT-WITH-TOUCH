canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var last_x, last_y;
var mouseEvent = "empty";
color = "black";
line_Width = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    console.log("down button click");

    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    console.log("move button click");
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_Width;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();

    }
    last_x = current_x;
    last_y = current_y;


}