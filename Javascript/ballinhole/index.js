const ball = document.getElementById("#ball");
const gamearea = document.getElementById("#gamearea");

// const maxX = gamearea.clientWidth - ball.clientWidth;
// const maxY = gamearea.clientHeight - ball.clientHeight;

function onDeviceMove(event) {
  let x = event.beta; // In degree in the range [-180,180)
  let y = event.gamma; // In degree in the range [-90,90)

  if (x > 90) {
    x = 90;
  }
  if (x < -90) {
    x = -90;
  }

  // To make computation easier we shift the range of
  // x and y to [0,180]
  x += 90;
  y += 90;

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  ball.style.top = `${(maxY * y) / 180 - 10}px`;
  ball.style.left = `${(maxX * x) / 180 - 10}px`;
}

window.addEventListener('deviceorientation', onDeviceMove, true)
// window.addEventListener("devicemotion", onDeviceMove, true);


function animate() {
    //    console.log(Date.now())
    // requestAnimationFrame(animate)
}

requestAnimationFrame(animate)