(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['registrationComplete'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h3>Thanks for registering!</h3>\r\n<p>Here are the details you entered...</p>\r\n<br />\r\n<p>Forename: "
    + alias4(((helper = (helper = helpers.forename || (depth0 != null ? depth0.forename : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"forename","hash":{},"data":data}) : helper)))
    + "</p>\r\n<p>Surname: "
    + alias4(((helper = (helper = helpers.surname || (depth0 != null ? depth0.surname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"surname","hash":{},"data":data}) : helper)))
    + "</p>\r\n<p>E-Mail: "
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</p>\r\n<p>Phone: "
    + alias4(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper)))
    + "</p>\r\n<p>Gender: "
    + alias4(((helper = (helper = helpers.gender || (depth0 != null ? depth0.gender : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gender","hash":{},"data":data}) : helper)))
    + "</p>\r\n";
},"useData":true});
templates['registrationForm'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <form id=\"regForm\" action=\"#\">\r\n    <fieldset>\r\n\r\n      <legend>Register for our service</legend>\r\n\r\n      <div class=\"formRow\">\r\n\r\n"
    + ((stack1 = container.invokePartial(partials["partials/input"],depth0,{"name":"partials/input","hash":{"required":true,"content":"Forename...","id":"forename"},"data":data,"indent":"          ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["partials/input"],depth0,{"name":"partials/input","hash":{"required":true,"content":"Surname...","id":"surname"},"data":data,"indent":"          ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n      </div>\r\n\r\n      <div class=\"formRow\">\r\n\r\n"
    + ((stack1 = container.invokePartial(partials["partials/input"],depth0,{"name":"partials/input","hash":{"required":true,"content":"E-Mail...","id":"email"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["partials/input"],depth0,{"name":"partials/input","hash":{"required":true,"content":"Phone...","id":"phone"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n      </div>\r\n\r\n      <div class=\"formRow\">\r\n\r\n        <div id=\"gender\" class=\"formItem\">\r\n\r\n"
    + ((stack1 = container.invokePartial(partials["partials/radio"],depth0,{"name":"partials/radio","hash":{"required":true,"checked":true,"content":"Male","group":"gender","id":"male"},"data":data,"indent":"          ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["partials/radio"],depth0,{"name":"partials/radio","hash":{"required":true,"checked":false,"content":"Female","group":"gender","id":"female"},"data":data,"indent":"          ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"formRow\">\r\n\r\n"
    + ((stack1 = container.invokePartial(partials["partials/button"],depth0,{"name":"partials/button","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </fieldset>\r\n  </form>\r\n";
},"usePartial":true,"useData":true});
templates['partials/button'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"formItem\">\r\n\r\n  <button id=\"submitRegistration\" class=\"button\">Submit</button>\r\n\r\n</div>\r\n";
},"useData":true});
templates['partials/input'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "required";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"formItem\">\r\n  <div class=\"\">\r\n    <label class=\"\" for=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <input class=\"\" type=\"text\" id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>\r\n  </div>\r\n  <br />\r\n</div>\r\n";
},"useData":true});
templates['partials/radio'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<label class=\"\" for=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n  <input type=\"radio\" id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.group || (depth0 != null ? depth0.group : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"group","hash":{},"data":data}) : helper)))
    + "\"/>\r\n  <div class=\"radio-button__display\">\r\n    <span class=\"radio-button__outer\">\r\n      <span class=\"radio-button__inner\"></span>\r\n    </span>\r\n    <span class=\"radio-pods__item__text\">\r\n      "
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper)))
    + "\r\n    </span>\r\n  </div>\r\n</label>\r\n";
},"useData":true});
})();
