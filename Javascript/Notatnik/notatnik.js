const btnadd = document.querySelector('#add')
const btnshow = document.querySelector('#show')

btnadd.addEventListener('click', () => {
    var n = 0
    while(localStorage.getItem(`title${n}`) != null) 
    {
        n++
    }

    localStorage.setItem(`title${n}`, document.querySelector('#title').value);
    localStorage.setItem(`text${n}`, document.querySelector('#text').value);
    localStorage.setItem(`color${n}`, document.querySelector('#color').value);
    localStorage.setItem(`pin${n}`, document.querySelector('#pin').checked);
    localStorage.setItem(`date${n}`, new Date().toISOString());
    console.log(localStorage)
    
    Show()
})

btnshow.addEventListener('click', () => {
    document.querySelector(`#listOfNotes`).innerHTML = ``

    Show()
})


function Show(){
    document.querySelector(`#listOfNotes`).innerHTML = ``

    for(let i=0; i<localStorage.length * 10; i++) {
        if(localStorage.getItem(`title${i}`) != null){
            if(localStorage.getItem(`pin${i}`) === 'true')
            {
                createNote(i)
            }
        }
      }
    for(let i=0; i<localStorage.length * 10; i++) {
        if(localStorage.getItem(`title${i}`) != null){
            if(localStorage.getItem(`pin${i}`) === 'false')
            {
                createNote(i)
            }
        }
      }

}

function createNote(i) {
    var container = document.createElement('div')
    container.classList.add('container1')
    //pin
    var pinChecked = localStorage.getItem(`pin${i}`)
    var pin = document.createElement("input");
    pin.setAttribute("type", "checkbox");
    pin.disabled = true
    if (pinChecked === 'true')
    {
        pin.checked = true
    }
    var pinP = document.createElement('p')
    console.log(pinChecked)
    pinP.append(pin)
    container.append(pinP)
    
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

    
    var del = document.createElement('button')
    del.classList.add('btndel')
    del.innerHTML = 'delete'
    var delP = document.createElement('p')
    del.addEventListener('click', () => {

        localStorage.removeItem(`title${i}`);
        localStorage.removeItem(`text${i}`);
        localStorage.removeItem(`color${i}`);
        localStorage.removeItem(`date${i}`);
    
        Show()
    
    })
    delP.append(del)
    container.append(delP)

    var edit = document.createElement('button')
    edit.classList.add('btndel')
    edit.innerHTML = 'Edit'
    var editP = document.createElement('p')
    edit.addEventListener('click', function(){ btnEdit(i) })
    editP.append(edit)
    container.append(editP)
    document.querySelector(`#listOfNotes`).append(container)
}

function createEditNote(i) {
    var container = document.createElement('div')
    container.classList.add('container1')
    //pin
    var pin = document.createElement('input')
    var pinP = document.createElement('p')
    pin.id = 'NewPin'
    pin.type = 'checkbox'
    pin.style.float = 'right'
    if(localStorage.getItem(`pin${i}`) === 'true'){
        pin.checked = true
    }
    pinP.append(pin)


    var titleValue = localStorage.getItem(`title${i}`) 
    var titleP = document.createElement('p')    //js string
    var title = document.createElement('input')
    title.id = 'NewTitle' 
    title.value = titleValue                          //js string => html <h3>
    titleP.append(title)
    container.append(titleP)
    //text

    var textValue = localStorage.getItem(`text${i}`)
    var text = document.createElement('textarea')
    text.id = 'NewText'
    text.innerHTML = textValue
    var textP = document.createElement('p')
    textP.append(text)
    container.append(textP)
    //color
    var colorValue = localStorage.getItem(`color${i}`)
    var color = document.createElement('input')
    color.id = 'NewColor'
    color.type = 'color'
    color.value = colorValue
    var colorP = document.createElement('p')
    colorP.append('color')
    container.append('colorP')

    var buttons = document.createElement('p')
    var btnAccept = document.createElement('button')
    btnAccept.innerHTML = 'Accept'
    buttons.classList.add('btndel')
    btnAccept.addEventListener('click', function(){ Edit(i) } )
    btnAccept.append(buttons)

    var btnCancel = document.createElement('button')
    btnCancel.innerHTML = 'Cancel'
    btnAccept.classList.add('btndel')
    btnAccept.addEventListener('click', Show )
    btnCancel.append(buttons)

    container.append(buttons)
    document.querySelector(`#listOfNotes`).append(container)
}   

function Edit(i) {
    var newTitle = document.querySelector('#NewTitle').value
    var newText = document.querySelector('#NewText').value
    var newColor = document.querySelector('#NewColor').value
    var newPin = document.querySelector('#NewPin').checked

    localStorage.removeItem(`title${i}`);
    localStorage.removeItem(`text${i}`);
    localStorage.removeItem(`color${i}`);
    localStorage.removeItem(`date${i}`);

    localStorage.setItem(`title${i}`, newTitle)
    localStorage.setItem(`text${i}`, newText)
    localStorage.setItem(`color${i}`, newColor)
    localStorage.setItem(`pin${i}`, newPin)

    Show()
}

function btnEdit(n) {
    document.querySelector(`#listOfNotes`).innerHTML = ``

        for(let i=0; i<localStorage.length * 10; i++) {
            if(localStorage.getItem(`title${i}`) != null){
                if(localStorage.getItem(`pin${i}`) === 'true')
                {
                    if ( n === i){
                        createEditNote(i)
                    }
                    else 
                    {
                        createNote(i)
                    }
                }
            }
        }
        for(let i=0; i<localStorage.length * 10; i++) {
            if(localStorage.getItem(`title${i}`) != null){
                if(localStorage.getItem(`pin${i}`) === 'false')
                {
                    if ( n === i){
                        createEditNote(i)
                    }
                    else 
                    {
                        createNote(i)
                    }
                }
            }
        }
}

