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
    'h': document.querySelector('#s6')
}

function onKeyPress(event) {
    const sound = KeyToSound[event.key]
    playSound(sound)
}
function playSound(sound) {
    sound.currentTime = 0
    sound.play()
}
