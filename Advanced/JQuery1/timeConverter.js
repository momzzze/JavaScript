function attachEventsListeners(){
    document.getElementById('daysBtn').addEventListener("click",convertDays)
    
    document.getElementById('hoursBtn').addEventListener("click",convertHours)
    
    document.getElementById('minutesBtn').addEventListener("click",convertMinutes)

    document.getElementById('secondsBtn').addEventListener("click",convertSeconds)


    function convertDays(){
        let value=Number(document.getElementById('days').value)
        document.getElementById('hours').value=value*24;
        document.getElementById('minutes').value=value*24*60;        
        document.getElementById('seconds').value=value*24*60*60;
    }
    function convertHours(){
        let value=Number(document.getElementById('hours').value)
        document.getElementById('days').value=value/24;
        document.getElementById('minutes').value=value*60;        
        document.getElementById('seconds').value=value*60*60;
    }
    function convertMinutes(){
        let value=Number(document.getElementById('minutes').value)
        document.getElementById('hours').value=value/60;
        document.getElementById('days').value=value/24/60;        
        document.getElementById('seconds').value=value*60;
    }
    function convertSeconds(){
        let value=Number(document.getElementById('seconds').value)
        document.getElementById('hours').value=value/60/60;
        document.getElementById('minutes').value=value/60;        
        document.getElementById('days').value=value/24/60/60;
    }
}