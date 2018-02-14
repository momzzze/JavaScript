
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
    
    function colorize() {
        let arr=document.getElementsByTagName('table')[0].children[0].children;
        for (let i = 1; i < arr.length; i+=2) {
            arr[i].style.backgroundColor='Teal';
        }
    }
    
    function countdown(sec) {
        let minutes=Math.floor(sec/60)
        let seconds=sec%60
        let time=minutes+':'+(seconds<10?'0'+seconds:seconds)
        document.getElementById('time').value=time
       setInterval(()=>{
           sec--
            minutes=Math.floor(sec/60)
            seconds=sec%60
            time=minutes+':'+(seconds<10?'0'+seconds:seconds)
           document.getElementById('time').value=time
       },1000)
    }