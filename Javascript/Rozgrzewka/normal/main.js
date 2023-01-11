const liczba1 = document.querySelector('#liczba1')
const liczba2 = document.querySelector('#liczba2')
const liczba3 = document.querySelector('#liczba3')
const btnPrzelicz = document.querySelector('#przelicz')
const wynikPojemnik = document.querySelector('#wyniki')
const btnDodaj = documant.querySelector('#dodaj')
const btnRemove = document.querySelector('#remove')

btnDodaj.addEventListener('click', () => {
    var array = [liczba1.value, liczba2.value, liczba3.value]

    const liczbaClone = liczba1.cloneNode(true)
    mainContainer.insertBefore(liczba1, array[0])



})

btnRemove.addEventListener('click', () => {

    mainContainer.removeChild(btnRemove) // .replaceChild()


})

btnPrzelicz.addEventListener('click', () => {
    var array = [liczba1.value, liczba2.value, liczba3.value]

    const suma = array.reduce((a, b) => parseInt(a) + parseInt(b), 0)
    

    wynikPojemnik.innerHTML = "suma = " + suma + " srednia = " + suma / 4 + 
    " Min = " + Math.min.apply(Math, array) + " Max = " + Math.max.apply(Math, array)

    console.dir("suma = " + suma + " srednia = " + suma / 4)
})
