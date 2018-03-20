const URL='https://console.firebase.google.com/project/phonebookdemo-55250/database/phonebookdemo-55250/data'
$('#btnLoad').on('click',loadData)

function loadData() {
    $.ajax({
        method:'GET',
        url:URL+'.json'
    }).then(handleSucces)
        .catch(handleError)

    function handleSucces(res) {
        console.log(res)
    }
}

function handleError(err) {
    console.log(err)
}