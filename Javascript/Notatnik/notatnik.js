const btnadd = document.querySelector('#add')

btnadd.addEventListener('click', () => {
    var n = localStorage.length / 4

    localStorage.setItem(`title${n}`, document.querySelector('#title').value);
    localStorage.setItem(`text${n}`, document.querySelector('#text').value);
    localStorage.setItem(`color${n}`, document.querySelector('#color').value);
    localStorage.setItem(`date${n}`, new Date().toISOString());
    console.log(localStorage)
    
    Show()
})




function Show(){
    for(let i=0; i<localStorage.length / 4; i++) {
        var container = document.createElement('div')
        container.classList.add('container1')

    
        
        //title
        var titleValue = localStorage.getItem(`title${i}`)    //js string
        var titleh3 = document.createElement('h3')              //html <h3>
        titleh3.innerHTML = titleValue                          //js string => html <h3>
        var titleP = document.createElement('p')              //html <p>
        titleP.append(titleh3)
        container.append(titleP)
        //text

        var textValue = localStorage.getItem(`text${i}`)
        var text = document.createElement('text')
        text.innerHTML = textValue
        var textP = document.createElement('p')
        textP.append(text)
        container.append(textP)
        //color
        container.style.backgroundColor = localStorage.getItem(`color${i}`)

        //date
        var dateValue = localStorage.getItem(`date${i}`)
        var date = document.createElement('date')
        date.innerHTML = dateValue
        var dateP = document.createElement('p')
        dateP.append(date)
        container.append(dateP)


        document.querySelector(`#listOfNotes`).append(container)
      }
}