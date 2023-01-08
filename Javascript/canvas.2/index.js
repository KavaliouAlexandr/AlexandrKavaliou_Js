const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");

const balls = [];

const numBalls = Math.floor(Math.random() * 26) + 5;

const ballRadius = 8;

for (let i = 0; i < numBalls; i++) {
  const ball = {
    x: Math.random() * (canvas.width - 2 * ballRadius) + ballRadius,
    y: Math.random() * (canvas.height - 2 * ballRadius) + ballRadius,
    dx: Math.random() * 3 - 1.5,
    dy: Math.random() * 3 - 1.5,
    radius: ballRadius,
  };
  balls.push(ball);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // sprawdza dotknienia ballow
    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        const ball1 = balls[i];
        const ball2 = balls[j];
        const distance = Math.sqrt(Math.pow(ball1.x - ball2.x, 2) + Math.pow(ball1.y - ball2.y, 2));
        if (distance < ball1.radius + ball2.radius) {
          // usuwa ball i zmienia radius
          balls.splice(i, 1);
          ball2.radius += 1;
        }
      }
    }
  
    // rysuje ball
    balls.forEach(function(ball) {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();
    });
  
    
    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        const ball1 = balls[i];
        const ball2 = balls[j];
        const distance = Math.sqrt(Math.pow(ball1.x - ball2.x, 2) + Math.pow(ball1.y - ball2.y, 2));
        if (distance < canvas.width * 0.2) {
          ctx.beginPath();
          ctx.moveTo(ball1.x, ball1.y);
          ctx.lineTo(ball2.x, ball2.y);
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
  
    // pozycja
    balls.forEach(function(ball) {
      ball.x += ball.dx;
      ball.y += ball.dy;
  
      
      if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
      }
      if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
      }
    });
  
    
    requestAnimationFrame(draw);
}
  
draw(); 