const canvas = document.querySelector("#balls");
var ctx = canvas.getContext('2d');
var raf;


var ball = {
  x: 200,
  y: 200,
  sx: 2,
  sy: 2,
  radius: 7,
  color: 'black',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius - 2, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();
  }
};

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.sx;
  ball.y += ball.sy;

  if (ball.y + ball.sy > canvas.height || ball.y + ball.sy < 0) {
    ball.sy = -ball.sy;
  }
  if (ball.x + ball.sx > canvas.width || ball.x + ball.sx < 0) {
    ball.sx = -ball.sx;
  }

  window.requestAnimationFrame(draw);
}



for(let i = 0; i < 10; i++)
{
}

window.requestAnimationFrame(draw);
