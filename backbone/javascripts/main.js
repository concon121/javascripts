Handlebars.partials = Handlebars.templates;

var registrationRouter = new RegistrationRouter({model: new RegistrationFormModel()});

Backbone.history.start({
    pushState: true,
    root: '/registration'
});
