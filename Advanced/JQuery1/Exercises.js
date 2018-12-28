function subtract() {
    let num1 = Number(document.getElementById('firstNumber').value)
    let num2 = Number(document.getElementById('secondNumber').value)
    document.getElementById('result').textContent = num1 - num2
}

function addItem() {
    let text = document.querySelector('#newItemText');
    let value = document.querySelector('#newItemValue');
    let option = document.createElement('option');
    let dropDown=document.getElementById('menu')
    option.textContent = text.value;
    option.value = value.value;
    dropDown.appendChild(option);
    text.value = '';
    value.value = '';
}

function toggle(){
    let btn=document.querySelector('.button')
    let div=document.getElementById('extra')
    if(div.style.display==='block'){
        div.style.display='none';
        btn.textContent='More';
    }else{
        div.style.display='block';
        btn.textContent='Less';
    }
}


