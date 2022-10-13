// const main = document.querySelector('main')
// const timeoutRef = setTimeout( 
//     () => {
//         main.innerHTML='From setTimeout'
//     },
//     2000
// )
// let licznik = 0 
// const intervalRef = setInterval( 
//     () => {
//         main.innerHTML='From interval' + licznik++
//     },
//     4000
// )

// // kasujemy setInterval
// clearInterval(intervalRef)

// // kasujemy setTimeout
// clearTimeout(intervalRef)

const main = document.querySelector('main')

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.slider').forEach((el) => {
         new ISlider('.slider', {
        
        loop: false,
        swipe: false
        });
    })

    
    
})

this._elsItem.forEach((el, index) => {
    el.dataset.index = index;
    el.dataset.order = index;
    el.dataset.translate = 0;
  });

this._intervalID = setInterval(() => {
    this._direction = 'next';
    this._move();
}, this._config.interval)