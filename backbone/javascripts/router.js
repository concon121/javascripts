var RegistrationRouter = Backbone.Router.extend({

  initialize: function(opts) {
    this.model = opts.model;
  },
  boardDom: $("#registrationForm"),
  routes: {
    '': 'registrationForm',
    'submit': 'registrationComplete'
  },
  registrationForm: function() {
    var view = new RegistrationView({model: this.model});
    this.boardDom.empty().prepend(view.render().el);
  },
  registrationComplete: function() {
    var view = new RegistrationCompleteView({model: this.model});
    this.boardDom.empty().prepend(view.render().el);
  }
});
