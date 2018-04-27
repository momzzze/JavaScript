const handlers = {};
$(() => {
    const app = Sammy('#main',function () {
        this.use('Handlebars', 'hbs');

        this.get('#/index.html', handlers.homeHandler);

        this.get('#/register', (ctx) => {
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                navigation: './templates/common/navigation.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/forms/registerForm.hbs')
            });
        });
    })


    app.run();
});