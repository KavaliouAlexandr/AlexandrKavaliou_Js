const canvas = document.querySelector("#balls");
var ctx = canvas.getContext('2d');

canvas.width = '750'
canvas.height = '550'
const distance = canvas.width * 0.2

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

    for (let j = 0; j < balls.length; j++) {
      var ballsDistance = ((balls[i].x - balls[j].x)**2 + (balls[i].y - balls[j].y)**2)**(1/2)
      if(ballsDistance < distance && ballsDistance > 0) {
        ctx.beginPath()
        ctx.moveTo(balls[i].x, balls[i].y)
        ctx.lineTo(balls[j].x, balls[j].y)
        ctx.lineTo(balls[i].x, balls[i].y)
        ctx.closePath()
        ctx.stroke()
      }
      
    }

    if (balls[i].y + balls[i].sy > canvas.height || balls[i].y + balls[i].sy < 0) {
      balls[i].sy = -balls[i].sy;
    }
    if (balls[i].x + balls[i].sx > canvas.width || balls[i].x + balls[i].sx < 0) {
      balls[i].sx = -balls[i].sx;
    }
    if(i == 1){
      console.log(balls[i].x)
    }
    balls[i].x += balls[i].sx;
    balls[i].y += balls[i].sy;
  }
  requestAnimationFrame(function(){drawBalls(balls)});
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

var balls = new Array()
for(let i = 0; i < 50; i++)
{
  balls[i] = new Ball(
  getRandom(0, canvas.width), 
  getRandom(0, canvas.height), 
  getRandom(-1.5, 1.5), 
  getRandom(-1.5, 1.5))
}



requestAnimationFrame(function(){drawBalls(balls)});
