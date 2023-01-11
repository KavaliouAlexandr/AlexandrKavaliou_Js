const liczba1 = document.querySelector('#liczba1')
const liczba2 = document.querySelector('#liczba2')
const liczba3 = document.querySelector('#liczba3')
const liczba4 = document.querySelector('#liczba4')
const btnPrzelicz = document.querySelector('#przelicz')
const wynikPojemnik = document.querySelector('#wyniki')

btnPrzelicz.addEventListener('click', () => {
    var array = [liczba1.value, liczba2.value, liczba3.value, liczba4.value]

    const suma = array.reduce((a, b) => parseInt(a) + parseInt(b), 0)
    

    wynikPojemnik.innerHTML = "suma = " + suma + " srednia = " + suma / 4 + 
    " Min = " + Math.min.apply(Math, array) + " Max = " + Math.max.apply(Math, array)

    console.dir("suma = " + suma + " srednia = " + suma / 4)
})
