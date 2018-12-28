const user = function () {
    const getLogin = function (ctx) {
        ctx.partial('./views/user/login.hbs');
    };

    const postLogin = function (ctx) {
        let username = ctx.params.username;
        let password = ctx.params.password;

        userModel.login(username, password).done(function (data) {
            storage.saveUser(data);
            $('#login').addClass('d-none');
            $('#register').addClass('d-none');
            $('#logout').removeClass('d-none');
            ctx.redirect('#/');
        });
    };
    const logout = function (ctx) {
        userModel.logout().done(function () {
            storage.deleteUser();
            $('#logout').addClass('d-none');
            $('#register').removeClass('d-none');
            $('#login').removeClass('d-none');

            ctx.redirect('#/');
        });
    };

    const getRegister = function (ctx) {
        ctx.partial('./views/user/register.hbs')
    };

    const postRegister = function (ctx) {
        userModel.register(ctx.params).done(function(data){
            storage.saveUser(data)
            $('#logout').removeClass('d-none');
            $('#login').addClass('d-none');
            $('#register').addClass('d-none');

            ctx.redirect('#/');
        });
    };



    return {
        getLogin,
        postLogin,
        logout,
        getRegister,
        postRegister
    };
}();