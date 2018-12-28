const app = Sammy('#container', function () {

    this.use('Handlebars','hbs');

    this.get('#/home', function () {
        this.swap('<h2>Home</h2>');        
    });
    this.get('#/about', function () {
        this.swap('<h2>About</h2>');
    });
    this.get('#/login', function () {
        this.partial('login.hbs');
    });
    this.get('#/hello/:name', function (ctx) {
        this.swap(`<h2>Hello, ${ctx.params.name}!</h2>`);
    });
    this.post('#/login',function(ctx){        
        console.log(`Your account is:${ctx.params.username}`)
        console.log(`Your super secret password is:${ctx.params.password}`)
    })
});

$(() => app.run());