(function(){
Template.__checkName("infoAccountModal");
Template["infoAccountModal"] = new Template("Template.infoAccountModal", (function() {
  var view = this;
  return HTML.DIV({
    id: "infoaccount",
    "class": "modal fade",
    tabindex: "-1",
    "data-width": "760",
    style: "display:none;"
  }, "\n		", HTML.DIV({
    "class": "modal-dialog"
  }, "\n			", HTML.DIV({
    "class": "modal-content"
  }, "\n				", Spacebars.include(view.lookupTemplate("infoAccountModalInner")), "\n			"), "\n		"), "\n	");
}));

Template.__checkName("infoAccountModalInner");
Template["infoAccountModalInner"] = new Template("Template.infoAccountModalInner", (function() {
  var view = this;
  return [ HTML.Raw('<div class="modal-header">\n		<h4>Account Info</h4>\n	</div>\n	'), Spacebars.With(function() {
    return Spacebars.call(view.lookup("userInScope"));
  }, function() {
    return [ "\n	 	", HTML.DIV({
      "class": "modal-body"
    }, "\n			", HTML.UL({
      "class": "list-group"
    }, "\n				", HTML.LI({
      "class": "list-group-item"
    }, HTML.STRONG("Name"), "\n					", HTML.SPAN({
      "class": "pull-right"
    }, "\n						", Blaze.If(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("profile"), "name"));
    }, function() {
      return [ "\n							", Blaze.View(function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "name"));
      }), "\n						" ];
    }, function() {
      return [ "\n							", Blaze.View(function() {
        return Spacebars.mustache(view.lookup("email"));
      }), "\n						" ];
    }), "\n					"), "\n				"), "\n				", HTML.LI({
      "class": "list-group-item"
    }, HTML.STRONG("Email"), HTML.SPAN({
      "class": "pull-right"
    }, Blaze.View(function() {
      return Spacebars.mustache(view.lookup("email"));
    }))), "\n				", HTML.LI({
      "class": "list-group-item"
    }, HTML.STRONG("ID"), HTML.SPAN({
      "class": "pull-right"
    }, Blaze.View(function() {
      return Spacebars.mustache(view.lookup("_id"));
    }))), "\n				", Blaze.Each(function() {
      return Spacebars.call(view.lookup("rolePairs"));
    }, function() {
      return [ "\n					", HTML.LI({
        "class": "list-group-item"
      }, HTML.STRONG(Blaze.View(function() {
        return Spacebars.mustache(view.lookup("key"));
      })), HTML.SPAN({
        "class": "pull-right"
      }, Blaze.View(function() {
        return Spacebars.mustache(view.lookup("value"));
      }))), "\n				" ];
    }), "\n			"), "\n	 	"), "\n	 	", HTML.DIV({
      "class": "modal-footer"
    }, "\n			", HTML.BUTTON({
      type: "button",
      "data-dismiss": "modal",
      "class": "btn btn-primary"
    }, "OK"), "\n		"), "\n	" ];
  }) ];
}));

})();
