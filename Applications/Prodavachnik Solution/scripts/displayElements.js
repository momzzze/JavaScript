function showView(viewName) {
    $('main > section').hide() // Hide all views
    $('#' + viewName).show() // Show the selected view only
}

function showHideLinks() {
    $('#linkHome').show()
    if(sessionStorage.getItem('authToken')==null){
        $("#linkLogin").show()
        $("#linkLogout").hide()
        $("#linkRegister").show()
        $("#linkListAds").hide()
        $("#linkCreateAd").hide()

    }else{
        $("#linkLogin").hide()
        $("#linkLogout").show()
        $("#linkRegister").hide()
        $("#linkListAds").show()
        $("#linkCreateAd").show()
    }

}

function handlerHome() {
    showView('viewHome')
}

function handlerLogin() {
    showView('viewLogin')
    $('#formLogin').trigger('reset')
}

function handlerRegister() {
    $('#formRegister').trigger('reset')
    showView('viewRegister')
}

function handlerCreateAd() {
    $('#formCreateBook').trigger('reset')
    showView('viewCreateAd')
}

function handlerListAds() {
    $('#formCreateBook').trigger('reset')
    showView('viewAds')
    loadAds()
}

function showEditView(ad) {

    let targetFrom=$('#formEditAd')
    targetFrom.find('input[name=id]').val(ad._id)
    targetFrom.find('input[name=publisher]').val(ad.publisher)
    targetFrom.find('input[name=title]').val(ad.title)
    targetFrom.find('textarea[name=description]').val(ad.description)
    targetFrom.find('input[name=datePublished]').val(ad.date)
    targetFrom.find('input[name=price]').val(ad.price)


    showView('viewEditAd')

    //$('#formEditAd').trigger('reset')
}
//Error displaying-----------------------------------------------
function showError(errorMsg) {
    let errorBox = $('#errorBox')
    errorBox.text("Error: " + errorMsg)
    errorBox.show()
}