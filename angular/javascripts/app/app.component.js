(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'registration-app',
      template: '<h1>Example Angular 2 Application</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
