const appKey='kid_rJCNTD1oz'
const appSecret='1a1c593cf5604d2cb509085965c7c17f'
const baseUrl='https://baas.kinvey.com/'
const AUTHHEADERS = {'Authorization': "Basic " + btoa(appKey + ":" + appSecret)}



function loginUser(ev) {
    let loginForm=$('#formLogin')
    let username=loginForm.find('input[name=username]').val()
    let password=loginForm.find('input[name=passwd]').val()
    let loginData={
        username,
        password
    }

    $.ajax({
        method:'POST',
        url: baseUrl + 'user/' + appKey + '/login',
        data: loginData,
        headers: AUTHHEADERS,
    }).then(function (res) {
        signInUser(res, 'Login successful.')
    }).catch(handleAjaxError)
}

function editAd(ad) {
    let id = $('#formEditAd input[name=id]').val()
    let title = $('#formEditAd input[name=title]').val()
    let description = $('#formEditAd textarea[name=description]').val()
    let publisher=sessionStorage.username
    let price = $('#formEditAd input[name=price]').val()
    let date = $('#formEditAd input[name=datePublished]').val()

    $.ajax({
        method: 'PUT',
        url: baseUrl + 'appdata/' + appKey + '/ads/' + id,
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')},
        data: {title, date, description,price,publisher}
    }).then(function (res) {
        handlerListAds()
        showView('viewAds')
        showInfo('Book edited.')
    }).catch(handleAjaxError)


}
function deleteAd(ad) {
    let id=ad._id

    $.ajax({
        method: 'DELETE',
        url: baseUrl + 'appdata/' + appKey + '/ads/' + id,
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
    }).then(function () {
        handlerListAds()
        showInfo('Book deleted.')
    }).catch(handleAjaxError)
}

function loadAds()
{

    $.ajax({
        method:'GET',
        url:baseUrl + 'appdata/' + appKey + '/ads',
        headers:{'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
    }).then(function (res) {

            let table=$('#ads > table')
             table.empty()

        for (let obj of res) {
            let rowTemplate=$('<tr>')
                .append($(`<td>${obj.title}</td>`))
                .append($(`<td>${obj.publisher}</td>`))
                .append($(`<td>${obj.description}</td>`))
                .append($(`<td>${obj.price}</td>`))
                .append($(`<td>${obj.date}</td>`))
            let actionTd=$('<td>')

            if (obj.publisher === sessionStorage.getItem('username')) {

            actionTd.append($(`<td>`)
                .append($(`<a href="#">[Delete]</a>`).on('click',()=>{deleteAd(obj)}))
                .append($(`<a href="#">[Edit]</a>`).on('click',()=>{showEditView(obj)})))
            }
            rowTemplate.append(actionTd)
            table.append(rowTemplate)

            }
    }
    )
    .catch(handleAjaxError)
}


function createAd() {
    let title = $('#formCreateAd input[name=title]').val()
    let description = $('#formCreateAd textarea[name=description]').val()
    let date = $('#formCreateAd input[name=datePublished]').val()
    let price = $('#formCreateAd input[name=price]').val()
    let publisher=sessionStorage.getItem('username')

    $.ajax({
        method: 'POST',
        url: baseUrl + 'appdata/' + appKey + '/ads',
        data: {price,date,publisher, description,title},
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
    }).then(function (res) {
        $('#formCreateAd').trigger('reset')
        showView('viewAds')
        loadAds()
        showInfo('Ad created.')
    })
}

function logoutUser() {
    sessionStorage.clear()
    handlerHome()
    showHideLinks()
    showInfo('Logout successful.')
}

function showInfo(message) {
    let infoBox = $('#infoBox')
    infoBox.text(message)
    infoBox.show()
    setTimeout(function() {
        $('#infoBox').fadeOut()
    }, 3000)
}

function registerUser(ev) {
    let username = $('#formRegister input[name=username]').val()
    let password = $('#formRegister input[name=passwd]').val()
    $.ajax({
        method: 'POST',
        url: baseUrl + 'user/' + appKey + '/',
        headers: AUTHHEADERS,
        data: {username, password}
    }).then(function (res) {
        signInUser(res, 'Registration successful.')
    }).catch(handleAjaxError)

}

function signInUser(res, message) {
    sessionStorage.setItem('username', res.username)
    sessionStorage.setItem('authToken', res._kmd.authtoken)
    sessionStorage.setItem('userId', res._id)
    $('#formLogin').trigger('reset')
    handlerHome()
    showHideLinks()
    showInfo(message)
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response)
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error."
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description
    showError(errorMsg)
}



