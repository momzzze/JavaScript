$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');
        this.get('/index.html', displayHome;
        this.get('#/home', displayHome;

        function displayHome(ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') != null;
            ctx.username = sessionStorage.getItem('username');
            ctx.hasTeam = ctx.sessionStorage.getItem('teamId') !== 'undefined' || sessionStorage.getItem('teamId') !== null;

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/home/home.hbs');
            })
        }
    });

    app.run();
});