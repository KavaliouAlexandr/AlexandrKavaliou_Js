const canvas = document.querySelector("#balls");
var ctx = canvas.getContext('2d');

var ball = {
  x: 100,
  y: 100,
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

ball.draw();