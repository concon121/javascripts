var RegistrationView = Backbone.View.extend({
  template: Handlebars.templates.registrationForm,
  initialize: function(opts) {
    this.model = opts.model;
  },
  events: {
    "change #gender input:radio" : "updateRadio",
    "click #submitRegistration" : "submitForm"
  },
  render: function() {
    this.el.innerHTML = this.template(this.model.toJSON());
    this.setUp();
    return this;
  },
  setUp: function() {
    this.validator = this.setupValidation();
  },
  setupValidation: function() {

    var validator = this.$("#regForm").validate({
        rules: {
            forename: "required",
            surname: "required",
            email: "required",
            phone: "required"
        },
        messages: {
            forename: "Enter your firstname",
            surname: "Enter your lastname",
            email: "Enter your email",
            phone: "Enter your phone"
        }
    });

    return validator;

  },
  submitForm: function(e) {
    e.preventDefault();
    var form = $("#regForm");
    if ($(form).valid()) {
      this.model.set("forename", $("#forename").val());
      this.model.set("surname", $("#surname").val());
      this.model.set("email", $("#email").val());
      this.model.set("phone", $("#phone").val());
      this.model.set("gender", $("input:radio[name='gender']:checked").attr("id"));
      Backbone.history.navigate("submit", true);
    }
  }
});
