(function(){
Template.__checkName("updateAccountModal");
Template["updateAccountModal"] = new Template("Template.updateAccountModal", (function() {
  var view = this;
  return HTML.DIV({
    id: "updateaccount",
    "class": "modal fade",
    tabindex: "-1",
    "data-width": "760",
    style: "display:none;"
  }, "\n		", HTML.DIV({
    "class": "modal-dialog"
  }, "\n			", HTML.DIV({
    "class": "modal-content"
  }, "\n				", Spacebars.include(view.lookupTemplate("updateAccountModalInner")), "\n			"), "\n		"), "\n	");
}));

Template.__checkName("updateAccountModalInner");
Template["updateAccountModalInner"] = new Template("Template.updateAccountModalInner", (function() {
  var view = this;
  return Spacebars.With(function() {
    return Spacebars.call(view.lookup("userInScope"));
  }, function() {
    return [ "\n		", HTML.DIV({
      "class": "modal-header"
    }, "\n			", HTML.H4("Update ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("email"));
    })), "\n		"), "\n		", HTML.DIV({
      "class": "modal-body"
    }, "\n			", HTML.DIV({
      "class": "form-group"
    }, "\n				", HTML.DIV({
      "class": "input-group"
    }, "\n					", HTML.SPAN({
      "class": "input-group-addon"
    }, "Name"), "\n					", HTML.INPUT({
      "data-user-id": function() {
        return Spacebars.mustache(view.lookup("_id"));
      },
      "class": "form-control admin-user-info",
      name: "profile.name",
      value: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "name"));
      },
      placeholder: function() {
        return Spacebars.mustache(view.lookup("email"));
      }
    }), "\n				"), "\n			"), "\n			", Blaze.If(function() {
      return Spacebars.call(view.lookup("roles"));
    }, function() {
      return [ "\n				", HTML.UL({
        "class": "list-group"
      }, "\n					", Blaze.Each(function() {
        return Spacebars.call(view.lookup("roles"));
      }, function() {
        return [ "\n						", HTML.LI({
          "class": "list-group-item"
        }, "\n							", HTML.BUTTON({
          "data-user-id": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup(".."), "_id"));
          },
          "class": "btn btn-danger btn-xs remove-role",
          type: "button"
        }, "Remove"), "\n							", HTML.SPAN({
          "class": "pull-right"
        }, Blaze.View(function() {
          return Spacebars.mustache(view.lookup("."));
        })), "\n						"), "\n					" ];
      }), "\n				"), "\n			" ];
    }, function() {
      return "\n				This account has no roles.\n			";
    }), "\n			", Blaze.If(function() {
      return Spacebars.call(view.lookup("unsetRoles"));
    }, function() {
      return [ "\n			", HTML.DIV({
        "class": "btn-group clearfix full-width"
      }, "\n				", HTML.BUTTON({
        type: "button",
        "class": "btn btn-success dropdown-toggle pull-right",
        "data-toggle": "dropdown"
      }, "\n					", HTML.SPAN({
        "class": "glyphicon glyphicon-plus"
      }), " Add Role \n				"), "\n				", HTML.UL({
        "class": "dropdown-menu pull-right",
        role: "menu"
      }, "\n					", Blaze.Each(function() {
        return Spacebars.call(view.lookup("unsetRoles"));
      }, function() {
        return [ "\n						", HTML.LI(HTML.A({
          href: "#",
          "class": "add-role",
          "data-user-id": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup(".."), "_id"));
          }
        }, Blaze.View(function() {
          return Spacebars.mustache(view.lookup("."));
        }))), "\n					" ];
      }), "\n				"), "\n			"), "\n			" ];
    }, function() {
      return [ "\n			", HTML.EM("All roles already set."), "\n			" ];
    }), "\n		"), "\n		", HTML.DIV({
      "class": "modal-footer"
    }, "\n			", HTML.BUTTON({
      type: "button",
      "data-dismiss": "modal",
      "class": "btn btn-primary"
    }, "Done"), "\n		"), "\n	" ];
  });
}));

})();
