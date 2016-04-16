var RegistrationCompleteView = Backbone.View.extend({
  template: Handlebars.templates.registrationComplete,
  initialize: function(opts) {
    this.model = opts.model;
  },
  render: function() {
    this.el.innerHTML = this.template(this.model.toJSON());
    return this;
  }
});
