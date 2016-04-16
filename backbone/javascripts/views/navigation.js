var Navigation = Backbone.View.extend({
    template: Handlebars.templates.navigation,
    render: function() {
      this.el.innerHTML = this.template();
      console.log(this.el);
      return this;
    },
    events: {
      "click .nav-item": "handleClick"
    },
    handleClick: function(e) {
      e.preventDefault();
      var route = $(e.target).attr("data-route");
      console.log(route);
      Backbone.history.navigate(route, true);
    }
});
