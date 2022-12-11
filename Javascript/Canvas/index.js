const canvas = document.querySelector("#balls");
var ctx = canvas.getContext('2d');


class Ball {
  x
  y
  sx
  sy
  radius = 7
  color = 'black'

  constructor (x, y, sx, sy) {
    this.x = x
    this.y = y
    this.sx = sx
    this.sy = sy
  }

  draw() {
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


// var ball = new Ball(200, 200, 2, 2)

function drawBalls(balls) {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  for (let i = 0; i < balls.length; i++){
    balls[i].draw();
    balls[i].x += balls[i].sx;
    balls[i].y += balls[i].sy;
    if (balls[i].y + balls[i].sy > canvas.height || balls[i].y + balls[i].sy < 0) {
      balls[i].sy = -balls[i].sy;
    }
    if (balls[i].x + balls[i].sx > canvas.width || balls[i].x + balls[i].sx < 0) {
      balls[i].sx = -balls[i].sx;
    }
  }
  window.requestAnimationFrame(function(){drawBalls(balls)});
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

var balls = new Array()
for(let i = 0; i < 10; i++)
{
  balls[i] = new Ball(`${i}`, 
  getRandom(0, canv.width), 
  getRandom(0, canv.height), 
  getRandom(-1.5, 1.5), 
  getRandom(-1.5, 1.5))
}



window.requestAnimationFrame(function(){drawBalls(balls)});
