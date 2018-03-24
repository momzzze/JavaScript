function attachEvents() {
    const URL='https://messenger-af21d.firebaseio.com/messenger/.json';
    $('#refresh').on('click',refresh)
    $('#submit').on('click',submit)
    function submit() {
        let author=$('#author').val()
        let content=$('#content').val()
        let message=JSON.stringify({
            author,
            content,
            timeStamp:Date.now()
        })
        $.post(URL,message).then(refresh)
    }
    function refresh() {
        $('#messages').empty()
        $.get(URL).then(loadPosts)
    }
    function loadPosts(data) {
        let textarea=$('#messages');
        for (let key in data) {
            let message=data[key];
            let messageString=`${message.author}: ${message.content}\n`
            textarea.append(messageString)
        }
    }

}



function solve() {
    let currentStopId='depot'
    let currentStopName=''
    let URL='https://judgetests.firebaseio.com/schedule/'
    function depart() {
        let firebaseURL=URL+currentStopId+'.json'
        $.get(firebaseURL).then(updateInfo)
    }
    function updateInfo(data) {
        $('span.info').text('Next stop '+data.name)
        currentStopId=data.next
        currentStopName=data.name
        $('#depart').attr('disabled','disabled')
        $('#arrive').removeAttr('disabled')
    }
    function arrive() {
        $('#arrive').attr('disabled','disabled')
        $('#depart').removeAttr('disabled')
        $('span.info').text('Arriving '+currentStopName)

    }

    return {
        depart,
        arrive
    };
}
let result = solve();