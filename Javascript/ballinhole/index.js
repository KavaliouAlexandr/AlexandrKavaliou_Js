const ball = document.querySelector("#ball");
const gamearea = document.querySelector("#gamearea");

var defaultAlpha
var defaultBeta
var defaultGamma
var animFrame
var PosY = 90
var PosX = 90

function onDeviceMove(event) {

    if(defaultAlpha === undefined)
    {
        defaultAlpha = event.alpha
        defaultBeta = event.beta
        defaultGamma = event.gamma
    }


    var moveY = (event.beta - defaultBeta) / 19
    var moveX = (event.gamma - defaultGamma) / 19

    
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

    // var a = 2
    // var b = 4


    // var c = a + b


    // a = a + b
    // c = a

    
    console.log(Date.now())
    //repeat animetion func
    animFrame = requestAnimationFrame(function(){animate(moveY, moveX)})
}

window.addEventListener('deviceorientation', onDeviceMove, true)

