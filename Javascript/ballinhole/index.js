const ball = document.querySelector("#ball");
const gamearea = document.querySelector("#gamearea");

var defaultAlpha
var defaultBeta
var defaultGamma
var animFrame
var PosY = 150
var PosX = 300

function onDeviceMove(event) {

    if(defaultAlpha === undefined)
    {
        defaultAlpha = event.alpha
        defaultBeta = event.beta
        defaultGamma = event.gamma
    }

    
    // if(ball.style.top < 150 + 'px')
    // {
    //     moveY = 0
    //     ball.style.top = 0 + 'px'
    // }
    var moveY = (event.beta - defaultBeta) / 19
    var moveX = (event.gamma - defaultGamma) / 22

    

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
    }

    if(PosY > 700 - 45)
    {
        ball.style.top = 655 + 'px'
    }

    if(PosX < 0 - 60)
    {
        ball.style.left = -50 + 'px'
    }

    if(PosX > 630)
    {
        ball.style.left = 630 + 'px'
    }


    console.log(Date.now())
    //repeat animetion func
    animFrame = requestAnimationFrame(function(){animate(moveY, moveX)})
}

window.addEventListener('deviceorientation', onDeviceMove, true)

