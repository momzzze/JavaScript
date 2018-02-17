function addItem() {
    let input=document.getElementById('newItemText')
    let liItem=document.createElement('li')
    if(input.value!==''){

        liItem.textContent=input.value
        document.getElementById('items').appendChild(liItem)
        input.value=''
    }

}

function addItem() {
   let input=document.getElementById('newText')
    let li=document.createElement('li')
    li.innerHTML=input.value+' <a href="#">[Delete]</a>'
    document.getElementById('items').appendChild(li)
    li.children[0].addEventListener('click',(event)=> {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode)
    })
    input.value=''
}

function deleteByEmail() {
    let input=document.getElementsByTagName('tr')
    let targetValue=document.getElementsByName('email')[0].value.trim()
    for (var i = 1; i < input.length; i++) {
       if(targetValue===input[i].children[1].textContent){
           input[i].parentNode.removeChild(input[i])
           document.getElementById('result').textContent='Deleted.'
           return
       }
    }
    document.getElementById('result').textContent='Not found.'
}


function attachGradientEvents() {
    let gradient=document.getElementById('gradient-box')
    gradient.addEventListener('mousemove',function (event) {
     let result=Math.floor((event.offsetX/(event.target.clientWidth-1))*100)
        document.getElementById('result').textContent=result+'%'
    })

    gradient.addEventListener('mouseleave',function (event) {
        document.getElementById('result').textContent=''})

}


function focus() {
    let arr=document.getElementsByTagName('input')
    for (let input of arr) {
        input.addEventListener('focus',function () {
            input.parentNode.className='focused'
        })
        input.addEventListener('blur',function () {
            input.parentNode.className=''
        })
    }
}

function validate() {
    let regex=/^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/
    let input=document.getElementById('email')
    input.addEventListener('change',function () {
        let value=input.value
        if(regex.test(value)){
            input.removeAttribute('class')
        }else {
            input.className='error'
        }
    })
}