
    function calc() {
        let num1=document.getElementById('num1').value
        let num2=document.getElementById('num2').value
        let sum=Number(num1)+Number(num2)
        document.getElementById('sum').value=sum
    }

    function showText() {
        document.getElementById("text").style.display="inline"
        document.getElementById("more").style.display="none"
    }
    function extractText() {
        let items=document.querySelectorAll("#items li")
        for (let item of items) {
            document.getElementById("result").textContent+=item.textContent+'\n'
        }
    }