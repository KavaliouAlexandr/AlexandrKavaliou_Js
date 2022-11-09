const btnadd = document.querySelector('#add')
const btnshow = document.querySelector('#show')
const btndelete = document.querySelector('#delete')

btnadd.addEventListener('click', () => {
    var n = 0
    while(localStorage.getItem(`title${n}`) != null) 
    {
        n++
    }

    localStorage.setItem(`title${n}`, document.querySelector('#title').value);
    localStorage.setItem(`text${n}`, document.querySelector('#text').value);
    localStorage.setItem(`color${n}`, document.querySelector('#color').value);
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
    
    
            var del = document.createElement('button')
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
    
    
    
            document.querySelector(`#listOfNotes`).append(container)
        }
      }
}