let licznik = 0 
const main = document.querySelector('main')
const slides = document.querySelector('.slides')

const intervalRef = setInterval( 
    () => {
        licznik += 443
        if(licznik > 1329){
            licznik = 0
        }

        slides.style.left = -licznik + 'px'
        
        main.innerHTML='From interval ' + licznik / 443
    },
    5000
)


document.querySelector('.next').addEventListener('click', () => {
    licznik = licznik + 443;
    if (licznik > 1329)
    {
        licznik = 0;
    }

    slides.style.left = -licznik + 'px';
})

document.querySelector('.prev').addEventListener('click', () => {
    licznik = licznik - 443;
    if (licznik < 0)
    {
        licznik = 1329;
    }

    slides.style.left = -licznik + 'px';
})



// const timeoutRef = setTimeout( 
//     () => {
//         main.innerHTML='From setTimeout'
//     },
//     2000
// )



// // kasujemy setTimeout
// clearTimeout(intervalRef)


// window.requestAnimationFrame