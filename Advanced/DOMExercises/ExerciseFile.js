function subtract() {
    let num1=Number(document.getElementById('firstNumber').value);
    let num2=Number(document.getElementById('secondNumber').value);
    let sum=num1-num2
    document.getElementById('result').textContent=sum
}

function addItem() {
    let text=document.querySelector('#newItemText');
    let value=document.querySelector('#newItemValue');
    let dropDown=document.getElementById('menu');
    let option=document.createElement('option');
    option.value=value.value;
    option.text=text.value;
    dropDown.appendChild(option);
    text.value='';
    value.value='';
}

function toggle() {
    let eventBtn=document.querySelector('.button');
    let div=document.getElementById('extra');
    if(div.style.display==='block'){
        div.style.display='none';
        eventBtn.textContent='More';
    }else{
        div.style.display='block';
        eventBtn.textContent='Less';
    }
}

function create(sentences) {
    for (let word of sentences) {
        let div=document.createElement('div');
        let paragraph=document.createElement('p');
        paragraph.textContent=word;
        paragraph.style.display='null';
        div.appendChild(paragraph);
        div.addEventListener('click',function () {
           paragraph.style.display='block';
        })

        let contentDiv=document.getElementById('content');
        contentDiv.appendChild(div);
    }
}