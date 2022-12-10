const canvas = document.querySelector("#balls");
var ctx = canvas.getContext('2d');

function draw(){
  ctx.beginPath();
  ctx.arc(350,350,5,0,Math.PI*2,true); // Внешняя окружность
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();
}

draw()