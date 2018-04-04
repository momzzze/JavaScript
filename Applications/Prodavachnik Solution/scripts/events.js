function attachEvents() {
    $('#linkHome').on('click', handlerHome)
    $('#linkLogin').on('click', handlerLogin)
    $('#linkRegister').on('click', handlerRegister)
    $('#linkListAds').on('click', handlerListAds)
    $('#linkCreateAd').on('click', handlerCreateAd)
    $('#linkLogout').on('click', logoutUser)
    $("#buttonLoginUser").on('click',loginUser);
    $('#buttonRegisterUser').on('click',registerUser)
    $('#buttonCreateAd').on('click',createAd)
    $('#buttonEditAd').on('click',editAd)
    $("form").on('submit', function(event) { event.preventDefault() })

}