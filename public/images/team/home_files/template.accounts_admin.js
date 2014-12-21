(function(){
Template.__checkName("accountsAdmin");
Template["accountsAdmin"] = new Template("Template.accountsAdmin", (function() {
  var view = this;
  return [ HTML.DIV({
    "class": "row accounts-search"
  }, "\n        ", HTML.DIV({
    "class": "col-sm-offset-4 col-sm-8 col-md-offset-6 col-md-6 col-lg-offset-8 col-lg-4"
  }, "\n            ", HTML.DIV({
    "class": "input-group"
  }, "\n                ", HTML.INPUT({
    type: "text",
    "class": "form-control search-input-filter",
    value: function() {
      return Spacebars.mustache(view.lookup("searchFilter"));
    }
  }), "\n                ", HTML.Raw('<span class="input-group-btn">\n                    <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>                   \n                    <!--<button class="btn btn-default" type="button" data-toggle="modal" href="#updateroles">Manage Roles</button>-->\n                    <button class="btn btn-default" type="button" data-toggle="modal" href="#adduser">Add User</button>\n                </span>'), "\n            "), "\n        "), "\n    "), "\n    ", HTML.TABLE({
    "class": "table table-striped"
  }, "\n        ", HTML.THEAD("\n            ", HTML.TR("\n                ", HTML.TH(), "\n                ", HTML.TH("Name"), "\n                ", HTML.TH("Email"), "\n                ", HTML.TH("Roles"), "\n                ", HTML.TH("Company"), "\n            "), "\n        "), "\n        ", HTML.TBODY("\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("users"));
  }, function() {
    return [ "\n                ", HTML.TR({
      "class": function() {
        return Blaze.If(function() {
          return Spacebars.dataMustache(view.lookup("myself"), view.lookup("_id"));
        }, function() {
          return "info";
        });
      }
    }, "\n                    ", HTML.TD("\n                        ", Blaze.Unless(function() {
      return Spacebars.dataMustache(view.lookup("myself"), view.lookup("_id"));
    }, function() {
      return [ "\n                            ", HTML.SPAN({
        "data-toggle": "modal",
        href: "#deleteaccount",
        "class": "glyphicon glyphicon-trash clickable"
      }), "\n                            ", HTML.SPAN({
        "data-toggle": "modal",
        href: "#updateaccount",
        "class": "glyphicon glyphicon-pencil clickable"
      }), "\n                            ", HTML.SPAN({
        "data-toggle": "modal",
        href: "#infoaccount",
        "class": "glyphicon glyphicon-info-sign clickable"
      }), "\n                        " ];
    }), "\n                    "), "\n                    ", HTML.TD("\n                        ", Blaze.If(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("profile"), "name"));
    }, function() {
      return [ "\n                            ", Blaze.View(function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "name"));
      }), "\n                        " ];
    }, function() {
      return [ "\n                            ", Blaze.View(function() {
        return Spacebars.mustache(view.lookup("email"));
      }), "\n                        " ];
    }), "\n                    "), "\n                    ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("email"));
    })), "\n                    ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("roles"));
    })), "\n                    ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "company"));
    })), "\n                "), "\n            " ];
  }), "\n        "), "\n    "), HTML.Raw('\n    <button class="btn btn-default" type="button" data-toggle="modal" href="#modifyPorters">Modify</button>\n    <br>\n    ASMs: \n    '), Spacebars.With(function() {
    return Spacebars.call(view.lookup("company"));
  }, function() {
    return [ "   \n    ", Blaze.Each(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("company"), "asm"));
    }, function() {
      return [ "\n    ", Blaze.View(function() {
        return Spacebars.mustache(view.lookup("."));
      }), " \n    " ];
    }), "\n    " ];
  }), HTML.Raw("\n    <br>\n    Porters: \n    "), Spacebars.With(function() {
    return Spacebars.call(view.lookup("company"));
  }, function() {
    return [ "   \n    ", Blaze.Each(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("company"), "porters"));
    }, function() {
      return [ "\n    ", Blaze.View(function() {
        return Spacebars.mustache(view.lookup("."));
      }), " \n    " ];
    }), "\n    " ];
  }), HTML.Raw("\n    <br>\n    Drivers:\n    "), Spacebars.With(function() {
    return Spacebars.call(view.lookup("company"));
  }, function() {
    return [ "   \n    ", Blaze.Each(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("company"), "drivers"));
    }, function() {
      return [ "\n    ", Blaze.View(function() {
        return Spacebars.mustache(view.lookup("."));
      }), " \n    " ];
    }), "\n    " ];
  }), "\n    \n    ", Spacebars.include(view.lookupTemplate("modifyPorterModal")), "\n    ", Spacebars.include(view.lookupTemplate("addUserModal")), "\n    ", Spacebars.include(view.lookupTemplate("updateRolesModal")), "\n    ", Spacebars.include(view.lookupTemplate("deleteAccountModal")), "\n    ", Spacebars.include(view.lookupTemplate("infoAccountModal")), "\n    ", Spacebars.include(view.lookupTemplate("updateAccountModal")) ];
}));

})();
