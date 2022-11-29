const ball = document.querySelector("#ball");
const gamearea = document.querySelector("#gamearea");

var defaultAlpha
var defaultBeta
var defaultGamma
var animFrame
var PosY = 150
var PosX = 296
// var HallX = 296
// var HallY = 550 
// var HallWidth = 50

function onDeviceMove(event) {

    if(defaultAlpha === undefined)
    {
        defaultAlpha = event.alpha
        defaultBeta = event.beta
        defaultGamma = event.gamma
    }

    var moveY = (event.beta - defaultBeta) / 19
    var moveX = (event.gamma - defaultGamma) / 22

    if(PosY > 450 && PosX < 550 && PosY < 346 && PosX < 246)
    {
        alert("You Win");
        document.location.reload();
        clearInterval(interval);
    }

    if(animFrame !== undefined){
        cancelAnimationFrame(animFrame)
    }

    animate(moveY, moveX)
}

function animate(moveY, moveX) {

    
    PosY = PosY + moveY
    ball.style.top = PosY + 'px'

    PosX = PosX + moveX
    ball.style.left = PosX + 'px'

    if(PosY < 0 - 25)
    {
        ball.style.top = -25 + 'px'
        // alert("GAME OVER");
        // document.location.reload();
        // clearInterval(interval);
    }

    if(PosY > 700 - 45)
    {
        ball.style.top = 655 + 'px'
        // alert("GAME OVER");
        // document.location.reload();
        // clearInterval(interval);
    }

    if(PosX < 0 - 60)
    {
        ball.style.left = -50 + 'px'
        // alert("GAME OVER");
        // document.location.reload();
        // clearInterval(interval);
    }

    if(PosX > 630)
    {
        ball.style.left = 630 + 'px'
        // alert("GAME OVER");
        // document.location.reload();
        // clearInterval(interval);
    }

    if(PosX > 250 && PosX < 346 && PosY > 525 && PosY < 600)
    {
        alert("You Win");
        document.location.reload();
        clearInterval(interval);
    }


    console.log(Date.now())
    //repeat animetion func
    animFrame = requestAnimationFrame(function(){animate(moveY, moveX)})
}

window.addEventListener('deviceorientation', onDeviceMove, true)

