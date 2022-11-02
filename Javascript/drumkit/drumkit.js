// document.addEventListener('keypress', onKeyPress)

// function onKeyPress(event) {
//     const key = event.key
//     // ktory dzwiek w zaleznosci od klawisza
//     const sound = 'clap'
//     playSound(sound)
// }


// function playSound(sound) {
//     const audioTag = document.querySelector('#' + sound)
//     audioTag.currentTime = 0 
//     audioTag.play()
// }

document.addEventListener('keypress', onKeyPress)

const KeyToSound = {
    'a': document.querySelector('#s1'),
    's': document.querySelector('#s2'),
    'd': document.querySelector('#s3'),
    'f': document.querySelector('#s4'),
    'g': document.querySelector('#s5'),
    'h': document.querySelector('#s6'),
}

function onKeyPress(event) {
    if(event.key === 'r')
    {
        Record()
    }
    else if(event.key === 'p') {
        Play()
    }
    else{
        
        const sound = KeyToSound[event.key]
        playSound(sound)
    }
    
}
function playSound(sound) {
    if (!sound){
        return
    }
    
    sound.currentTime = 0
    sound.play()
}

var channel = new Map()
var popka = 1
var Recording = false

function Record() {
    Recording = true
    popka++
    document.querySelector('#Record').classList.add('recordup')
    // btnRecord1.classList.add('btn-record')
    if (popka === 2){
        channel.clear()
    }
    if (popka % 2 === 1){
        popka = 1
        document.querySelector('#Record').classList.remove('recordup')
        Recording = false
        return
    }
    document.addEventListener('keypress', addToChannel)
}


function addToChannel(event) {
    if (popka % 2 === 1)
    {
        popka = 1
        return
    }
    if(event.key === 'r' && key-code === 82){
        return
    }
    const sound = KeyToSound[event.key]
    playSound(sound)

    if (sound !== undefined){
    channel.set(Date.now(), sound)
    console.log(channel)
    }

}

function Play(){
    document.querySelector('#Playing').classList.add('playing')

    if(Recording === true)
    {
        return
    }
    console.log('start')
    var i = 0
    var keys = Array.from(channel.keys())
    var time = keys[1] - keys[0]

    timeoutFunc(time, i)
    
    function timeoutFunc(time, i){
        setTimeout(
            () => {
                if (i === channel.size){
                    document.querySelector('#Playing').classList.remove('playing')
                    return
                }

                playSound(channel.get(keys[i]))
                
                if (i > 0){
                    time = keys[i + 1] - keys[i]
                }

                if (i < channel.size){
                    i++
                    timeoutFunc(time, i)


                }
            },
            time
        )
    }

}