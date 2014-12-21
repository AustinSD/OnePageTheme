//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Accounts = Package['accounts-base'].Accounts;
var Template = Package.templating.Template;
var check = Package.check.check;
var Match = Package.check.Match;
var Spacebars = Package.spacebars.Spacebars;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Iron = Package['iron:core'].Iron;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare;

(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/template.admin_login.js                                                            //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("_houston_login");                                                                             // 2
Template["_houston_login"] = new Template("Template._houston_login", (function() {                                  // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "container houston-form"                                                                               // 6
  }, "\n    ", Blaze.If(function() {                                                                                // 7
    return Spacebars.call(view.lookup("logged_in"));                                                                // 8
  }, function() {                                                                                                   // 9
    return [ "\n      ", Blaze.If(function() {                                                                      // 10
      return Spacebars.call(view.lookup("currentUserIsAdmin"));                                                     // 11
    }, function() {                                                                                                 // 12
      return [ "\n        ", HTML.H1({                                                                              // 13
        "class": "form-heading"                                                                                     // 14
      }, "You are currently logged in as an Admin."), "\n      " ];                                                 // 15
    }, function() {                                                                                                 // 16
      return [ "\n        ", HTML.H1({                                                                              // 17
        "class": "form-heading"                                                                                     // 18
      }, "You are not an Admin. If you need to use the Houston Admin, please ask your Admin to grant you access."), "\n      " ];
    }), "\n\n      ", HTML.DIV("\n        ", Blaze.Unless(function() {                                              // 20
      return Spacebars.call(view.lookup("adminUserExists"));                                                        // 21
    }, function() {                                                                                                 // 22
      return [ "\n          ", HTML.BUTTON({                                                                        // 23
        id: "become-houston-admin",                                                                                 // 24
        "class": "btn btn-lg btn-success btn-block"                                                                 // 25
      }, "\n            ", HTML.I({                                                                                 // 26
        "class": "fa fa-pencil"                                                                                     // 27
      }), "Claim Admin\n          "), "\n          ", HTML.BR(), "\n        " ];                                    // 28
    }), "\n        ", HTML.A({                                                                                      // 29
      href: "/admin",                                                                                               // 30
      "class": "btn btn-primary col-xs-6"                                                                           // 31
    }, "\n          ", HTML.I({                                                                                     // 32
      "class": "fa fa-home"                                                                                         // 33
    }), "Back to Home\n        "), "\n        ", HTML.BUTTON({                                                      // 34
      id: "houston-logout",                                                                                         // 35
      "class": "btn btn-warning col-xs-6"                                                                           // 36
    }, "\n          ", HTML.I({                                                                                     // 37
      "class": "fa fa-sign-out"                                                                                     // 38
    }), "Log out\n        "), "\n      "), "\n    " ];                                                              // 39
  }, function() {                                                                                                   // 40
    return [ " \n      ", HTML.FORM({                                                                               // 41
      id: "houston-sign-in-form",                                                                                   // 42
      role: "form"                                                                                                  // 43
    }, "\n        ", HTML.H1({                                                                                      // 44
      "class": "form-heading"                                                                                       // 45
    }, "\n          ", Blaze.If(function() {                                                                        // 46
      return Spacebars.call(view.lookup("adminUserExists"));                                                        // 47
    }, function() {                                                                                                 // 48
      return " Log In ";                                                                                            // 49
    }, function() {                                                                                                 // 50
      return " Create an admin account\n          ";                                                                // 51
    }), "\n        "), "\n        ", HTML.INPUT({                                                                   // 52
      type: "email",                                                                                                // 53
      "class": "form-control",                                                                                      // 54
      placeholder: "Email address",                                                                                 // 55
      name: "houston-email",                                                                                        // 56
      id: "houston-email",                                                                                          // 57
      required: "",                                                                                                 // 58
      autofocus: ""                                                                                                 // 59
    }), "\n        ", HTML.INPUT({                                                                                  // 60
      type: "password",                                                                                             // 61
      "class": "form-control",                                                                                      // 62
      placeholder: "Password",                                                                                      // 63
      name: "houston-password",                                                                                     // 64
      id: "houston-password",                                                                                       // 65
      required: ""                                                                                                  // 66
    }), "\n\n        ", HTML.DIV("\n          ", HTML.BUTTON({                                                      // 67
      "class": function() {                                                                                         // 68
        return [ "btn btn-lg ", Blaze.If(function() {                                                               // 69
          return Spacebars.call(view.lookup("adminUserExists"));                                                    // 70
        }, function() {                                                                                             // 71
          return "btn-primary";                                                                                     // 72
        }, function() {                                                                                             // 73
          return "btn-success";                                                                                     // 74
        }), " btn-block" ];                                                                                         // 75
      },                                                                                                            // 76
      type: "submit"                                                                                                // 77
    }, "\n            ", Blaze.If(function() {                                                                      // 78
      return Spacebars.call(view.lookup("adminUserExists"));                                                        // 79
    }, function() {                                                                                                 // 80
      return [ "\n            ", HTML.I({                                                                           // 81
        "class": "fa fa-sign-in"                                                                                    // 82
      }), "Log In\n            " ];                                                                                 // 83
    }, function() {                                                                                                 // 84
      return [ "\n            ", HTML.I({                                                                           // 85
        "class": "fa fa-user"                                                                                       // 86
      }), "Create account " ];                                                                                      // 87
    }), "\n          "), "\n        "), "\n      "), "\n    " ];                                                    // 88
  }), "\n  ");                                                                                                      // 89
}));                                                                                                                // 90
                                                                                                                    // 91
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/template.db_view.js                                                                //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("_houston_db_view");                                                                           // 2
Template["_houston_db_view"] = new Template("Template._houston_db_view", (function() {                              // 3
  var view = this;                                                                                                  // 4
  return [ HTML.Raw('<ul class="breadcrumb">\n    <li class="active"><i class="fa fa-home"></i>Home</li>\n  </ul>\n  <h1>Houston\n    <small>Meteor Admin Panel</small>\n  </h1>\n\n  <input name="name" id="search" placeholder="Search" class="form-control houston-column-filter input-lg" type="text" autofocus="">\n  '), Blaze.Unless(function() {
    return Spacebars.call(view.lookup("collections"));                                                              // 6
  }, function() {                                                                                                   // 7
    return [ "\n  ", HTML.P({                                                                                       // 8
      "class": "lead"                                                                                               // 9
    }, "If this is your first time using Houston, you may need to ", HTML.A({                                       // 10
      id: "refresh",                                                                                                // 11
      "class": "btn btn-large btn btn-block btn-warning"                                                            // 12
    }, "Refresh\n    this page")), "\n  " ];                                                                        // 13
  }), "\n  ", Blaze.Unless(function() {                                                                             // 14
    return Spacebars.call(view.lookup("filtered_collections"));                                                     // 15
  }, function() {                                                                                                   // 16
    return [ "\n  ", HTML.P({                                                                                       // 17
      "class": "lead"                                                                                               // 18
    }, "Your search returned no results."), "\n  " ];                                                               // 19
  }), "\n  ", Blaze.Each(function() {                                                                               // 20
    return Spacebars.call(view.lookup("filtered_collections"));                                                     // 21
  }, function() {                                                                                                   // 22
    return [ "\n  ", HTML.A({                                                                                       // 23
      href: function() {                                                                                            // 24
        return Spacebars.mustache(view.lookup("pathFor"), "houston_collection", Spacebars.kw({                      // 25
          collection_name: view.lookup("name")                                                                      // 26
        }));                                                                                                        // 27
      }                                                                                                             // 28
    }, "\n    ", HTML.DIV({                                                                                         // 29
      "class": "col-sm-6 col-md-4 col-lg-3"                                                                         // 30
    }, "\n      ", HTML.H4({                                                                                        // 31
      "class": "well well-sm houston-collection"                                                                    // 32
    }, "\n        ", HTML.I({                                                                                       // 33
      "class": "fa fa-database"                                                                                     // 34
    }), Blaze.View(function() {                                                                                     // 35
      return Spacebars.mustache(view.lookup("name"));                                                               // 36
    }), "\n        ", HTML.SPAN({                                                                                   // 37
      "class": "badge pull-right"                                                                                   // 38
    }, Blaze.View(function() {                                                                                      // 39
      return Spacebars.mustache(view.lookup("count"));                                                              // 40
    })), "\n      "), "\n\n    "), "\n  "), "\n  " ];                                                               // 41
  }) ];                                                                                                             // 42
}));                                                                                                                // 43
                                                                                                                    // 44
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/template.collection_view.js                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("_houston_collection_view");                                                                   // 2
Template["_houston_collection_view"] = new Template("Template._houston_collection_view", (function() {              // 3
  var view = this;                                                                                                  // 4
  return [ HTML.UL({                                                                                                // 5
    "class": "breadcrumb"                                                                                           // 6
  }, "\n    ", HTML.LI(HTML.A({                                                                                     // 7
    href: function() {                                                                                              // 8
      return Spacebars.mustache(view.lookup("pathFor"), "houston_home");                                            // 9
    },                                                                                                              // 10
    "class": "houston-home"                                                                                         // 11
  }, HTML.Raw('<i class="fa fa-home"></i>'), "Home")), "\n   ", HTML.LI({                                           // 12
    "class": "active"                                                                                               // 13
  }, HTML.Raw('<i class="fa fa-database"></i>'), Blaze.View(function() {                                            // 14
    return Spacebars.mustache(view.lookup("name"));                                                                 // 15
  })), "\n  "), "\n  ", HTML.DIV({                                                                                  // 16
    "class": "row hidden",                                                                                          // 17
    id: "houston-create-document"                                                                                   // 18
  }, "\n    ", HTML.H3("Add more ", Blaze.View(function() {                                                         // 19
    return Spacebars.mustache(view.lookup("name"));                                                                 // 20
  })), "\n\n    ", HTML.FORM({                                                                                      // 21
    id: "houston-create-row",                                                                                       // 22
    "class": "form-horizontal",                                                                                     // 23
    role: "form"                                                                                                    // 24
  }, "\n      ", Blaze.Each(function() {                                                                            // 25
    return Spacebars.call(view.lookup("nonid_headers"));                                                            // 26
  }, function() {                                                                                                   // 27
    return [ "\n      ", Spacebars.include(view.lookupTemplate("_houston_new_document_field")), "\n      " ];       // 28
  }), "\n\n      ", HTML.Raw('<div class="form-group">\n        <div class="col-sm-12">\n          <button type="button" id="houston-cancel" class="btn btn-primary"><i class="fa fa-times"></i>Cancel\n          </button>\n          <button type="button" id="houston-add" class="btn btn-success pull-right"><i class="fa fa-plus"></i>Add\n          </button>\n        </div>\n      </div>'), "\n    "), "\n    ", HTML.Raw("<hr>"), "\n  "), "\n  ", HTML.DIV({
    "class": "row"                                                                                                  // 30
  }, "\n    ", HTML.DIV({                                                                                           // 31
    "class": "col-md-12"                                                                                            // 32
  }, "\n      ", HTML.DIV({                                                                                         // 33
    "class": "page-header"                                                                                          // 34
  }, "\n\n        ", HTML.BUTTON({                                                                                  // 35
    id: "houston-create-btn",                                                                                       // 36
    "class": "btn btn-sm btn-success pull-right"                                                                    // 37
  }, HTML.Raw('<i class="fa fa-plus"></i>'), "New\n          ", Blaze.View(function() {                             // 38
    return Spacebars.mustache(view.lookup("name"));                                                                 // 39
  }), "\n        "), "\n        ", HTML.H1(Blaze.View(function() {                                                  // 40
    return Spacebars.mustache(view.lookup("name"));                                                                 // 41
  }), "\n          ", HTML.SMALL(Blaze.View(function() {                                                            // 42
    return Spacebars.mustache(view.lookup("num_of_records"));                                                       // 43
  }), " record", Blaze.View(function() {                                                                            // 44
    return Spacebars.mustache(view.lookup("pluralize"));                                                            // 45
  })), "\n        "), "\n      "), "\n    "), "\n  "), "\n  ", HTML.DIV({                                           // 46
    "class": "row"                                                                                                  // 47
  }, "\n    ", HTML.DIV({                                                                                           // 48
    "class": "col-md-12"                                                                                            // 49
  }, "\n      ", HTML.DIV({                                                                                         // 50
    "class": "panel-group",                                                                                         // 51
    id: "accordion"                                                                                                 // 52
  }, "\n        ", HTML.Raw('<div class="panel-heading">\n          <div class="panel-title">\n            <a id="expand-filter" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">\n              <h4><i class="fa fa-filter"></i>Filter&nbsp;<i class="fa fa-caret-down"></i></h4>\n            </a>\n          </div>\n        </div>'), "\n        ", HTML.DIV({
    id: "collapseOne",                                                                                              // 54
    "class": "panel-collapse collapse"                                                                              // 55
  }, "\n          ", HTML.FORM({                                                                                    // 56
    "class": "form-inline",                                                                                         // 57
    role: "form"                                                                                                    // 58
  }, "\n            ", Blaze.Each(function() {                                                                      // 59
    return Spacebars.call(view.lookup("nonid_headers"));                                                            // 60
  }, function() {                                                                                                   // 61
    return [ "\n            ", HTML.DIV({                                                                           // 62
      "class": "form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"                                                    // 63
    }, "\n              ", HTML.DIV({                                                                               // 64
      "class": "input-group"                                                                                        // 65
    }, "\n                ", HTML.DIV({                                                                             // 66
      "class": "input-sm input-group-addon"                                                                         // 67
    }, Blaze.View(function() {                                                                                      // 68
      return Spacebars.mustache(view.lookup("name"));                                                               // 69
    })), "\n                ", HTML.INPUT({                                                                         // 70
      "class": "form-control houston-column-filter input-sm",                                                       // 71
      type: "text",                                                                                                 // 72
      "data-id": function() {                                                                                       // 73
        return Spacebars.mustache(view.lookup("name"));                                                             // 74
      },                                                                                                            // 75
      placeholder: function() {                                                                                     // 76
        return Spacebars.mustache(view.lookup("type"));                                                             // 77
      },                                                                                                            // 78
      value: function() {                                                                                           // 79
        return Spacebars.mustache(view.lookup("filter_value"));                                                     // 80
      }                                                                                                             // 81
    }), "\n              "), "\n            "), "\n            " ];                                                 // 82
  }), "\n          "), "\n        "), "\n      "), "\n    "), "\n  "), "\n  ", HTML.DIV({                           // 83
    "class": "row"                                                                                                  // 84
  }, "\n    ", HTML.DIV({                                                                                           // 85
    "class": "col-md-12",                                                                                           // 86
    style: "overflow-x: auto"                                                                                       // 87
  }, "\n\n      ", HTML.Raw("<h4>\n        <small>Double click any cell to edit its value.</small>\n      </h4>"), "\n      ", HTML.TABLE({
    id: "data-table",                                                                                               // 89
    "class": "table table-condensed table-striped table-hover"                                                      // 90
  }, "\n        ", HTML.THEAD("\n        ", HTML.TR("\n          ", Blaze.Each(function() {                         // 91
    return Spacebars.call(view.lookup("headers"));                                                                  // 92
  }, function() {                                                                                                   // 93
    return [ "\n          ", HTML.TH(HTML.A({                                                                       // 94
      href: "#",                                                                                                    // 95
      "class": "houston-sort"                                                                                       // 96
    }, Blaze.View(function() {                                                                                      // 97
      return Spacebars.mustache(view.lookup("name"));                                                               // 98
    }))), "\n          " ];                                                                                         // 99
  }), "\n          ", HTML.TH(), "\n        "), "\n        "), "\n        ", HTML.TBODY("\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("rows"));                                                                     // 101
  }, function() {                                                                                                   // 102
    return [ "\n        ", HTML.TR({                                                                                // 103
      id: function() {                                                                                              // 104
        return [ "ID_", Spacebars.mustache(view.lookup("sort_order")) ];                                            // 105
      },                                                                                                            // 106
      "data-id": function() {                                                                                       // 107
        return Spacebars.mustache(view.lookup("_id"));                                                              // 108
      }                                                                                                             // 109
    }, "\n          ", HTML.TD(HTML.A({                                                                             // 110
      href: function() {                                                                                            // 111
        return Spacebars.mustache(view.lookup("pathFor"), "houston_document");                                      // 112
      }                                                                                                             // 113
    }, HTML.I({                                                                                                     // 114
      "class": "fa fa-file"                                                                                         // 115
    }), Blaze.View(function() {                                                                                     // 116
      return Spacebars.mustache(view.lookup("_id"));                                                                // 117
    }))), "\n          ", Blaze.Each(function() {                                                                   // 118
      return Spacebars.call(view.lookup("values_in_order"));                                                        // 119
    }, function() {                                                                                                 // 120
      return [ "\n          ", HTML.TD({                                                                            // 121
        "data-field": function() {                                                                                  // 122
          return Spacebars.mustache(view.lookup("field_name"));                                                     // 123
        },                                                                                                          // 124
        "class": "houston-collection-field"                                                                         // 125
      }, "\n            ", Blaze.View(function() {                                                                  // 126
        return Spacebars.mustache(view.lookup("field_value"));                                                      // 127
      }), "\n          "), "\n          " ];                                                                        // 128
    }), "\n          ", HTML.TD({                                                                                   // 129
      "class": "action-cell"                                                                                        // 130
    }, "\n            ", Blaze._TemplateWith(function() {                                                           // 131
      return {                                                                                                      // 132
        collection_info: Spacebars.call(view.lookup("collection_info")),                                            // 133
        document: Spacebars.call(view.lookup(".")),                                                                 // 134
        size: Spacebars.call("xs")                                                                                  // 135
      };                                                                                                            // 136
    }, function() {                                                                                                 // 137
      return Spacebars.include(view.lookupTemplate("_houston_custom_actions"));                                     // 138
    }), "\n            ", HTML.DIV({                                                                                // 139
      "data-id": function() {                                                                                       // 140
        return Spacebars.mustache(view.lookup("_id"));                                                              // 141
      },                                                                                                            // 142
      "class": "btn btn-xs houston-delete-doc btn-danger"                                                           // 143
    }, "\n              ", HTML.I({                                                                                 // 144
      "class": "fa fa-trash-o"                                                                                      // 145
    }), "Delete\n            "), "\n          "), "\n        "), "\n        " ];                                    // 146
  }), "\n        "), "\n      "), "\n    "), "\n  ") ];                                                             // 147
}));                                                                                                                // 148
                                                                                                                    // 149
Template.__checkName("_houston_new_document_field");                                                                // 150
Template["_houston_new_document_field"] = new Template("Template._houston_new_document_field", (function() {        // 151
  var view = this;                                                                                                  // 152
  return HTML.DIV({                                                                                                 // 153
    "class": "form-group"                                                                                           // 154
  }, "\n    ", HTML.LABEL({                                                                                         // 155
    "for": function() {                                                                                             // 156
      return Spacebars.mustache(view.lookup("name"));                                                               // 157
    },                                                                                                              // 158
    "class": "col-sm-4 control-label"                                                                               // 159
  }, Blaze.View(function() {                                                                                        // 160
    return Spacebars.mustache(view.lookup("name"));                                                                 // 161
  })), "\n\n    ", HTML.DIV({                                                                                       // 162
    "class": "col-sm-8"                                                                                             // 163
  }, "\n      ", HTML.TEXTAREA({                                                                                    // 164
    "class": "input-sm houston-field form-control",                                                                 // 165
    placeholder: function() {                                                                                       // 166
      return Spacebars.mustache(view.lookup("type"));                                                               // 167
    },                                                                                                              // 168
    name: function() {                                                                                              // 169
      return Spacebars.mustache(view.lookup("name"));                                                               // 170
    },                                                                                                              // 171
    value: function() {                                                                                             // 172
      return Spacebars.mustache(view.lookup("value"));                                                              // 173
    }                                                                                                               // 174
  }), "\n    "), "\n\n  ");                                                                                         // 175
}));                                                                                                                // 176
                                                                                                                    // 177
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/template.document_view.js                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("_houston_document_view");                                                                     // 2
Template["_houston_document_view"] = new Template("Template._houston_document_view", (function() {                  // 3
  var view = this;                                                                                                  // 4
  return [ HTML.UL({                                                                                                // 5
    "class": "breadcrumb"                                                                                           // 6
  }, "\n    ", HTML.LI("\n      ", HTML.A({                                                                         // 7
    href: function() {                                                                                              // 8
      return Spacebars.mustache(view.lookup("pathFor"), "houston_home");                                            // 9
    },                                                                                                              // 10
    "class": "houston-home"                                                                                         // 11
  }, HTML.Raw('<i class="fa fa-home"></i>'), "Home"), "\n    "), "\n    ", HTML.LI("\n      ", HTML.A({             // 12
    href: function() {                                                                                              // 13
      return Spacebars.mustache(view.lookup("pathFor"), "houston_collection", Spacebars.kw({                        // 14
        collection_name: view.lookup("name")                                                                        // 15
      }));                                                                                                          // 16
    },                                                                                                              // 17
    "class": "houston-collection"                                                                                   // 18
  }, HTML.Raw('<i class="fa fa-database"></i>'), Blaze.View(function() {                                            // 19
    return Spacebars.mustache(view.lookup("name"));                                                                 // 20
  })), "\n    "), "\n    ", HTML.LI({                                                                               // 21
    "class": "active"                                                                                               // 22
  }, HTML.Raw('<i class="fa fa-file"></i>'), Blaze.View(function() {                                                // 23
    return Spacebars.mustache(view.lookup("document_id"));                                                          // 24
  })), "\n  "), "\n  ", HTML.H1(Blaze.View(function() {                                                             // 25
    return Spacebars.mustache(view.lookup("name"));                                                                 // 26
  }), "\n    ", HTML.SMALL(Blaze.View(function() {                                                                  // 27
    return Spacebars.mustache(view.lookup("document_id"));                                                          // 28
  })), "\n  "), "\n\n  ", HTML.FORM({                                                                               // 29
    "class": "form-horizontal",                                                                                     // 30
    role: "form"                                                                                                    // 31
  }, "\n    ", Blaze.Each(function() {                                                                              // 32
    return Spacebars.call(view.lookup("fields"));                                                                   // 33
  }, function() {                                                                                                   // 34
    return [ "\n    ", Spacebars.include(view.lookupTemplate("_houston_document_field")), "\n    " ];               // 35
  }), "\n\n    ", HTML.DIV({                                                                                        // 36
    id: "houston-doc-actions",                                                                                      // 37
    "class": "form-group"                                                                                           // 38
  }, "\n      ", HTML.DIV({                                                                                         // 39
    "class": "col-sm-offset-3 col-sm-9"                                                                             // 40
  }, "\n        ", HTML.A({                                                                                         // 41
    href: function() {                                                                                              // 42
      return Spacebars.mustache(view.lookup("pathFor"), "houston_collection", Spacebars.kw({                        // 43
        collection_name: view.lookup("name")                                                                        // 44
      }));                                                                                                          // 45
    },                                                                                                              // 46
    id: "houston-back",                                                                                             // 47
    "class": "btn btn-primary"                                                                                      // 48
  }, HTML.Raw('<i class="fa fa-reply"></i>'), "Back\n        "), "\n        ", HTML.Raw('<button type="button" id="houston-save" class="btn btn-success"><i class="fa fa-save"></i>Save\n        </button>'), "\n        ", HTML.Raw('<button type="button" id="houston-delete" class="btn btn-danger pull-right"><i class="fa fa-trash-o"></i>Delete\n        </button>'), "\n        ", HTML.DIV({
    "class": "pull-right"                                                                                           // 50
  }, "\n          ", Blaze._TemplateWith(function() {                                                               // 51
    return {                                                                                                        // 52
      document: Spacebars.call(view.lookup("document")),                                                            // 53
      collection_info: Spacebars.call(view.lookup("collection_info")),                                              // 54
      size: Spacebars.call("md")                                                                                    // 55
    };                                                                                                              // 56
  }, function() {                                                                                                   // 57
    return Spacebars.include(view.lookupTemplate("_houston_custom_actions"));                                       // 58
  }), "\n        "), "\n      "), "\n    "), "\n  ") ];                                                             // 59
}));                                                                                                                // 60
                                                                                                                    // 61
Template.__checkName("_houston_document_field");                                                                    // 62
Template["_houston_document_field"] = new Template("Template._houston_document_field", (function() {                // 63
  var view = this;                                                                                                  // 64
  return HTML.DIV({                                                                                                 // 65
    "class": "form-group"                                                                                           // 66
  }, "\n\n    ", HTML.LABEL({                                                                                       // 67
    "for": function() {                                                                                             // 68
      return Spacebars.mustache(view.lookup("name_id"));                                                            // 69
    },                                                                                                              // 70
    "class": "col-sm-3 control-label"                                                                               // 71
  }, Blaze.View(function() {                                                                                        // 72
    return Spacebars.mustache(view.lookup("name_id"));                                                              // 73
  })), "\n\n    ", HTML.DIV({                                                                                       // 74
    "class": "col-sm-9"                                                                                             // 75
  }, "\n      ", HTML.TEXTAREA({                                                                                    // 76
    "class": "houston-field form-control",                                                                          // 77
    name: function() {                                                                                              // 78
      return Spacebars.mustache(view.lookup("name_id"));                                                            // 79
    },                                                                                                              // 80
    value: function() {                                                                                             // 81
      return Spacebars.mustache(view.lookup("value"));                                                              // 82
    }                                                                                                               // 83
  }), "\n      ", HTML.P({                                                                                          // 84
    "class": "help-block"                                                                                           // 85
  }, "Please enter a ", Blaze.View(function() {                                                                     // 86
    return Spacebars.mustache(view.lookup("type"));                                                                 // 87
  })), "\n    "), "\n\n  ");                                                                                        // 88
}));                                                                                                                // 89
                                                                                                                    // 90
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/template.admin_change_password.js                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("_houston_change_password");                                                                   // 2
Template["_houston_change_password"] = new Template("Template._houston_change_password", (function() {              // 3
  var view = this;                                                                                                  // 4
  return HTML.Raw('<div class="container houston-form">\n    <form id="houston-change-password-form" role="form">\n      <h1 class="form-heading">\n        Change password\n      </h1>\n      <input type="password" class="form-control" placeholder="Current Password" name="houston-current-password" required="" autofocus="">\n      <input type="password" class="form-control" placeholder="New Password" name="houston-new-password" required="">\n\n      <div>\n        <button class="btn btn-lg btn-primary btn-block" type="submit"><i class="fa fa-pencil"></i>Change\n          Password\n        </button>\n      </div>\n    </form>\n  </div>');
}));                                                                                                                // 6
                                                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/template.custom_template_view.js                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("_houston_custom_template_view");                                                              // 2
Template["_houston_custom_template_view"] = new Template("Template._houston_custom_template_view", (function() {    // 3
  var view = this;                                                                                                  // 4
  return Spacebars.include(view.lookupTemplate("customTemplate"));                                                  // 5
}));                                                                                                                // 6
                                                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/partials/template.admin_nav.js                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("_houston_navbar");                                                                            // 2
Template["_houston_navbar"] = new Template("Template._houston_navbar", (function() {                                // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "navbar navbar-inverse navbar-fixed-top"                                                               // 6
  }, "\n\n    ", HTML.DIV({                                                                                         // 7
    "class": "container-fluid"                                                                                      // 8
  }, "\n      ", HTML.DIV({                                                                                         // 9
    "class": "navbar-header"                                                                                        // 10
  }, "\n        ", HTML.Raw('<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>'), "\n        ", HTML.A({
    "class": "navbar-brand brand",                                                                                  // 12
    href: function() {                                                                                              // 13
      return Spacebars.mustache(view.lookup("pathFor"), "houston_home");                                            // 14
    }                                                                                                               // 15
  }, "Houston\n          ", HTML.Raw("<small>Meteor Admin</small>"), "\n        "), "\n      "), "\n      ", HTML.DIV({
    "class": "navbar-collapse collapse"                                                                             // 17
  }, "\n        ", HTML.UL({                                                                                        // 18
    "class": "nav navbar-nav pull-right"                                                                            // 19
  }, "\n          ", Blaze.If(function() {                                                                          // 20
    return Spacebars.call(view.lookup("currentUserIsAdmin"));                                                       // 21
  }, function() {                                                                                                   // 22
    return [ "\n          ", Blaze.Each(function() {                                                                // 23
      return Spacebars.call(view.lookup("menu_items"));                                                             // 24
    }, function() {                                                                                                 // 25
      return [ "\n          ", HTML.LI({                                                                            // 26
        "class": function() {                                                                                       // 27
          return Spacebars.mustache(view.lookup("isActive"));                                                       // 28
        }                                                                                                           // 29
      }, "\n            ", HTML.A({                                                                                 // 30
        target: function() {                                                                                        // 31
          return Spacebars.mustache(view.lookup("target"));                                                         // 32
        },                                                                                                          // 33
        href: function() {                                                                                          // 34
          return Spacebars.mustache(view.lookup("path"));                                                           // 35
        }                                                                                                           // 36
      }, Blaze.View(function() {                                                                                    // 37
        return Spacebars.mustache(view.lookup("title"));                                                            // 38
      })), "\n          "), "\n          " ];                                                                       // 39
    }), "\n          " ];                                                                                           // 40
  }), "\n          ", HTML.LI("\n            ", HTML.A({                                                            // 41
    id: "houston-report-bug",                                                                                       // 42
    href: function() {                                                                                              // 43
      return Spacebars.mustache(view.lookup("bugreport_url"));                                                      // 44
    },                                                                                                              // 45
    target: "_blank"                                                                                                // 46
  }, "\n              ", HTML.Raw('<i class="fa fa-bug"></i>'), "Report a Bug\n            "), "\n          "), "\n          ", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));                                                              // 48
  }, function() {                                                                                                   // 49
    return [ "\n          ", HTML.LI("\n            ", HTML.A({                                                     // 50
      href: function() {                                                                                            // 51
        return Spacebars.mustache(view.lookup("pathFor"), "houston_change_password");                               // 52
      }                                                                                                             // 53
    }, HTML.I({                                                                                                     // 54
      "class": "fa fa-pencil"                                                                                       // 55
    }), "Change password"), "\n          "), "\n          ", HTML.LI("\n            ", HTML.A({                     // 56
      id: "houston-logout",                                                                                         // 57
      href: "#"                                                                                                     // 58
    }, "Log out", HTML.CharRef({                                                                                    // 59
      html: "&nbsp;",                                                                                               // 60
      str: " "                                                                                                      // 61
    }), HTML.I({                                                                                                    // 62
      "class": "fa fa-sign-out"                                                                                     // 63
    })), "\n          "), "\n          " ];                                                                         // 64
  }), "\n        "), "\n      "), "\n      ", HTML.Raw("<!--/.nav-collapse -->"), "\n    "), "\n\n  ");             // 65
}));                                                                                                                // 66
                                                                                                                    // 67
Template.__checkName("_houston_sidenav");                                                                           // 68
Template["_houston_sidenav"] = new Template("Template._houston_sidenav", (function() {                              // 69
  var view = this;                                                                                                  // 70
  return [ Blaze.If(function() {                                                                                    // 71
    return Spacebars.call(view.lookup("currentUserIsAdmin"));                                                       // 72
  }, function() {                                                                                                   // 73
    return [ "\n  ", HTML.H6(HTML.I({                                                                               // 74
      "class": "fa fa-database"                                                                                     // 75
    }), "Collections"), "\n  ", HTML.UL({                                                                           // 76
      "class": "nav nav-sidebar"                                                                                    // 77
    }, "\n    ", Blaze.Each(function() {                                                                            // 78
      return Spacebars.call(view.lookup("collections"));                                                            // 79
    }, function() {                                                                                                 // 80
      return [ "\n    ", HTML.LI({                                                                                  // 81
        "class": function() {                                                                                       // 82
          return Blaze.If(function() {                                                                              // 83
            return Spacebars.dataMustache(view.lookup("is_active"), view.lookup("name"));                           // 84
          }, function() {                                                                                           // 85
            return "active";                                                                                        // 86
          });                                                                                                       // 87
        }                                                                                                           // 88
      }, "\n      ", HTML.A({                                                                                       // 89
        href: function() {                                                                                          // 90
          return Spacebars.mustache(view.lookup("pathFor"), "houston_collection", Spacebars.kw({                    // 91
            collection_name: view.lookup("name")                                                                    // 92
          }));                                                                                                      // 93
        }                                                                                                           // 94
      }, "\n        ", Blaze.View(function() {                                                                      // 95
        return Spacebars.mustache(view.lookup("name"));                                                             // 96
      }), "\n        ", HTML.SPAN({                                                                                 // 97
        "class": "badge pull-right"                                                                                 // 98
      }, Blaze.View(function() {                                                                                    // 99
        return Spacebars.mustache(view.lookup("count"));                                                            // 100
      })), "\n      "), "\n\n    "), "\n    " ];                                                                    // 101
    }), "\n  "), "\n  " ];                                                                                          // 102
  }), HTML.Raw('\n  <hr>\n\n  <ul class="nav nav-sidebar">\n    <!-- Hack because iron router is not letting us link to root -->\n    <li onclick="window.location = \'/\';"><a href="/"><i class="fa fa-reply"></i>Back to Root</a></li>\n  </ul>') ];
}));                                                                                                                // 104
                                                                                                                    // 105
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/partials/template.flash_message.js                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("_houston_flash_message");                                                                     // 2
Template["_houston_flash_message"] = new Template("Template._houston_flash_message", (function() {                  // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    id: "flash-message",                                                                                            // 6
    "class": function() {                                                                                           // 7
      return [ "alert-", Blaze.If(function() {                                                                      // 8
        return Spacebars.call(view.lookup("err"));                                                                  // 9
      }, function() {                                                                                               // 10
        return "danger";                                                                                            // 11
      }, function() {                                                                                               // 12
        return "success";                                                                                           // 13
      }), " ", Blaze.If(function() {                                                                                // 14
        return Spacebars.call(view.lookup("show"));                                                                 // 15
      }, function() {                                                                                               // 16
        return "up";                                                                                                // 17
      }) ];                                                                                                         // 18
    }                                                                                                               // 19
  }, "\n    ", Blaze.View(function() {                                                                              // 20
    return Spacebars.mustache(view.lookup("message"));                                                              // 21
  }), "\n  ");                                                                                                      // 22
}));                                                                                                                // 23
                                                                                                                    // 24
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/partials/template.custom_actions.js                                                //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("_houston_custom_actions");                                                                    // 2
Template["_houston_custom_actions"] = new Template("Template._houston_custom_actions", (function() {                // 3
  var view = this;                                                                                                  // 4
  return Blaze.Each(function() {                                                                                    // 5
    return Spacebars.call(view.lookup("actions"));                                                                  // 6
  }, function() {                                                                                                   // 7
    return [ "\n  ", HTML.DIV({                                                                                     // 8
      "class": function() {                                                                                         // 9
        return [ "btn btn-", Spacebars.mustache(view.lookup("size")), " btn-default custom-houston-action" ];       // 10
      }                                                                                                             // 11
    }, "\n    ", Blaze.View(function() {                                                                            // 12
      return Spacebars.mustache(view.lookup("action"));                                                             // 13
    }), "\n  "), "\n  " ];                                                                                          // 14
  });                                                                                                               // 15
}));                                                                                                                // 16
                                                                                                                    // 17
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/template.master_layout.js                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("_houston_master_layout");                                                                     // 2
Template["_houston_master_layout"] = new Template("Template._houston_master_layout", (function() {                  // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "houston"                                                                                              // 6
  }, HTML.Raw("\n    <!-- Meteor makes all CSS and JS global to the app.\n       To avoid polluting the user's namespace, we inject third-party JS and CSS through templates.\n       Ugly? Yes. Effective? Enough. -->\n    "), Spacebars.include(view.lookupTemplate("bootstrap")), "\n    ", Spacebars.include(view.lookupTemplate("collapsejs")), "\n    ", Spacebars.include(view.lookupTemplate("style_css")), "\n    ", Spacebars.include(view.lookupTemplate("_houston_navbar")), "\n    ", HTML.DIV({
    "class": "container-fluid"                                                                                      // 8
  }, "\n      ", HTML.DIV({                                                                                         // 9
    "class": "row"                                                                                                  // 10
  }, "\n        ", HTML.DIV({                                                                                       // 11
    "class": "col-sm-3 col-md-2 sidebar"                                                                            // 12
  }, "\n          ", Spacebars.include(view.lookupTemplate("_houston_sidenav")), "\n        "), "\n        ", HTML.DIV({
    "class": "col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"                                              // 14
  }, "\n          ", Spacebars.include(view.lookupTemplate("yield")), "\n          ", Spacebars.include(view.lookupTemplate("_houston_flash_message")), "\n        "), "\n      "), "\n    "), "\n\n  ");
}));                                                                                                                // 16
                                                                                                                    // 17
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/third-party/template.collapse.js.js                                                //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("collapsejs");                                                                                 // 2
Template["collapsejs"] = new Template("Template.collapsejs", (function() {                                          // 3
  var view = this;                                                                                                  // 4
  return HTML.SCRIPT("\n/* ========================================================================\n * Bootstrap: collapse.js v3.3.0\n * http://getbootstrap.com/javascript/#collapse\n * ========================================================================\n * Copyright 2011-2014 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * ======================================================================== */\n\n(function ($) {\n\n  // COLLAPSE PUBLIC CLASS DEFINITION\n  // ================================\n\n  var Collapse = function (element, options) {\n    this.$element      = $(element)\n    this.options       = $.extend({}, Collapse.DEFAULTS, options)\n    this.$trigger      = $(this.options.trigger).filter('[href=\"#' + element.id + '\"], [data-target=\"#' + element.id + '\"]')\n    this.transitioning = null\n\n    if (this.options.parent) {\n      this.$parent = this.getParent()\n    } else {\n      this.addAriaAndCollapsedClass(this.$element, this.$trigger)\n    }\n\n    if (this.options.toggle) this.toggle()\n  }\n\n  Collapse.VERSION  = '3.3.0'\n\n  Collapse.TRANSITION_DURATION = 350\n\n  Collapse.DEFAULTS = {\n    toggle: true,\n    trigger: '[data-toggle=\"collapse\"]'\n  }\n\n  Collapse.prototype.dimension = function () {\n    var hasWidth = this.$element.hasClass('width')\n    return hasWidth ? 'width' : 'height'\n  }\n\n  Collapse.prototype.show = function () {\n    if (this.transitioning || this.$element.hasClass('in')) return\n\n    var activesData\n    var actives = this.$parent && this.$parent.find('> .panel').children('.in, .collapsing')\n\n    if (actives && actives.length) {\n      activesData = actives.data('bs.collapse')\n      if (activesData && activesData.transitioning) return\n    }\n\n    var startEvent = $.Event('show.bs.collapse')\n    this.$element.trigger(startEvent)\n    if (startEvent.isDefaultPrevented()) return\n\n    if (actives && actives.length) {\n      Plugin.call(actives, 'hide')\n      activesData || actives.data('bs.collapse', null)\n    }\n\n    var dimension = this.dimension()\n\n    this.$element\n      .removeClass('collapse')\n      .addClass('collapsing')[dimension](0)\n      .attr('aria-expanded', true)\n\n    this.$trigger\n      .removeClass('collapsed')\n      .attr('aria-expanded', true)\n\n    this.transitioning = 1\n\n    var complete = function () {\n      this.$element\n        .removeClass('collapsing')\n        .addClass('collapse in')[dimension]('')\n      this.transitioning = 0\n      this.$element\n        .trigger('shown.bs.collapse')\n    }\n\n    if (!$.support.transition) return complete.call(this)\n\n    var scrollSize = $.camelCase(['scroll', dimension].join('-'))\n\n    this.$element\n      .one('bsTransitionEnd', $.proxy(complete, this))\n      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])\n  }\n\n  Collapse.prototype.hide = function () {\n    if (this.transitioning || !this.$element.hasClass('in')) return\n\n    var startEvent = $.Event('hide.bs.collapse')\n    this.$element.trigger(startEvent)\n    if (startEvent.isDefaultPrevented()) return\n\n    var dimension = this.dimension()\n\n    this.$element[dimension](this.$element[dimension]())[0].offsetHeight\n\n    this.$element\n      .addClass('collapsing')\n      .removeClass('collapse in')\n      .attr('aria-expanded', false)\n\n    this.$trigger\n      .addClass('collapsed')\n      .attr('aria-expanded', false)\n\n    this.transitioning = 1\n\n    var complete = function () {\n      this.transitioning = 0\n      this.$element\n        .removeClass('collapsing')\n        .addClass('collapse')\n        .trigger('hidden.bs.collapse')\n    }\n\n    if (!$.support.transition) return complete.call(this)\n\n    this.$element\n      [dimension](0)\n      .one('bsTransitionEnd', $.proxy(complete, this))\n      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)\n  }\n\n  Collapse.prototype.toggle = function () {\n    this[this.$element.hasClass('in') ? 'hide' : 'show']()\n  }\n\n  Collapse.prototype.getParent = function () {\n    return $(this.options.parent)\n      .find('[data-toggle=\"collapse\"][data-parent=\"' + this.options.parent + '\"]')\n      .each($.proxy(function (i, element) {\n        var $element = $(element)\n        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)\n      }, this))\n      .end()\n  }\n\n  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {\n    var isOpen = $element.hasClass('in')\n\n    $element.attr('aria-expanded', isOpen)\n    $trigger\n      .toggleClass('collapsed', !isOpen)\n      .attr('aria-expanded', isOpen)\n  }\n\n  function getTargetFromTrigger($trigger) {\n    var href\n    var target = $trigger.attr('data-target')\n      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\\s]+$)/, '') // strip for ie7\n\n    return $(target)\n  }\n\n\n  // COLLAPSE PLUGIN DEFINITION\n  // ==========================\n\n  function Plugin(option) {\n    return this.each(function () {\n      var $this   = $(this)\n      var data    = $this.data('bs.collapse')\n      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)\n\n      if (!data && options.toggle && option == 'show') options.toggle = false\n      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))\n      if (typeof option == 'string') data[option]()\n    })\n  }\n\n  var old = $.fn.collapse\n\n  $.fn.collapse             = Plugin\n  $.fn.collapse.Constructor = Collapse\n\n\n  // COLLAPSE NO CONFLICT\n  // ====================\n\n  $.fn.collapse.noConflict = function () {\n    $.fn.collapse = old\n    return this\n  }\n\n\n  // COLLAPSE DATA-API\n  // =================\n\n  $(document).on('click.bs.collapse.data-api', '[data-toggle=\"collapse\"]', function (e) {\n    var $this   = $(this)\n\n    if (!$this.attr('data-target')) e.preventDefault()\n\n    var $target = getTargetFromTrigger($this)\n    var data    = $target.data('bs.collapse')\n    var option  = data ? 'toggle' : $.extend({}, $this.data(), { trigger: this })\n\n    Plugin.call($target, option)\n  })\n\n})(jQuery);\n");
}));                                                                                                                // 6
                                                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/third-party/template.bootstrap.js                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("bootstrap");                                                                                  // 2
Template["bootstrap"] = new Template("Template.bootstrap", (function() {                                            // 3
  var view = this;                                                                                                  // 4
  return HTML.STYLE('\n@import url("//maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css");\n@import url("//fonts.googleapis.com/css?family=Lato:400,700,400italic");\n\n/*!\n * Bootswatch v3.1.1\n * Homepage: http://bootswatch.com\n * Copyright 2012-2014 Thomas Park\n * Licensed under MIT\n * Based on Bootstrap\n*/\n/*! normalize.css v3.0.0 | MIT License | git.io/normalize */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden],\ntemplate {\n  display: none;\n}\n\na {\n  background: transparent;\n}\n\na:active,\na:hover {\n  outline: 0;\n}\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\ndfn {\n  font-style: italic;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nimg {\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\n\nbutton {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\nhtml input[type="button"],\ninput[type="reset"],\ninput[type="submit"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ninput {\n  line-height: normal;\n}\n\ninput[type="checkbox"],\ninput[type="radio"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type="number"]::-webkit-inner-spin-button,\ninput[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type="search"] {\n  -webkit-appearance: textfield;\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend {\n  border: 0;\n  padding: 0;\n}\n\ntextarea {\n  overflow: auto;\n}\n\noptgroup {\n  font-weight: bold;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n@media print {\n  * {\n    text-shadow: none !important;\n    color: #000 !important;\n    background: transparent !important;\n    box-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: " (" attr(href) ")";\n  }\n\n  abbr[title]:after {\n    content: " (" attr(title) ")";\n  }\n\n  a[href^="javascript:"]:after,\n  a[href^="#"]:after {\n    content: "";\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n\n  select {\n    background: #fff !important;\n  }\n\n  .navbar {\n    display: none;\n  }\n\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n\n  .label {\n    border: 1px solid #000;\n  }\n\n  .table {\n    border-collapse: collapse !important;\n  }\n\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\nbody {\n  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 15px;\n  line-height: 1.42857143;\n  color: #2c3e50;\n  background-color: #ffffff;\n}\n\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\na {\n  color: #18bc9c;\n  text-decoration: none;\n}\n\na:hover,\na:focus {\n  color: #18bc9c;\n  text-decoration: underline;\n}\n\na:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\nfigure {\n  margin: 0;\n}\n\nimg {\n  vertical-align: middle;\n}\n\n.img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-rounded {\n  border-radius: 6px;\n}\n\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #ffffff;\n  border: 1px solid #ecf0f1;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-circle {\n  border-radius: 50%;\n}\n\nhr {\n  margin-top: 21px;\n  margin-bottom: 21px;\n  border: 0;\n  border-top: 1px solid #ecf0f1;\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  line-height: 1.1;\n  color: inherit;\n}\n\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #b4bcc2;\n}\n\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 21px;\n  margin-bottom: 10.5px;\n}\n\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\n\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10.5px;\n  margin-bottom: 10.5px;\n}\n\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\n\nh1,\n.h1 {\n  font-size: 39px;\n}\n\nh2,\n.h2 {\n  font-size: 32px;\n}\n\nh3,\n.h3 {\n  font-size: 26px;\n}\n\nh4,\n.h4 {\n  font-size: 19px;\n}\n\nh5,\n.h5 {\n  font-size: 15px;\n}\n\nh6,\n.h6 {\n  font-size: 13px;\n}\n\np {\n  margin: 0 0 10.5px;\n}\n\n.lead {\n  margin-bottom: 21px;\n  font-size: 17px;\n  font-weight: 200;\n  line-height: 1.4;\n}\n\n@media (min-width: 768px) {\n  .lead {\n    font-size: 22.5px;\n  }\n}\n\nsmall,\n.small {\n  font-size: 85%;\n}\n\ncite {\n  font-style: normal;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.text-muted {\n  color: #b4bcc2;\n}\n\n.text-primary {\n  color: #2c3e50;\n}\n\na.text-primary:hover {\n  color: #1a242f;\n}\n\n.text-success {\n  color: #ffffff;\n}\n\na.text-success:hover {\n  color: #e6e6e6;\n}\n\n.text-info {\n  color: #ffffff;\n}\n\na.text-info:hover {\n  color: #e6e6e6;\n}\n\n.text-warning {\n  color: #ffffff;\n}\n\na.text-warning:hover {\n  color: #e6e6e6;\n}\n\n.text-danger {\n  color: #ffffff;\n}\n\na.text-danger:hover {\n  color: #e6e6e6;\n}\n\n.bg-primary {\n  color: #fff;\n  background-color: #2c3e50;\n}\n\na.bg-primary:hover {\n  background-color: #1a242f;\n}\n\n.bg-success {\n  background-color: #18bc9c;\n}\n\na.bg-success:hover {\n  background-color: #128f76;\n}\n\n.bg-info {\n  background-color: #3498db;\n}\n\na.bg-info:hover {\n  background-color: #217dbb;\n}\n\n.bg-warning {\n  background-color: #f39c12;\n}\n\na.bg-warning:hover {\n  background-color: #c87f0a;\n}\n\n.bg-danger {\n  background-color: #e74c3c;\n}\n\na.bg-danger:hover {\n  background-color: #d62c1a;\n}\n\n.page-header {\n  padding-bottom: 9.5px;\n  margin: 42px 0 21px;\n  border-bottom: 1px solid #ecf0f1;\n}\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10.5px;\n}\n\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px;\n}\n\n.list-inline > li {\n  display: inline-block;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\ndl {\n  margin-top: 0;\n  margin-bottom: 21px;\n}\n\ndt,\ndd {\n  line-height: 1.42857143;\n}\n\ndt {\n  font-weight: bold;\n}\n\ndd {\n  margin-left: 0;\n}\n\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #b4bcc2;\n}\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n\nblockquote {\n  padding: 10.5px 21px;\n  margin: 0 0 21px;\n  font-size: 18.75px;\n  border-left: 5px solid #ecf0f1;\n}\n\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\n\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #b4bcc2;\n}\n\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: \'\\2014 \\00A0\';\n}\n\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #ecf0f1;\n  border-left: 0;\n  text-align: right;\n}\n\n.blockquote-reverse footer:before,\nblockquote.pull-right footer:before,\n.blockquote-reverse small:before,\nblockquote.pull-right small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right .small:before {\n  content: \'\';\n}\n\n.blockquote-reverse footer:after,\nblockquote.pull-right footer:after,\n.blockquote-reverse small:after,\nblockquote.pull-right small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right .small:after {\n  content: \'\\00A0 \\2014\';\n}\n\nblockquote:before,\nblockquote:after {\n  content: "";\n}\n\naddress {\n  margin-bottom: 21px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\n}\n\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  white-space: nowrap;\n  border-radius: 4px;\n}\n\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #ffffff;\n  background-color: #333333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\n\npre {\n  display: block;\n  padding: 10px;\n  margin: 0 0 10.5px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #7b8a8b;\n  background-color: #ecf0f1;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n}\n\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.row {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-11 {\n  width: 91.66666667%;\n}\n\n.col-xs-10 {\n  width: 83.33333333%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-8 {\n  width: 66.66666667%;\n}\n\n.col-xs-7 {\n  width: 58.33333333%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-5 {\n  width: 41.66666667%;\n}\n\n.col-xs-4 {\n  width: 33.33333333%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-2 {\n  width: 16.66666667%;\n}\n\n.col-xs-1 {\n  width: 8.33333333%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66666667%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333333%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66666667%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333333%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66666667%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333333%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66666667%;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333333%;\n}\n\n.col-xs-pull-0 {\n  right: 0%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-push-11 {\n  left: 91.66666667%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333333%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-8 {\n  left: 66.66666667%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333333%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-5 {\n  left: 41.66666667%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333333%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-2 {\n  left: 16.66666667%;\n}\n\n.col-xs-push-1 {\n  left: 8.33333333%;\n}\n\n.col-xs-push-0 {\n  left: 0%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n\n  .col-sm-12 {\n    width: 100%;\n  }\n\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n\n  .col-sm-9 {\n    width: 75%;\n  }\n\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n\n  .col-sm-6 {\n    width: 50%;\n  }\n\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n\n  .col-sm-3 {\n    width: 25%;\n  }\n\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n\n  .col-sm-pull-0 {\n    right: 0%;\n  }\n\n  .col-sm-push-12 {\n    left: 100%;\n  }\n\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n\n  .col-sm-push-9 {\n    left: 75%;\n  }\n\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n\n  .col-sm-push-6 {\n    left: 50%;\n  }\n\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n\n  .col-sm-push-3 {\n    left: 25%;\n  }\n\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n\n  .col-sm-push-0 {\n    left: 0%;\n  }\n\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-sm-offset-0 {\n    margin-left: 0%;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n\n  .col-md-12 {\n    width: 100%;\n  }\n\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n\n  .col-md-9 {\n    width: 75%;\n  }\n\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n\n  .col-md-6 {\n    width: 50%;\n  }\n\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n\n  .col-md-3 {\n    width: 25%;\n  }\n\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n\n  .col-md-pull-12 {\n    right: 100%;\n  }\n\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n\n  .col-md-pull-9 {\n    right: 75%;\n  }\n\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n\n  .col-md-pull-6 {\n    right: 50%;\n  }\n\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n\n  .col-md-pull-3 {\n    right: 25%;\n  }\n\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n\n  .col-md-pull-0 {\n    right: 0%;\n  }\n\n  .col-md-push-12 {\n    left: 100%;\n  }\n\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n\n  .col-md-push-9 {\n    left: 75%;\n  }\n\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n\n  .col-md-push-6 {\n    left: 50%;\n  }\n\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n\n  .col-md-push-3 {\n    left: 25%;\n  }\n\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n\n  .col-md-push-0 {\n    left: 0%;\n  }\n\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-md-offset-0 {\n    margin-left: 0%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n\n  .col-lg-12 {\n    width: 100%;\n  }\n\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n\n  .col-lg-9 {\n    width: 75%;\n  }\n\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n\n  .col-lg-6 {\n    width: 50%;\n  }\n\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n\n  .col-lg-3 {\n    width: 25%;\n  }\n\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n\n  .col-lg-pull-0 {\n    right: 0%;\n  }\n\n  .col-lg-push-12 {\n    left: 100%;\n  }\n\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n\n  .col-lg-push-9 {\n    left: 75%;\n  }\n\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n\n  .col-lg-push-6 {\n    left: 50%;\n  }\n\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n\n  .col-lg-push-3 {\n    left: 25%;\n  }\n\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n\n  .col-lg-push-0 {\n    left: 0%;\n  }\n\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-lg-offset-0 {\n    margin-left: 0%;\n  }\n}\n\ntable {\n  max-width: 100%;\n  background-color: transparent;\n}\n\nth {\n  text-align: left;\n}\n\n.table {\n  width: 100%;\n  margin-bottom: 21px;\n}\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ecf0f1;\n}\n\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ecf0f1;\n}\n\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n\n.table > tbody + tbody {\n  border-top: 2px solid #ecf0f1;\n}\n\n.table .table {\n  background-color: #ffffff;\n}\n\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n\n.table-bordered {\n  border: 1px solid #ecf0f1;\n}\n\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ecf0f1;\n}\n\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n\n.table-striped > tbody > tr:nth-child(odd) > td,\n.table-striped > tbody > tr:nth-child(odd) > th {\n  background-color: #f9f9f9;\n}\n\n.table-hover > tbody > tr:hover > td,\n.table-hover > tbody > tr:hover > th {\n  background-color: #ecf0f1;\n}\n\ntable col[class*="col-"] {\n  position: static;\n  float: none;\n  display: table-column;\n}\n\ntable td[class*="col-"],\ntable th[class*="col-"] {\n  position: static;\n  float: none;\n  display: table-cell;\n}\n\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #ecf0f1;\n}\n\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #dde4e6;\n}\n\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #18bc9c;\n}\n\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #15a589;\n}\n\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #3498db;\n}\n\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #258cd1;\n}\n\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #f39c12;\n}\n\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #e08e0b;\n}\n\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #e74c3c;\n}\n\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #e43725;\n}\n\n@media (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15.75px;\n    overflow-y: hidden;\n    overflow-x: scroll;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ecf0f1;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 21px;\n  font-size: 22.5px;\n  line-height: inherit;\n  color: #2c3e50;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\n\nlabel {\n  display: inline-block;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\ninput[type="search"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\ninput[type="radio"],\ninput[type="checkbox"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  /* IE8-9 */\n  line-height: normal;\n}\n\ninput[type="file"] {\n  display: block;\n}\n\ninput[type="range"] {\n  display: block;\n  width: 100%;\n}\n\nselect[multiple],\nselect[size] {\n  height: auto;\n}\n\ninput[type="file"]:focus,\ninput[type="radio"]:focus,\ninput[type="checkbox"]:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\noutput {\n  display: block;\n  padding-top: 11px;\n  font-size: 15px;\n  line-height: 1.42857143;\n  color: #2c3e50;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 43px;\n  padding: 10px 15px;\n  font-size: 15px;\n  line-height: 1.42857143;\n  color: #2c3e50;\n  background-color: #ffffff;\n  background-image: none;\n  border: 1px solid #dce4ec;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n\n.form-control:focus {\n  border-color: #1abc9c;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(26, 188, 156, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(26, 188, 156, 0.6);\n}\n\n.form-control::-moz-placeholder {\n  color: #acb6c0;\n  opacity: 1;\n}\n\n.form-control:-ms-input-placeholder {\n  color: #acb6c0;\n}\n\n.form-control::-webkit-input-placeholder {\n  color: #acb6c0;\n}\n\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n  background-color: #ecf0f1;\n  opacity: 1;\n}\n\ntextarea.form-control {\n  height: auto;\n}\n\ninput[type="search"] {\n  -webkit-appearance: none;\n}\n\ninput[type="date"] {\n  line-height: 43px;\n}\n\n.form-group {\n  margin-bottom: 15px;\n}\n\n.radio,\n.checkbox {\n  display: block;\n  min-height: 21px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding-left: 20px;\n}\n\n.radio label,\n.checkbox label {\n  display: inline;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n.radio input[type="radio"],\n.radio-inline input[type="radio"],\n.checkbox input[type="checkbox"],\n.checkbox-inline input[type="checkbox"] {\n  float: left;\n  margin-left: -20px;\n}\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n\n.radio-inline,\n.checkbox-inline {\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\n\ninput[type="radio"][disabled],\ninput[type="checkbox"][disabled],\n.radio[disabled],\n.radio-inline[disabled],\n.checkbox[disabled],\n.checkbox-inline[disabled],\nfieldset[disabled] input[type="radio"],\nfieldset[disabled] input[type="checkbox"],\nfieldset[disabled] .radio,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox,\nfieldset[disabled] .checkbox-inline {\n  cursor: not-allowed;\n}\n\n.input-sm {\n  height: 33px;\n  padding: 6px 9px;\n  font-size: 13px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\nselect.input-sm {\n  height: 33px;\n  line-height: 33px;\n}\n\ntextarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n\n.input-lg {\n  height: 64px;\n  padding: 18px 27px;\n  font-size: 19px;\n  line-height: 1.33;\n  border-radius: 6px;\n}\n\nselect.input-lg {\n  height: 64px;\n  line-height: 64px;\n}\n\ntextarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n\n.has-feedback {\n  position: relative;\n}\n\n.has-feedback .form-control {\n  padding-right: 53.75px;\n}\n\n.has-feedback .form-control-feedback {\n  position: absolute;\n  top: 26px;\n  right: 0;\n  display: block;\n  width: 43px;\n  height: 43px;\n  line-height: 43px;\n  text-align: center;\n}\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline {\n  color: #ffffff;\n}\n\n.has-success .form-control {\n  border-color: #ffffff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-success .form-control:focus {\n  border-color: #e6e6e6;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ffffff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ffffff;\n}\n\n.has-success .input-group-addon {\n  color: #ffffff;\n  border-color: #ffffff;\n  background-color: #18bc9c;\n}\n\n.has-success .form-control-feedback {\n  color: #ffffff;\n}\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline {\n  color: #ffffff;\n}\n\n.has-warning .form-control {\n  border-color: #ffffff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-warning .form-control:focus {\n  border-color: #e6e6e6;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ffffff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ffffff;\n}\n\n.has-warning .input-group-addon {\n  color: #ffffff;\n  border-color: #ffffff;\n  background-color: #f39c12;\n}\n\n.has-warning .form-control-feedback {\n  color: #ffffff;\n}\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline {\n  color: #ffffff;\n}\n\n.has-error .form-control {\n  border-color: #ffffff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-error .form-control:focus {\n  border-color: #e6e6e6;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ffffff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ffffff;\n}\n\n.has-error .input-group-addon {\n  color: #ffffff;\n  border-color: #ffffff;\n  background-color: #e74c3c;\n}\n\n.has-error .form-control-feedback {\n  color: #ffffff;\n}\n\n.form-control-static {\n  margin-bottom: 0;\n}\n\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #597ea2;\n}\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-left: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio input[type="radio"],\n  .form-inline .checkbox input[type="checkbox"] {\n    float: none;\n    margin-left: 0;\n  }\n\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n\n.form-horizontal .control-label,\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 11px;\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 32px;\n}\n\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.form-horizontal .form-control-static {\n  padding-top: 11px;\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n  }\n}\n\n.form-horizontal .has-feedback .form-control-feedback {\n  top: 0;\n  right: 15px;\n}\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 10px 15px;\n  font-size: 15px;\n  line-height: 1.42857143;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\n.btn:hover,\n.btn:focus {\n  color: #ffffff;\n  text-decoration: none;\n}\n\n.btn:active,\n.btn.active {\n  outline: 0;\n  background-image: none;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.btn-default {\n  color: #ffffff;\n  background-color: #95a5a6;\n  border-color: #95a5a6;\n}\n\n.btn-default:hover,\n.btn-default:focus,\n.btn-default:active,\n.btn-default.active,\n.open .dropdown-toggle.btn-default {\n  color: #ffffff;\n  background-color: #7f9293;\n  border-color: #74898a;\n}\n\n.btn-default:active,\n.btn-default.active,\n.open .dropdown-toggle.btn-default {\n  background-image: none;\n}\n\n.btn-default.disabled,\n.btn-default[disabled],\nfieldset[disabled] .btn-default,\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled:active,\n.btn-default[disabled]:active,\nfieldset[disabled] .btn-default:active,\n.btn-default.disabled.active,\n.btn-default[disabled].active,\nfieldset[disabled] .btn-default.active {\n  background-color: #95a5a6;\n  border-color: #95a5a6;\n}\n\n.btn-default .badge {\n  color: #95a5a6;\n  background-color: #ffffff;\n}\n\n.btn-primary {\n  color: #ffffff;\n  background-color: #2c3e50;\n  border-color: #2c3e50;\n}\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #ffffff;\n  background-color: #1e2a36;\n  border-color: #161f29;\n}\n\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  background-image: none;\n}\n\n.btn-primary.disabled,\n.btn-primary[disabled],\nfieldset[disabled] .btn-primary,\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled:active,\n.btn-primary[disabled]:active,\nfieldset[disabled] .btn-primary:active,\n.btn-primary.disabled.active,\n.btn-primary[disabled].active,\nfieldset[disabled] .btn-primary.active {\n  background-color: #2c3e50;\n  border-color: #2c3e50;\n}\n\n.btn-primary .badge {\n  color: #2c3e50;\n  background-color: #ffffff;\n}\n\n.btn-success {\n  color: #ffffff;\n  background-color: #18bc9c;\n  border-color: #18bc9c;\n}\n\n.btn-success:hover,\n.btn-success:focus,\n.btn-success:active,\n.btn-success.active,\n.open .dropdown-toggle.btn-success {\n  color: #ffffff;\n  background-color: #13987e;\n  border-color: #11866f;\n}\n\n.btn-success:active,\n.btn-success.active,\n.open .dropdown-toggle.btn-success {\n  background-image: none;\n}\n\n.btn-success.disabled,\n.btn-success[disabled],\nfieldset[disabled] .btn-success,\n.btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled:active,\n.btn-success[disabled]:active,\nfieldset[disabled] .btn-success:active,\n.btn-success.disabled.active,\n.btn-success[disabled].active,\nfieldset[disabled] .btn-success.active {\n  background-color: #18bc9c;\n  border-color: #18bc9c;\n}\n\n.btn-success .badge {\n  color: #18bc9c;\n  background-color: #ffffff;\n}\n\n.btn-info {\n  color: #ffffff;\n  background-color: #3498db;\n  border-color: #3498db;\n}\n\n.btn-info:hover,\n.btn-info:focus,\n.btn-info:active,\n.btn-info.active,\n.open .dropdown-toggle.btn-info {\n  color: #ffffff;\n  background-color: #2383c4;\n  border-color: #2077b2;\n}\n\n.btn-info:active,\n.btn-info.active,\n.open .dropdown-toggle.btn-info {\n  background-image: none;\n}\n\n.btn-info.disabled,\n.btn-info[disabled],\nfieldset[disabled] .btn-info,\n.btn-info.disabled:hover,\n.btn-info[disabled]:hover,\nfieldset[disabled] .btn-info:hover,\n.btn-info.disabled:focus,\n.btn-info[disabled]:focus,\nfieldset[disabled] .btn-info:focus,\n.btn-info.disabled:active,\n.btn-info[disabled]:active,\nfieldset[disabled] .btn-info:active,\n.btn-info.disabled.active,\n.btn-info[disabled].active,\nfieldset[disabled] .btn-info.active {\n  background-color: #3498db;\n  border-color: #3498db;\n}\n\n.btn-info .badge {\n  color: #3498db;\n  background-color: #ffffff;\n}\n\n.btn-warning {\n  color: #ffffff;\n  background-color: #f39c12;\n  border-color: #f39c12;\n}\n\n.btn-warning:hover,\n.btn-warning:focus,\n.btn-warning:active,\n.btn-warning.active,\n.open .dropdown-toggle.btn-warning {\n  color: #ffffff;\n  background-color: #d2850b;\n  border-color: #be780a;\n}\n\n.btn-warning:active,\n.btn-warning.active,\n.open .dropdown-toggle.btn-warning {\n  background-image: none;\n}\n\n.btn-warning.disabled,\n.btn-warning[disabled],\nfieldset[disabled] .btn-warning,\n.btn-warning.disabled:hover,\n.btn-warning[disabled]:hover,\nfieldset[disabled] .btn-warning:hover,\n.btn-warning.disabled:focus,\n.btn-warning[disabled]:focus,\nfieldset[disabled] .btn-warning:focus,\n.btn-warning.disabled:active,\n.btn-warning[disabled]:active,\nfieldset[disabled] .btn-warning:active,\n.btn-warning.disabled.active,\n.btn-warning[disabled].active,\nfieldset[disabled] .btn-warning.active {\n  background-color: #f39c12;\n  border-color: #f39c12;\n}\n\n.btn-warning .badge {\n  color: #f39c12;\n  background-color: #ffffff;\n}\n\n.btn-danger {\n  color: #ffffff;\n  background-color: #e74c3c;\n  border-color: #e74c3c;\n}\n\n.btn-danger:hover,\n.btn-danger:focus,\n.btn-danger:active,\n.btn-danger.active,\n.open .dropdown-toggle.btn-danger {\n  color: #ffffff;\n  background-color: #df2e1b;\n  border-color: #cd2a19;\n}\n\n.btn-danger:active,\n.btn-danger.active,\n.open .dropdown-toggle.btn-danger {\n  background-image: none;\n}\n\n.btn-danger.disabled,\n.btn-danger[disabled],\nfieldset[disabled] .btn-danger,\n.btn-danger.disabled:hover,\n.btn-danger[disabled]:hover,\nfieldset[disabled] .btn-danger:hover,\n.btn-danger.disabled:focus,\n.btn-danger[disabled]:focus,\nfieldset[disabled] .btn-danger:focus,\n.btn-danger.disabled:active,\n.btn-danger[disabled]:active,\nfieldset[disabled] .btn-danger:active,\n.btn-danger.disabled.active,\n.btn-danger[disabled].active,\nfieldset[disabled] .btn-danger.active {\n  background-color: #e74c3c;\n  border-color: #e74c3c;\n}\n\n.btn-danger .badge {\n  color: #e74c3c;\n  background-color: #ffffff;\n}\n\n.btn-link {\n  color: #18bc9c;\n  font-weight: normal;\n  cursor: pointer;\n  border-radius: 0;\n}\n\n.btn-link,\n.btn-link:active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n\n.btn-link:hover,\n.btn-link:focus {\n  color: #18bc9c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n\n.btn-link[disabled]:hover,\nfieldset[disabled] .btn-link:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:focus {\n  color: #b4bcc2;\n  text-decoration: none;\n}\n\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 18px 27px;\n  font-size: 19px;\n  line-height: 1.33;\n  border-radius: 6px;\n}\n\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 6px 9px;\n  font-size: 13px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 13px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\n\ninput[type="submit"].btn-block,\ninput[type="reset"].btn-block,\ninput[type="button"].btn-block {\n  width: 100%;\n}\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n\n.fade.in {\n  opacity: 1;\n}\n\n.collapse {\n  display: none;\n}\n\n.collapse.in {\n  display: block;\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition: height 0.35s ease;\n  transition: height 0.35s ease;\n}\n\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px solid;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n\n.dropdown {\n  position: relative;\n}\n\n.dropdown-toggle:focus {\n  outline: 0;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 15px;\n  background-color: #ffffff;\n  border: 1px solid #cccccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box;\n}\n\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9.5px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #7b8a8b;\n  white-space: nowrap;\n}\n\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #ffffff;\n  background-color: #2c3e50;\n}\n\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #ffffff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #2c3e50;\n}\n\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #b4bcc2;\n}\n\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n  cursor: not-allowed;\n}\n\n.open > .dropdown-menu {\n  display: block;\n}\n\n.open > a {\n  outline: 0;\n}\n\n.dropdown-menu-right {\n  left: auto;\n  right: 0;\n}\n\n.dropdown-menu-left {\n  left: 0;\n  right: auto;\n}\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #b4bcc2;\n}\n\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990;\n}\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px solid;\n  content: "";\n}\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 1px;\n}\n\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    left: auto;\n    right: 0;\n  }\n\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto;\n  }\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus {\n  outline: none;\n}\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n\n.btn-toolbar {\n  margin-left: -5px;\n}\n\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group > .btn-group {\n  float: left;\n}\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group > .btn-group:first-child > .btn:last-child,\n.btn-group > .btn-group:first-child > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn-group:last-child > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.btn .caret {\n  margin-left: 0;\n}\n\n.btn-lg .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n\n.dropup .btn-lg .caret {\n  border-width: 0 5px 5px;\n}\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-bottom-left-radius: 4px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  float: none;\n  display: table-cell;\n  width: 1%;\n}\n\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n\n[data-toggle="buttons"] > .btn > input[type="radio"],\n[data-toggle="buttons"] > .btn > input[type="checkbox"] {\n  display: none;\n}\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n\n.input-group[class*="col-"] {\n  float: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 64px;\n  padding: 18px 27px;\n  font-size: 19px;\n  line-height: 1.33;\n  border-radius: 6px;\n}\n\nselect.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n  height: 64px;\n  line-height: 64px;\n}\n\ntextarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn,\nselect[multiple].input-group-lg > .form-control,\nselect[multiple].input-group-lg > .input-group-addon,\nselect[multiple].input-group-lg > .input-group-btn > .btn {\n  height: auto;\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 33px;\n  padding: 6px 9px;\n  font-size: 13px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\nselect.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n  height: 33px;\n  line-height: 33px;\n}\n\ntextarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn,\nselect[multiple].input-group-sm > .form-control,\nselect[multiple].input-group-sm > .input-group-addon,\nselect[multiple].input-group-sm > .input-group-btn > .btn {\n  height: auto;\n}\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n\n.input-group-addon {\n  padding: 10px 15px;\n  font-size: 15px;\n  font-weight: normal;\n  line-height: 1;\n  color: #2c3e50;\n  text-align: center;\n  background-color: #ecf0f1;\n  border: 1px solid #dce4ec;\n  border-radius: 4px;\n}\n\n.input-group-addon.input-sm {\n  padding: 6px 9px;\n  font-size: 13px;\n  border-radius: 3px;\n}\n\n.input-group-addon.input-lg {\n  padding: 18px 27px;\n  font-size: 19px;\n  border-radius: 6px;\n}\n\n.input-group-addon input[type="radio"],\n.input-group-addon input[type="checkbox"] {\n  margin-top: 0;\n}\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.input-group-addon:first-child {\n  border-right: 0;\n}\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.input-group-addon:last-child {\n  border-left: 0;\n}\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n\n.input-group-btn > .btn {\n  position: relative;\n}\n\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  margin-left: -1px;\n}\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n}\n\n.nav > li {\n  position: relative;\n  display: block;\n}\n\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #ecf0f1;\n}\n\n.nav > li.disabled > a {\n  color: #b4bcc2;\n}\n\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #b4bcc2;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: not-allowed;\n}\n\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #ecf0f1;\n  border-color: #18bc9c;\n}\n\n.nav .nav-divider {\n  height: 1px;\n  margin: 9.5px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n\n.nav > li > a > img {\n  max-width: none;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #ecf0f1;\n}\n\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n\n.nav-tabs > li > a:hover {\n  border-color: #ecf0f1 #ecf0f1 #ecf0f1;\n}\n\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #2c3e50;\n  background-color: #ffffff;\n  border: 1px solid #ecf0f1;\n  border-bottom-color: transparent;\n  cursor: default;\n}\n\n.nav-tabs.nav-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n\n.nav-tabs.nav-justified > li > a {\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ecf0f1;\n}\n\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ecf0f1;\n    border-radius: 4px 4px 0 0;\n  }\n\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #ffffff;\n  }\n}\n\n.nav-pills > li {\n  float: left;\n}\n\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #ffffff;\n  background-color: #2c3e50;\n}\n\n.nav-stacked > li {\n  float: none;\n}\n\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n\n.nav-justified {\n  width: 100%;\n}\n\n.nav-justified > li {\n  float: none;\n}\n\n.nav-justified > li > a {\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n\n@media (min-width: 768px) {\n  .nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n\n  .nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n\n.nav-tabs-justified {\n  border-bottom: 0;\n}\n\n.nav-tabs-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n\n.nav-tabs-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus {\n  border: 1px solid #ecf0f1;\n}\n\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a {\n    border-bottom: 1px solid #ecf0f1;\n    border-radius: 4px 4px 0 0;\n  }\n\n  .nav-tabs-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus {\n    border-bottom-color: #ffffff;\n  }\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n\n.tab-content > .active {\n  display: block;\n}\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.navbar {\n  position: relative;\n  min-height: 60px;\n  margin-bottom: 21px;\n  border: 1px solid transparent;\n}\n\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n\n.navbar-collapse {\n  max-height: 340px;\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch;\n}\n\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    box-shadow: none;\n  }\n\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n\n.container > .navbar-header,\n.container-fluid > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container-fluid > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n\n.navbar-brand {\n  float: left;\n  padding: 19.5px 15px;\n  font-size: 19px;\n  line-height: 21px;\n  height: 60px;\n}\n\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 13px;\n  margin-bottom: 13px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.navbar-toggle:focus {\n  outline: none;\n}\n\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n\n.navbar-nav {\n  margin: 9.75px -15px;\n}\n\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 21px;\n}\n\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 21px;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n\n  .navbar-nav > li {\n    float: left;\n  }\n\n  .navbar-nav > li > a {\n    padding-top: 19.5px;\n    padding-bottom: 19.5px;\n  }\n\n  .navbar-nav.navbar-right:last-child {\n    margin-right: -15px;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n\n  .navbar-right {\n    float: right !important;\n  }\n}\n\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 8.5px;\n  margin-bottom: 8.5px;\n}\n\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-left: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .radio input[type="radio"],\n  .navbar-form .checkbox input[type="checkbox"] {\n    float: none;\n    margin-left: 0;\n  }\n\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    border: 0;\n    margin-left: 0;\n    margin-right: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n\n  .navbar-form.navbar-right:last-child {\n    margin-right: -15px;\n  }\n}\n\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.navbar-btn {\n  margin-top: 8.5px;\n  margin-bottom: 8.5px;\n}\n\n.navbar-btn.btn-sm {\n  margin-top: 13.5px;\n  margin-bottom: 13.5px;\n}\n\n.navbar-btn.btn-xs {\n  margin-top: 19px;\n  margin-bottom: 19px;\n}\n\n.navbar-text {\n  margin-top: 19.5px;\n  margin-bottom: 19.5px;\n}\n\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-left: 15px;\n    margin-right: 15px;\n  }\n\n  .navbar-text.navbar-right:last-child {\n    margin-right: 0;\n  }\n}\n\n.navbar-default {\n  background-color: #2c3e50;\n  border-color: #202d3b;\n}\n\n.navbar-default .navbar-brand {\n  color: #ffffff;\n}\n\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #18bc9c;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-text {\n  color: #777777;\n}\n\n.navbar-default .navbar-nav > li > a {\n  color: #ffffff;\n}\n\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #18bc9c;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #ffffff;\n  background-color: #1a242f;\n}\n\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #cccccc;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-toggle {\n  border-color: #1a242f;\n}\n\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #1a242f;\n}\n\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #ffffff;\n}\n\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #202d3b;\n}\n\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  background-color: #1a242f;\n  color: #ffffff;\n}\n\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #ffffff;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #18bc9c;\n    background-color: transparent;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #ffffff;\n    background-color: #1a242f;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #cccccc;\n    background-color: transparent;\n  }\n}\n\n.navbar-default .navbar-link {\n  color: #ffffff;\n}\n\n.navbar-default .navbar-link:hover {\n  color: #18bc9c;\n}\n\n.navbar-inverse {\n  background-color: #18bc9c;\n  border-color: #128f76;\n}\n\n.navbar-inverse .navbar-brand {\n  color: #ffffff;\n}\n\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #2c3e50;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-text {\n  color: #ffffff;\n}\n\n.navbar-inverse .navbar-nav > li > a {\n  color: #ffffff;\n}\n\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #2c3e50;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #ffffff;\n  background-color: #15a589;\n}\n\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #cccccc;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-toggle {\n  border-color: #128f76;\n}\n\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #128f76;\n}\n\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #ffffff;\n}\n\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #149c82;\n}\n\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  background-color: #15a589;\n  color: #ffffff;\n}\n\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #128f76;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #128f76;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #ffffff;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #2c3e50;\n    background-color: transparent;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #ffffff;\n    background-color: #15a589;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #cccccc;\n    background-color: transparent;\n  }\n}\n\n.navbar-inverse .navbar-link {\n  color: #ffffff;\n}\n\n.navbar-inverse .navbar-link:hover {\n  color: #2c3e50;\n}\n\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 21px;\n  list-style: none;\n  background-color: #ecf0f1;\n  border-radius: 4px;\n}\n\n.breadcrumb > li {\n  display: inline-block;\n}\n\n.breadcrumb > li + li:before {\n  content: "/\\00a0";\n  padding: 0 5px;\n  color: #cccccc;\n}\n\n.breadcrumb > .active {\n  color: #95a5a6;\n}\n\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 21px 0;\n  border-radius: 4px;\n}\n\n.pagination > li {\n  display: inline;\n}\n\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 10px 15px;\n  line-height: 1.42857143;\n  text-decoration: none;\n  color: #ffffff;\n  background-color: #18bc9c;\n  border: 1px solid transparent;\n  margin-left: -1px;\n}\n\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  color: #ffffff;\n  background-color: #0f7864;\n  border-color: transparent;\n}\n\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  z-index: 2;\n  color: #ffffff;\n  background-color: #0f7864;\n  border-color: transparent;\n  cursor: default;\n}\n\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #ecf0f1;\n  background-color: #3be6c4;\n  border-color: transparent;\n  cursor: not-allowed;\n}\n\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 18px 27px;\n  font-size: 19px;\n}\n\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px;\n}\n\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px;\n}\n\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 6px 9px;\n  font-size: 13px;\n}\n\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n\n.pager {\n  padding-left: 0;\n  margin: 21px 0;\n  list-style: none;\n  text-align: center;\n}\n\n.pager li {\n  display: inline;\n}\n\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #18bc9c;\n  border: 1px solid transparent;\n  border-radius: 15px;\n}\n\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #0f7864;\n}\n\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #ffffff;\n  background-color: #18bc9c;\n  cursor: not-allowed;\n}\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #ffffff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\n\n.label[href]:hover,\n.label[href]:focus {\n  color: #ffffff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.label:empty {\n  display: none;\n}\n\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n\n.label-default {\n  background-color: #95a5a6;\n}\n\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #798d8f;\n}\n\n.label-primary {\n  background-color: #2c3e50;\n}\n\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #1a242f;\n}\n\n.label-success {\n  background-color: #18bc9c;\n}\n\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #128f76;\n}\n\n.label-info {\n  background-color: #3498db;\n}\n\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #217dbb;\n}\n\n.label-warning {\n  background-color: #f39c12;\n}\n\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #c87f0a;\n}\n\n.label-danger {\n  background-color: #e74c3c;\n}\n\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #d62c1a;\n}\n\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 13px;\n  font-weight: bold;\n  color: #ffffff;\n  line-height: 1;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #95a5a6;\n  border-radius: 10px;\n}\n\n.badge:empty {\n  display: none;\n}\n\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n\n.btn-xs .badge {\n  top: 0;\n  padding: 1px 5px;\n}\n\na.badge:hover,\na.badge:focus {\n  color: #ffffff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\na.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #18bc9c;\n  background-color: #ffffff;\n}\n\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n\n.jumbotron {\n  padding: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #ecf0f1;\n}\n\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 23px;\n  font-weight: 200;\n}\n\n.container .jumbotron {\n  border-radius: 6px;\n}\n\n.jumbotron .container {\n  max-width: 100%;\n}\n\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n\n  .container .jumbotron {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 67.5px;\n  }\n}\n\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 21px;\n  line-height: 1.42857143;\n  background-color: #ffffff;\n  border: 1px solid #ecf0f1;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n\n.thumbnail > img,\n.thumbnail a > img {\n  margin-left: auto;\n  margin-right: auto;\n}\n\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #18bc9c;\n}\n\n.thumbnail .caption {\n  padding: 9px;\n  color: #2c3e50;\n}\n\n.alert {\n  padding: 15px;\n  margin-bottom: 21px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n\n.alert .alert-link {\n  font-weight: bold;\n}\n\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n\n.alert > p + p {\n  margin-top: 5px;\n}\n\n.alert-dismissable {\n  padding-right: 35px;\n}\n\n.alert-dismissable .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n\n.alert-success {\n  background-color: #18bc9c;\n  border-color: #18bc9c;\n  color: #ffffff;\n}\n\n.alert-success hr {\n  border-top-color: #15a589;\n}\n\n.alert-success .alert-link {\n  color: #e6e6e6;\n}\n\n.alert-info {\n  background-color: #3498db;\n  border-color: #3498db;\n  color: #ffffff;\n}\n\n.alert-info hr {\n  border-top-color: #258cd1;\n}\n\n.alert-info .alert-link {\n  color: #e6e6e6;\n}\n\n.alert-warning {\n  background-color: #f39c12;\n  border-color: #f39c12;\n  color: #ffffff;\n}\n\n.alert-warning hr {\n  border-top-color: #e08e0b;\n}\n\n.alert-warning .alert-link {\n  color: #e6e6e6;\n}\n\n.alert-danger {\n  background-color: #e74c3c;\n  border-color: #e74c3c;\n  color: #ffffff;\n}\n\n.alert-danger hr {\n  border-top-color: #e43725;\n}\n\n.alert-danger .alert-link {\n  color: #e6e6e6;\n}\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n.progress {\n  overflow: hidden;\n  height: 21px;\n  margin-bottom: 21px;\n  background-color: #ecf0f1;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 13px;\n  line-height: 21px;\n  color: #ffffff;\n  text-align: center;\n  background-color: #2c3e50;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  transition: width 0.6s ease;\n}\n\n.progress-striped .progress-bar {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px;\n}\n\n.progress.active .progress-bar {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite;\n}\n\n.progress-bar-success {\n  background-color: #18bc9c;\n}\n\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.progress-bar-info {\n  background-color: #3498db;\n}\n\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.progress-bar-warning {\n  background-color: #f39c12;\n}\n\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.progress-bar-danger {\n  background-color: #e74c3c;\n}\n\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.media,\n.media-body {\n  overflow: hidden;\n  zoom: 1;\n}\n\n.media,\n.media .media {\n  margin-top: 15px;\n}\n\n.media:first-child {\n  margin-top: 0;\n}\n\n.media-object {\n  display: block;\n}\n\n.media-heading {\n  margin: 0 0 5px;\n}\n\n.media > .pull-left {\n  margin-right: 10px;\n}\n\n.media > .pull-right {\n  margin-left: 10px;\n}\n\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0;\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #ffffff;\n  border: 1px solid #ecf0f1;\n}\n\n.list-group-item:first-child {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n}\n\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.list-group-item > .badge {\n  float: right;\n}\n\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n\na.list-group-item {\n  color: #555555;\n}\n\na.list-group-item .list-group-item-heading {\n  color: #333333;\n}\n\na.list-group-item:hover,\na.list-group-item:focus {\n  text-decoration: none;\n  background-color: #ecf0f1;\n}\n\na.list-group-item.active,\na.list-group-item.active:hover,\na.list-group-item.active:focus {\n  z-index: 2;\n  color: #ffffff;\n  background-color: #2c3e50;\n  border-color: #2c3e50;\n}\n\na.list-group-item.active .list-group-item-heading,\na.list-group-item.active:hover .list-group-item-heading,\na.list-group-item.active:focus .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item.active .list-group-item-text,\na.list-group-item.active:hover .list-group-item-text,\na.list-group-item.active:focus .list-group-item-text {\n  color: #8aa4be;\n}\n\n.list-group-item-success {\n  color: #ffffff;\n  background-color: #18bc9c;\n}\n\na.list-group-item-success {\n  color: #ffffff;\n}\n\na.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-success:hover,\na.list-group-item-success:focus {\n  color: #ffffff;\n  background-color: #15a589;\n}\n\na.list-group-item-success.active,\na.list-group-item-success.active:hover,\na.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n\n.list-group-item-info {\n  color: #ffffff;\n  background-color: #3498db;\n}\n\na.list-group-item-info {\n  color: #ffffff;\n}\n\na.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-info:hover,\na.list-group-item-info:focus {\n  color: #ffffff;\n  background-color: #258cd1;\n}\n\na.list-group-item-info.active,\na.list-group-item-info.active:hover,\na.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n\n.list-group-item-warning {\n  color: #ffffff;\n  background-color: #f39c12;\n}\n\na.list-group-item-warning {\n  color: #ffffff;\n}\n\na.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-warning:hover,\na.list-group-item-warning:focus {\n  color: #ffffff;\n  background-color: #e08e0b;\n}\n\na.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n\n.list-group-item-danger {\n  color: #ffffff;\n  background-color: #e74c3c;\n}\n\na.list-group-item-danger {\n  color: #ffffff;\n}\n\na.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-danger:hover,\na.list-group-item-danger:focus {\n  color: #ffffff;\n  background-color: #e43725;\n}\n\na.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n\n.panel {\n  margin-bottom: 21px;\n  background-color: #ffffff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.panel-body {\n  padding: 15px;\n}\n\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 17px;\n  color: inherit;\n}\n\n.panel-title > a {\n  color: inherit;\n}\n\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #ecf0f1;\n  border-top: 1px solid #ecf0f1;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .list-group {\n  margin-bottom: 0;\n}\n\n.panel > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n\n.panel > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.panel > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n\n.panel > .table,\n.panel > .table-responsive > .table {\n  margin-bottom: 0;\n}\n\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive {\n  border-top: 1px solid #ecf0f1;\n}\n\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0;\n}\n\n.panel-group {\n  margin-bottom: 21px;\n}\n\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n\n.panel-group .panel-heading + .panel-collapse .panel-body {\n  border-top: 1px solid #ecf0f1;\n}\n\n.panel-group .panel-footer {\n  border-top: 0;\n}\n\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ecf0f1;\n}\n\n.panel-default {\n  border-color: #ecf0f1;\n}\n\n.panel-default > .panel-heading {\n  color: #2c3e50;\n  background-color: #ecf0f1;\n  border-color: #ecf0f1;\n}\n\n.panel-default > .panel-heading + .panel-collapse .panel-body {\n  border-top-color: #ecf0f1;\n}\n\n.panel-default > .panel-footer + .panel-collapse .panel-body {\n  border-bottom-color: #ecf0f1;\n}\n\n.panel-primary {\n  border-color: #2c3e50;\n}\n\n.panel-primary > .panel-heading {\n  color: #ffffff;\n  background-color: #2c3e50;\n  border-color: #2c3e50;\n}\n\n.panel-primary > .panel-heading + .panel-collapse .panel-body {\n  border-top-color: #2c3e50;\n}\n\n.panel-primary > .panel-footer + .panel-collapse .panel-body {\n  border-bottom-color: #2c3e50;\n}\n\n.panel-success {\n  border-color: #18bc9c;\n}\n\n.panel-success > .panel-heading {\n  color: #ffffff;\n  background-color: #18bc9c;\n  border-color: #18bc9c;\n}\n\n.panel-success > .panel-heading + .panel-collapse .panel-body {\n  border-top-color: #18bc9c;\n}\n\n.panel-success > .panel-footer + .panel-collapse .panel-body {\n  border-bottom-color: #18bc9c;\n}\n\n.panel-info {\n  border-color: #3498db;\n}\n\n.panel-info > .panel-heading {\n  color: #ffffff;\n  background-color: #3498db;\n  border-color: #3498db;\n}\n\n.panel-info > .panel-heading + .panel-collapse .panel-body {\n  border-top-color: #3498db;\n}\n\n.panel-info > .panel-footer + .panel-collapse .panel-body {\n  border-bottom-color: #3498db;\n}\n\n.panel-warning {\n  border-color: #f39c12;\n}\n\n.panel-warning > .panel-heading {\n  color: #ffffff;\n  background-color: #f39c12;\n  border-color: #f39c12;\n}\n\n.panel-warning > .panel-heading + .panel-collapse .panel-body {\n  border-top-color: #f39c12;\n}\n\n.panel-warning > .panel-footer + .panel-collapse .panel-body {\n  border-bottom-color: #f39c12;\n}\n\n.panel-danger {\n  border-color: #e74c3c;\n}\n\n.panel-danger > .panel-heading {\n  color: #ffffff;\n  background-color: #e74c3c;\n  border-color: #e74c3c;\n}\n\n.panel-danger > .panel-heading + .panel-collapse .panel-body {\n  border-top-color: #e74c3c;\n}\n\n.panel-danger > .panel-footer + .panel-collapse .panel-body {\n  border-bottom-color: #e74c3c;\n}\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #ecf0f1;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, 0.15);\n}\n\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n\n.close {\n  float: right;\n  font-size: 22.5px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000000;\n  text-shadow: 0 1px 0 #ffffff;\n  opacity: 0.2;\n  filter: alpha(opacity=20);\n}\n\n.close:hover,\n.close:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n\n.modal-open {\n  overflow: hidden;\n}\n\n.modal {\n  display: none;\n  overflow: auto;\n  overflow-y: scroll;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n\n.modal.fade .modal-dialog {\n  -webkit-transform: translate(0, -25%);\n  -ms-transform: translate(0, -25%);\n  transform: translate(0, -25%);\n  -webkit-transition: -webkit-transform 0.3s ease-out;\n  -moz-transition: -moz-transform 0.3s ease-out;\n  -o-transition: -o-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n}\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n\n.modal-content {\n  position: relative;\n  background-color: #ffffff;\n  border: 1px solid #999999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: none;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000000;\n}\n\n.modal-backdrop.fade {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.modal-backdrop.in {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n  min-height: 16.42857143px;\n}\n\n.modal-header .close {\n  margin-top: -2px;\n}\n\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n\n.modal-body {\n  position: relative;\n  padding: 20px;\n}\n\n.modal-footer {\n  margin-top: 15px;\n  padding: 19px 20px 20px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n\n.modal-footer .btn + .btn {\n  margin-left: 5px;\n  margin-bottom: 0;\n}\n\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n  }\n\n  .modal-sm {\n    width: 300px;\n  }\n}\n\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 1030;\n  display: block;\n  visibility: visible;\n  font-size: 13px;\n  line-height: 1.4;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.tooltip.in {\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n\n.tooltip.top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n\n.tooltip.right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n\n.tooltip.bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n\n.tooltip.left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #ffffff;\n  text-align: center;\n  text-decoration: none;\n  background-color: rgba(0, 0, 0, 0.9);\n  border-radius: 4px;\n}\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: rgba(0, 0, 0, 0.9);\n}\n\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  border-width: 5px 5px 0;\n  border-top-color: rgba(0, 0, 0, 0.9);\n}\n\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  border-width: 5px 5px 0;\n  border-top-color: rgba(0, 0, 0, 0.9);\n}\n\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: rgba(0, 0, 0, 0.9);\n}\n\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: rgba(0, 0, 0, 0.9);\n}\n\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: rgba(0, 0, 0, 0.9);\n}\n\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: rgba(0, 0, 0, 0.9);\n}\n\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: rgba(0, 0, 0, 0.9);\n}\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1010;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  text-align: left;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #cccccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  white-space: normal;\n}\n\n.popover.top {\n  margin-top: -10px;\n}\n\n.popover.right {\n  margin-left: 10px;\n}\n\n.popover.bottom {\n  margin-top: 10px;\n}\n\n.popover.left {\n  margin-left: -10px;\n}\n\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 15px;\n  font-weight: normal;\n  line-height: 18px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n\n.popover-content {\n  padding: 9px 14px;\n}\n\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.popover > .arrow {\n  border-width: 11px;\n}\n\n.popover > .arrow:after {\n  border-width: 10px;\n  content: "";\n}\n\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px;\n}\n\n.popover.top > .arrow:after {\n  content: " ";\n  bottom: 1px;\n  margin-left: -10px;\n  border-bottom-width: 0;\n  border-top-color: #ffffff;\n}\n\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n\n.popover.right > .arrow:after {\n  content: " ";\n  left: 1px;\n  bottom: -10px;\n  border-left-width: 0;\n  border-right-color: #ffffff;\n}\n\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px;\n}\n\n.popover.bottom > .arrow:after {\n  content: " ";\n  top: 1px;\n  margin-left: -10px;\n  border-top-width: 0;\n  border-bottom-color: #ffffff;\n}\n\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n\n.popover.left > .arrow:after {\n  content: " ";\n  right: 1px;\n  border-right-width: 0;\n  border-left-color: #ffffff;\n  bottom: -10px;\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.carousel-inner > .item {\n  display: none;\n  position: relative;\n  -webkit-transition: 0.6s ease-in-out left;\n  transition: 0.6s ease-in-out left;\n}\n\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  line-height: 1;\n}\n\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n\n.carousel-inner > .active {\n  left: 0;\n}\n\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.carousel-inner > .next {\n  left: 100%;\n}\n\n.carousel-inner > .prev {\n  left: -100%;\n}\n\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n\n.carousel-inner > .active.left {\n  left: -100%;\n}\n\n.carousel-inner > .active.right {\n  left: 100%;\n}\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #ffffff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n}\n\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, color-stop(rgba(0, 0, 0, 0.5) 0%), color-stop(rgba(0, 0, 0, 0.0001) 100%));\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#80000000\', endColorstr=\'#00000000\', GradientType=1);\n}\n\n.carousel-control.right {\n  left: auto;\n  right: 0;\n  background-image: -webkit-linear-gradient(left, color-stop(rgba(0, 0, 0, 0.0001) 0%), color-stop(rgba(0, 0, 0, 0.5) 100%));\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#00000000\', endColorstr=\'#80000000\', GradientType=1);\n}\n\n.carousel-control:hover,\n.carousel-control:focus {\n  outline: none;\n  color: #ffffff;\n  text-decoration: none;\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n}\n\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n}\n\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n}\n\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  font-family: serif;\n}\n\n.carousel-control .icon-prev:before {\n  content: \'\\2039\';\n}\n\n.carousel-control .icon-next:before {\n  content: \'\\203a\';\n}\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center;\n}\n\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  border: 1px solid #ffffff;\n  border-radius: 10px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.carousel-indicators .active {\n  margin: 0;\n  width: 12px;\n  height: 12px;\n  background-color: #ffffff;\n}\n\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #ffffff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n}\n\n.carousel-caption .btn {\n  text-shadow: none;\n}\n\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -15px;\n    margin-left: -15px;\n    font-size: 30px;\n  }\n\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px;\n  }\n\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n\n@-ms-viewport {\n  width: device-width;\n}\n\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n\n  table.visible-xs {\n    display: table;\n  }\n\n  tr.visible-xs {\n    display: table-row !important;\n  }\n\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n\n  table.visible-sm {\n    display: table;\n  }\n\n  tr.visible-sm {\n    display: table-row !important;\n  }\n\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n\n  table.visible-md {\n    display: table;\n  }\n\n  tr.visible-md {\n    display: table-row !important;\n  }\n\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n\n  table.visible-lg {\n    display: table;\n  }\n\n  tr.visible-lg {\n    display: table-row !important;\n  }\n\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n\n.visible-print {\n  display: none !important;\n}\n\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n\n  table.visible-print {\n    display: table;\n  }\n\n  tr.visible-print {\n    display: table-row !important;\n  }\n\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n\n.btn:active {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.text-primary,\n.text-primary:hover {\n  color: #2c3e50;\n}\n\n.text-success,\n.text-success:hover {\n  color: #18bc9c;\n}\n\n.text-danger,\n.text-danger:hover {\n  color: #e74c3c;\n}\n\n.text-warning,\n.text-warning:hover {\n  color: #f39c12;\n}\n\n.text-info,\n.text-info:hover {\n  color: #3498db;\n}\n\ntable a,\n.table a {\n  text-decoration: underline;\n}\n\ntable .success,\n.table .success,\ntable .warning,\n.table .warning,\ntable .danger,\n.table .danger,\ntable .info,\n.table .info {\n  color: #fff;\n}\n\ntable .success a,\n.table .success a,\ntable .warning a,\n.table .warning a,\ntable .danger a,\n.table .danger a,\ntable .info a,\n.table .info a {\n  color: #fff;\n}\n\ntable > thead > tr > th,\n.table > thead > tr > th,\ntable > tbody > tr > th,\n.table > tbody > tr > th,\ntable > tfoot > tr > th,\n.table > tfoot > tr > th,\ntable > thead > tr > td,\n.table > thead > tr > td,\ntable > tbody > tr > td,\n.table > tbody > tr > td,\ntable > tfoot > tr > td,\n.table > tfoot > tr > td {\n  border: none;\n}\n\ntable-bordered > thead > tr > th,\n.table-bordered > thead > tr > th,\ntable-bordered > tbody > tr > th,\n.table-bordered > tbody > tr > th,\ntable-bordered > tfoot > tr > th,\n.table-bordered > tfoot > tr > th,\ntable-bordered > thead > tr > td,\n.table-bordered > thead > tr > td,\ntable-bordered > tbody > tr > td,\n.table-bordered > tbody > tr > td,\ntable-bordered > tfoot > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ecf0f1;\n}\n\n.form-control,\ntextarea.form-control,\ninput[type="text"],\ninput[type="password"],\ninput[type="datetime"],\ninput[type="datetime-local"],\ninput[type="date"],\ninput[type="month"],\ninput[type="time"],\ninput[type="week"],\ninput[type="number"],\ninput[type="email"],\ninput[type="url"],\ninput[type="search"],\ninput[type="tel"],\ninput[type="color"],\n.uneditable-input {\n  border-width: 2px;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.form-control:focus,\ntextarea.form-control:focus,\ninput[type="text"]:focus,\ninput[type="password"]:focus,\ninput[type="datetime"]:focus,\ninput[type="datetime-local"]:focus,\ninput[type="date"]:focus,\ninput[type="month"]:focus,\ninput[type="time"]:focus,\ninput[type="week"]:focus,\ninput[type="number"]:focus,\ninput[type="email"]:focus,\ninput[type="url"]:focus,\ninput[type="search"]:focus,\ninput[type="tel"]:focus,\ninput[type="color"]:focus,\n.uneditable-input:focus {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.has-warning .help-block,\n.has-warning .control-label {\n  color: #f39c12;\n}\n\n.has-warning .form-control,\n.has-warning .form-control:focus {\n  border: 2px solid #f39c12;\n}\n\n.has-error .help-block,\n.has-error .control-label {\n  color: #e74c3c;\n}\n\n.has-error .form-control,\n.has-error .form-control:focus {\n  border: 2px solid #e74c3c;\n}\n\n.has-success .help-block,\n.has-success .control-label {\n  color: #18bc9c;\n}\n\n.has-success .form-control,\n.has-success .form-control:focus {\n  border: 2px solid #18bc9c;\n}\n\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  border-color: transparent;\n}\n\n.pager a,\n.pager a:hover {\n  color: #fff;\n}\n\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  background-color: #3be6c4;\n}\n\n.alert a,\n.alert .alert-link {\n  color: #fff;\n  text-decoration: underline;\n}\n\n.progress {\n  height: 10px;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.well {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.clearfix:before,\n.clearfix:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-footer:before,\n.modal-footer:after {\n  content: " ";\n  display: table;\n}\n\n.clearfix:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-footer:after {\n  clear: both;\n}\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.pull-right {\n  float: right !important;\n}\n\n.pull-left {\n  float: left !important;\n}\n\n.hide {\n  display: none !important;\n}\n\n.show {\n  display: block !important;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.hidden {\n  display: none !important;\n  visibility: hidden !important;\n}\n\n.affix {\n  position: fixed;\n}\n');
}));                                                                                                                // 6
                                                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/template.style.css.js                                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("style_css");                                                                                  // 2
Template["style_css"] = new Template("Template.style_css", (function() {                                            // 3
  var view = this;                                                                                                  // 4
  return HTML.STYLE('\n.houston .navbar > .navbar-inner > .container {\n  margin-top: 0px;\n}\n.houston .navbar > .navbar-inner > .container {\n  margin-top: 0px;\n}\n\n.houston > .container {\n  margin-top: 50px;\n  padding: 10px;\n  overflow-x: auto;\n  /*border: 1px solid #eee;*/\n}\n\n.houston textarea {\n  width: 100%;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.houston {\n  visibility: visible;\n}\n\n.houston .houston-collection {\n  overflow: hidden;\n}\n\n.houston .action-cell {\n  text-align: right;\n}\n.houston .custom-houston-action {\n  margin-right: 5px;\n}\n\n.houston #houston-report-bug {\n  float: left;\n}\n\n.houston .houston-form {\n  max-width: 330px;\n  margin-top: 100px;\n}\n\n.houston-form > form {\n  margin: 0 auto;\n  padding: 15px;\n}\n\n.houston-form .form-heading,\n.houston-form .form-control {\n  position: relative;\n  height: auto;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.houston-form .form-heading {\n  font-size: 20px;\n}\n\n.houston-sign-in-form .form-heading {\n  padding-top: 0;\n  margin-top: 0;\n}\n\n.houston-form .form-control:focus {\n  z-index: 2;\n}\n\n.houston-form input {\n  border-radius: 8px;\n}\n\n.houston-form input:first-of-type {\n  margin-bottom: -2px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.houston-form input:last-of-type {\n  margin-bottom: 20px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.fa:after {\n  content: "', HTML.CharRef({
    html: "&nbsp;",                                                                                                 // 6
    str: " "                                                                                                        // 7
  }), '";\n}\n\n.brand > small {\n  color: #ddd;\n  font-size: 14px;\n}\n\n/* Sidebar */\n/* Hide for mobile, show later in CSS file */\n.sidebar {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 51px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n.houston .nav-sidebar {\n  margin-right: -21px; /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n\n.houston .nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\n.houston .nav-sidebar > .active > a,\n.houston .nav-sidebar > .active > a:hover,\n.houston .nav-sidebar > .active > a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n/*\n * Main content\n */\n.houston .main {\n  padding-top: 60px;\n}\n\n@media (min-width: 768px) {\n  .houston .main {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n}\n\n.houston .main .page-header {\n  margin-top: 0;\n}\n\n/*\n * Document view\n */\n#flash-message {\n  position: fixed;\n  text-align: center;\n  z-index: 1000;\n  width: 100%;\n  bottom: -80px;\n  padding: 20px;\n  left: 0;\n  transition: bottom .3s ease;\n  -moz-transition: bottom .3s ease;\n  -webkit-transition: bottom .3s ease;\n}\n#flash-message.up {\n  bottom: 0;\n}\n#houston-doc-actions {\n  margin-bottom: 80px;\n}\n');
}));                                                                                                                // 9
                                                                                                                    // 10
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/lib/collections.coffee.js                                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var root;

root = typeof exports !== "undefined" && exports !== null ? exports : this;

if (root.Houston == null) {
  root.Houston = {};
}

if (Houston._collections == null) {
  Houston._collections = {};
}

Houston._collections.collections = new Meteor.Collection('houston_collections');

Houston._admins = new Meteor.Collection('houston_admins');

Houston._user_is_admin = function(id) {
  return (id != null) && Houston._admins.findOne({
    user_id: id
  });
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/lib/shared.coffee.js                                                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var root;

root = typeof exports !== "undefined" && exports !== null ? exports : this;

if (root.Houston == null) {
  root.Houston = {};
}

Houston._houstonize = function(name) {
  return "_houston_" + name;
};

Houston._custom_method_name = function(collection_name, method_name) {
  return Houston._houstonize("" + collection_name + "/" + method_name);
};

Houston._MAX_DOCS_TO_EXPLORE = 100;

Houston._get_fields_from_collection = function(collection) {
  return Houston._get_fields(collection.find().fetch());
};

Houston._get_fields = function(documents, options) {
  var document, find_fields, key, key_to_type, value, _i, _len, _ref, _results;
  if (options == null) {
    options = {};
  }
  key_to_type = options.exclude_id != null ? {} : {
    _id: 'ObjectId'
  };
  find_fields = function(document, prefix) {
    var full_path_key, key, value, _ref, _results;
    if (prefix == null) {
      prefix = '';
    }
    _ref = _.omit(document, '_id');
    _results = [];
    for (key in _ref) {
      value = _ref[key];
      if (typeof value === 'object') {
        if (value instanceof Date) {
          full_path_key = "" + prefix + key;
          _results.push(key_to_type[full_path_key] = "Date");
        } else {
          _results.push(find_fields(value, "" + prefix + key + "."));
        }
      } else if (typeof value !== 'function') {
        full_path_key = "" + prefix + key;
        _results.push(key_to_type[full_path_key] = typeof value);
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };
  _ref = documents.slice(0, +Houston._MAX_DOCS_TO_EXPLORE + 1 || 9e9);
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    document = _ref[_i];
    find_fields(document);
  }
  _results = [];
  for (key in key_to_type) {
    value = key_to_type[key];
    _results.push({
      name: key,
      type: value
    });
  }
  return _results;
};

Houston._get_field_names = function(documents) {
  return _.pluck(Houston._get_fields(documents), 'name');
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/lib/menu.coffee.js                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var root;

root = typeof exports !== "undefined" && exports !== null ? exports : this;

if (root.Houston == null) {
  root.Houston = {};
}

Houston.menu = function() {
  var item, _i, _len;
  for (_i = 0, _len = arguments.length; _i < _len; _i++) {
    item = arguments[_i];
    this.menu._add_menu_item(item);
  }
};

Houston.menu.dependency = new Deps.Dependency;

Houston.menu._menu_items = [];

Houston.menu._process_item = function(item) {
  if (item.type !== 'link' && item.type !== 'template') {
    throw new Meteor.Error(400, 'Can\'t recognize type: ' + item);
  }
  if (item.type === 'link') {
    item.path = item.use;
  } else if (item.type === 'template') {
    item.path = "" + Houston._ROOT_ROUTE + "/" + item.use;
  }
  return item;
};

Houston.menu._get_menu_items = function() {
  var item, _i, _len, _ref, _results;
  this.dependency.depend();
  _ref = this._menu_items;
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    item = _ref[_i];
    _results.push(this._process_item(item));
  }
  return _results;
};

Houston.menu._add_menu_item = function(item) {
  this._menu_items.push(item);
  return this.dependency.changed();
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/lib/shared.coffee.js                                                               //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var __slice = [].slice;

Houston._admin_user_exists = function() {
  return Houston._admins.find().count() > 0;
};

Houston.becomeAdmin = function() {
  return Houston._call('make_admin', Meteor.userId(), function() {
    Houston._subscribe_to_collections();
    return Houston._go('home');
  });
};

Houston._subscribe_to_collections = function() {
  if (Houston._collections_sub != null) {
    Houston._collections_sub.stop();
  }
  return Houston._collections_sub = Houston._subscribe('collections');
};

Handlebars.registerHelper('currentUserIsAdmin', function() {
  return Houston._user_is_admin(Meteor.userId());
});

Handlebars.registerHelper('adminUserExists', Houston._admin_user_exists);

if (Houston._collections == null) {
  Houston._collections = {};
}

Houston._get_collection = function(collection_name) {
  Houston._collections[collection_name] = Meteor.connection._mongo_livedata_collections[collection_name] || new Meteor.Collection(collection_name);
  return Houston._collections[collection_name];
};

Houston._session = function() {
  var key;
  key = Houston._houstonize(arguments[0]);
  if (arguments.length === 1) {
    return Session.get(key);
  } else if (arguments.length === 2) {
    return Session.set(key, arguments[1]);
  }
};

Houston._call = function() {
  var args, name;
  name = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  return Meteor.call.apply(Meteor, [Houston._houstonize(name)].concat(__slice.call(args)));
};

Houston._nested_field_lookup = function(object, path) {
  var part, result, _i, _len, _ref;
  if (object == null) {
    return '';
  }
  if (path === '_id' && typeof object._id === 'object') {
    return object._id._str;
  }
  result = object;
  _ref = path.split(".");
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    part = _ref[_i];
    result = result[part];
    if (result == null) {
      return '';
    }
  }
  if (typeof result !== 'object' || result instanceof Date) {
    return result;
  } else {
    return '';
  }
};

Houston._convert_to_correct_type = function(field, val, collection) {
  var constructor, find_obj, sample_val;
  find_obj = {};
  find_obj[field] = {
    $exists: true
  };
  sample_val = Houston._nested_field_lookup(collection.findOne(find_obj), field);
  constructor = sample_val.constructor;
  if (typeof sample_val === 'object') {
    return new constructor(val);
  } else if (typeof sample_val === 'boolean') {
    return val === 'true';
  } else {
    return constructor(val);
  }
};

Houston._get_type = function(field, collection) {
  var find_obj, sample_val;
  find_obj = {};
  find_obj[field] = {
    $exists: true
  };
  sample_val = Houston._nested_field_lookup(collection.findOne(find_obj), field);
  return typeof sample_val;
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/partials/admin_nav.coffee.js                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template._houston_navbar.events({
  'click #houston-logout': function(e) {
    e.preventDefault();
    return Meteor.logout();
  }
});

Template._houston_navbar.helpers({
  'bugreport_url': function() {
    var message;
    message = encodeURIComponent("To make sure we can help you quickly, please include the version of Houston\nyou are using, steps to replicate the issue, a description of what you were\nexpecting and a screenshot if relevant.\n\nThanks!");
    return "https://github.com/gterrono/houston/issues/new?body=" + message;
  },
  'menu_items': function() {
    return Houston.menu._get_menu_items();
  },
  'isActive': function() {
    var _ref;
    if (((_ref = Router.current()) != null ? _ref.path : void 0) === this.path) {
      return 'active';
    }
  }
});

Template._houston_sidenav.helpers({
  collections: function() {
    return Houston._collections.collections.find().fetch();
  },
  is_active: function(name) {
    return name === Houston._session('collection_name');
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/partials/flash_message.coffee.js                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Houston._show_flash = function(err, result) {
  Houston._session('flash_error', err != null);
  if (err != null) {
    Houston._session('flash_message', "Error: " + err.message);
  } else {
    Houston._session('flash_message', result);
  }
  Houston._session('flash_show', true);
  return setTimeout((function() {
    return Houston._session('flash_show', false);
  }), 2000);
};

Template._houston_flash_message.helpers({
  err: function() {
    return Houston._session('flash_error');
  },
  show: function() {
    return Houston._session('flash_show');
  },
  message: function() {
    return Houston._session('flash_message');
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/partials/custom_actions.coffee.js                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template._houston_custom_actions.helpers({
  actions: function() {
    var action, _i, _len, _ref, _results;
    if (this.collection_info.method_names) {
      _ref = this.collection_info.method_names;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        action = _ref[_i];
        _results.push(_.extend({
          action: action
        }, this));
      }
      return _results;
    }
  }
});

Template._houston_custom_actions.events({
  'click .custom-houston-action': function(e) {
    e.preventDefault();
    return Meteor.call(Houston._custom_method_name(this.collection_info.name, this.action), this.document, Houston._show_flash);
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/custom_template_view.coffee.js                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template._houston_custom_template_view.helpers({
  'customTemplate': function() {
    return Template[this.template];
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/admin_login.coffee.js                                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template._houston_login.helpers({
  logged_in: function() {
    return Meteor.user();
  }
});

Template._houston_login.events({
  'submit #houston-sign-in-form': function(e) {
    var afterLogin, email, password;
    e.preventDefault();
    email = $('input[name="houston-email"]').val();
    password = $('input[name="houston-password"]').val();
    afterLogin = function(error) {
      if (error) {
        return alert(error);
      } else {
        return Houston._go('home');
      }
    };
    if (Houston._admin_user_exists()) {
      return Meteor.loginWithPassword(email, password, afterLogin);
    } else {
      return Accounts.createUser({
        email: email,
        password: password
      }, function(error) {
        if (error) {
          return afterLogin(error);
        }
        return Houston.becomeAdmin();
      });
    }
  },
  'click #houston-logout': function(e) {
    e.preventDefault();
    Meteor.logout();
    return Houston._go('home');
  },
  'click #become-houston-admin': function(e) {
    e.preventDefault();
    return Houston.becomeAdmin();
  }
});

Template._houston_login.rendered = function() {
  return $(window).unbind('scroll');
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/collection_view.coffee.js                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var collection_count, collection_info, get_collection_view_fields, get_filter_query, get_sort_by, resubscribe;

get_sort_by = function() {
  var sort_by;
  sort_by = {};
  sort_by[Houston._session('sort_key')] = Houston._session('sort_order');
  return sort_by;
};

get_filter_query = function(collection) {
  var field_query, fill_query_with_regex, query;
  query = Houston._session('custom_selector') ? Houston._session('custom_selector') : (field_query = {}, fill_query_with_regex = function(session_key) {
    var key, val, _ref, _results;
    if (Houston._session(session_key) == null) {
      return;
    }
    _ref = Houston._session(session_key);
    _results = [];
    for (key in _ref) {
      val = _ref[key];
      val = Houston._convert_to_correct_type(key, val, collection);
      if (typeof val === 'string') {
        _results.push(field_query[key] = {
          $regex: val.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        });
      } else {
        _results.push(field_query[key] = val);
      }
    }
    return _results;
  }, fill_query_with_regex('field_selectors'), field_query);
  return query;
};

resubscribe = function(name) {
  var subscription_name;
  subscription_name = "_houston_" + name;
  Houston._paginated_subscription.stop();
  return Houston._paginated_subscription = Meteor.subscribeWithPagination(subscription_name, get_sort_by(), get_filter_query(Houston._get_collection(name)), Houston._page_length);
};

collection_info = function(name) {
  return Houston._collections.collections.findOne({
    name: name
  });
};

collection_count = function(name) {
  var _ref;
  return (_ref = collection_info(name)) != null ? _ref.count : void 0;
};

Template._houston_collection_view.helpers({
  collection_info: function() {
    return collection_info(this.collection);
  },
  custom_selector_error_class: function() {
    if (Houston._session("custom_selector_error")) {
      return "error";
    } else {
      return "";
    }
  },
  custom_selector_error: function() {
    return Houston._session("custom_selector_error");
  },
  field_filter_disabled: function() {
    if (Houston._session("custom_selector")) {
      return "disabled";
    } else {
      return "";
    }
  },
  headers: function() {
    return get_collection_view_fields(this.name);
  },
  nonid_headers: function() {
    return get_collection_view_fields(this.name).slice(1);
  },
  document_id: function() {
    return this._id + "";
  },
  num_of_records: function() {
    return collection_count(this.name) || "no";
  },
  pluralize: function() {
    if (collection_count(this.name) !== 1) {
      return 's';
    }
  },
  rows: function() {
    var collection, documents;
    collection = this.name;
    documents = typeof this !== "undefined" && this !== null ? this.find(get_filter_query(Houston._get_collection(collection)), {
      sort: get_sort_by()
    }).fetch() : void 0;
    return _.map(documents, function(d) {
      d.collection = collection;
      d._id = d._id._str || d._id;
      return d;
    });
  },
  values_in_order: function() {
    var field, field_name, field_value, fields_in_order, names_in_order, values, _i, _len, _ref, _ref1, _ref2, _results;
    fields_in_order = get_collection_view_fields(this.collection);
    names_in_order = _.clone(fields_in_order);
    values = (function() {
      var _i, _len, _ref, _results;
      _ref = fields_in_order.slice(1);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        field = _ref[_i];
        _results.push(Houston._nested_field_lookup(this, field.name));
      }
      return _results;
    }).call(this);
    _ref = _.zip(values, names_in_order.slice(1));
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      _ref1 = _ref[_i], field_value = _ref1[0], (_ref2 = _ref1[1], field_name = _ref2.name);
      _results.push({
        field_value: field_value.toString(),
        field_name: field_name,
        collection: this.collection
      });
    }
    return _results;
  },
  filter_value: function() {
    if (Houston._session('field_selectors') && Houston._session('field_selectors')[this]) {
      return Houston._session('field_selectors')[this];
    } else {
      return '';
    }
  }
});

Template._houston_collection_view.rendered = function() {
  var $win;
  $win = $(window);
  return $win.scroll(function() {
    if ($win.scrollTop() + 300 > $(document).height() - $win.height() && Houston._paginated_subscription.limit() < collection_count()) {
      return Houston._paginated_subscription.loadNextPage();
    }
  });
};

get_collection_view_fields = function(name) {
  var _ref;
  return _.map((_ref = collection_info(name)) != null ? _ref.fields : void 0, function(obj) {
    obj.collection_name = name;
    return obj;
  }) || [];
};

Template._houston_collection_view.events({
  "click a.houston-sort": function(e) {
    var sort_key;
    e.preventDefault();
    sort_key = this.name;
    if (Houston._session('sort_key') === sort_key) {
      Houston._session('sort_order', Houston._session('sort_order') * -1);
    } else {
      Houston._session('sort_key', sort_key);
      Houston._session('sort_order', 1);
    }
    return resubscribe(this.collection_name);
  },
  'dblclick .houston-collection-field': function(e) {
    var $this, collection, collection_name, field_name, input, old_val, type;
    $this = $(e.currentTarget);
    collection_name = this.collection;
    collection = Houston._get_collection(collection_name);
    field_name = $this.data('field');
    type = Houston._get_type(field_name, collection);
    input = 'text';
    old_val = $this.text().trim();
    $this.removeClass('houston-collection-field');
    $this.html("<input type='" + input + "' class='input-sm form-control' placeholder='" + type + "' value='" + old_val + "'>");
    old_val = Houston._convert_to_correct_type(field_name, old_val, collection);
    $this.find('input').select();
    $this.find('input').on('keydown', function(event) {
      if (event.keyCode === 13) {
        return event.currentTarget.blur();
      }
    });
    return $this.find('input').on('blur', function() {
      var document_id, update_dict, updated_val;
      updated_val = $this.find('input').val();
      $this.addClass('houston-collection-field');
      document_id = $this[0].parentNode.dataset.id;
      field_name = $this.data('field');
      updated_val = Houston._convert_to_correct_type(field_name, updated_val, collection);
      update_dict = {};
      update_dict[field_name] = updated_val;
      if (updated_val === old_val) {
        return $this.html(updated_val.toString());
      } else {
        $this.html('');
        return Houston._call("" + collection_name + "_update", document_id, {
          $set: update_dict
        });
      }
    });
  },
  'keyup .houston-column-filter': function(e) {
    var field_selectors;
    field_selectors = {};
    $('.houston-column-filter').each(function() {
      if (this.value) {
        return field_selectors[this.dataset.id] = this.value;
      }
    });
    Houston._session('field_selectors', field_selectors);
    return resubscribe(this.collection_name);
  },
  'click #expand-filter': function(e) {
    e.preventDefault();
    return setTimeout((function() {
      return $('.houston-column-filter').first().focus();
    }), 0);
  },
  'click #houston-custom-filter-btn, keydown #houston-custom-filter': function(event) {
    var e, selector_json, selector_text;
    if (event.type === "keydown") {
      if (event.keyCode !== 13) {
        return;
      }
      if (event.keyCode === 13 && event.shiftKey) {
        return;
      }
      event.preventDefault();
    }
    try {
      selector_text = $('#houston-custom-filter').val();
      if (selector_text === "") {
        Houston._session('custom_selector', null);
      } else {
        selector_json = JSON.parse(selector_text);
        Houston._session('custom_selector', selector_json);
      }
      Houston._session('custom_selector_error', null);
      event.currentTarget.blur();
    } catch (_error) {
      e = _error;
      Houston._session('custom_selector_error', e.toString());
      Houston._session('custom_selector', null);
    }
    return resubscribe(this.collection_name);
  },
  'click #houston-create-btn': function() {
    $('#houston-create-document').removeClass('hidden');
    return $('#houston-create-btn').hide();
  },
  'click .houston-delete-doc': function(e) {
    var id;
    e.preventDefault();
    id = $(e.currentTarget).data('id');
    if (confirm("Are you sure you want to delete the document with _id " + id + "?")) {
      return Houston._call("" + this.collection + "_delete", id);
    }
  },
  'click #houston-cancel': function() {
    $('#houston-create-document').addClass('hidden');
    $('#houston-create-btn').show();
    return $('#houston-create-row .houston-field').each(function() {
      return $(this).val('');
    });
  },
  'click #houston-add': function(e) {
    var $create_row, collection, doc_iter, field, final_key, key, keys, new_doc, value, _i, _j, _len, _len1, _ref;
    e.preventDefault();
    collection = Houston._get_collection(this.name);
    $create_row = $('#houston-create-row');
    new_doc = {};
    _ref = $create_row.find('.houston-field');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      field = _ref[_i];
      keys = field.name.split('.');
      final_key = keys.pop();
      value = Houston._convert_to_correct_type(field.name, field.value, collection);
      doc_iter = new_doc;
      for (_j = 0, _len1 = keys.length; _j < _len1; _j++) {
        key = keys[_j];
        if (!doc_iter[key]) {
          doc_iter[key] = {};
        }
        doc_iter = doc_iter[key];
      }
      doc_iter[final_key] = value;
      field.value = '';
    }
    return Houston._call("" + this.name + "_insert", new_doc);
  },
  'submit form.houston-filter-form': function(e) {
    return e.preventDefault();
  }
});

Template._houston_new_document_field.helpers({
  field_is_id: function() {
    return this.name === '_id';
  },
  document_id: function() {
    return Houston._session('document_id');
  },
  has_type: function() {
    return Houston._INPUT_TYPES[this.type] != null;
  },
  input_type: function() {
    return Houston._INPUT_TYPES[this.type];
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/document_view.coffee.js                                                            //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template._houston_document_view.helpers({
  collection_info: function() {
    return Houston._collections.collections.findOne({
      name: this.name
    });
  },
  showSaved: function() {
    return Houston._session('show_saved');
  },
  fields: function() {
    var field, fields, result, value, _i, _len;
    fields = Houston._get_fields([this.document], {
      exclude_id: true
    });
    result = [];
    for (_i = 0, _len = fields.length; _i < _len; _i++) {
      field = fields[_i];
      value = Houston._nested_field_lookup(this.document, field.name);
      result.push({
        name: "" + field.name + " (" + (typeof value) + ")",
        name_id: field.name,
        type: typeof value,
        value: value.toString()
      });
    }
    return result;
  },
  document_id: function() {
    return this.document._id;
  }
});

Template._houston_document_field.helpers({
  has_type: function() {
    return Houston._INPUT_TYPES[this.type] != null;
  },
  input_type: function() {
    return Houston._INPUT_TYPES[this.type];
  }
});

Template._houston_document_view.events({
  'click #houston-save': function(e) {
    var field, field_name, update_dict, _i, _len, _ref;
    e.preventDefault();
    update_dict = {};
    _ref = $('.houston-field');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      field = _ref[_i];
      field_name = field.name.split(' ')[0];
      if (field_name !== '_id') {
        update_dict[field_name] = Houston._convert_to_correct_type(field_name, field.value, this.collection);
      }
    }
    return Houston._call("" + this.name + "_update", this.document._id, {
      $set: update_dict
    }, Houston._show_flash);
  },
  'click #houston-delete': function(e) {
    var id;
    e.preventDefault();
    id = this.document._id;
    if (confirm("Are you sure you want to delete the document with _id " + id + "?")) {
      Houston._call("" + this.name + "_delete", id);
      return Houston._go('collection', {
        name: this.name
      });
    }
  }
});

Template._houston_document_view.rendered = function() {
  return $(window).unbind('scroll');
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/admin_change_password.coffee.js                                                    //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template._houston_change_password.helpers({
  admin_user_exists: function() {
    return admin_user_exists();
  }
});

Template._houston_change_password.events({
  'submit #houston-change-password-form': function(e) {
    var current_password, new_password;
    e.preventDefault();
    current_password = $('input[name="houston-current-password"]').val();
    new_password = $('input[name="houston-new-password"]').val();
    return Accounts.changePassword(current_password, new_password, function(error) {
      if (error != null) {
        return alert(error);
      } else {
        return Houston._go('home');
      }
    });
  }
});

Template._houston_change_password.rendered = function() {
  return $(window).unbind('scroll');
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/db_view.coffee.js                                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var filterCollections;

filterCollections = function(query, collections) {
  if (query) {
    return _.filter(collections, function(c) {
      return c.name.indexOf(query) > -1;
    });
  } else {
    return collections;
  }
};

Template._houston_db_view.helpers({
  collections: function() {
    return this.collections;
  },
  filtered_collections: function() {
    return filterCollections(Houston._session('search'), this.collections.find().fetch());
  }
});

Template._houston_db_view.events({
  "click #refresh": function() {
    return window.location.reload();
  },
  'keyup .houston-column-filter': function(e) {
    return Houston._session('search', $("#search").val());
  }
});

Template._houston_db_view.rendered = function() {
  $("#search").val("");
  return $(window).unbind('scroll');
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/houston:admin/client/router.coffee.js                                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var ALL_HOUSTON_ROUTES, BASE_HOUSTON_ROUTES, hide_non_admin_stuff, houston_route, mustBeAdmin, name, onRouteNotFound, remove_host_css, setup_collection, _ref, _ref1,
  __slice = [].slice;

if (window.Houston == null) {
  window.Houston = {};
}

Houston._ROOT_ROUTE = ((_ref = Meteor.settings) != null ? (_ref1 = _ref["public"]) != null ? _ref1.houston_root_route : void 0 : void 0) || "/admin";

Houston._subscribe = function(name) {
  return Meteor.subscribe(Houston._houstonize(name));
};

Houston._subscribe_to_collections();

setup_collection = function(collection_name, document_id) {
  var filter, subscription_name;
  Houston._page_length = 20;
  subscription_name = Houston._houstonize(collection_name);
  filter = document_id ? (typeof document_id === 'string' && document_id.length === 24 ? document_id = new Meteor.Collection.ObjectID(document_id) : void 0, {
    _id: document_id
  }) : {};
  return Houston._paginated_subscription = Meteor.subscribeWithPagination(subscription_name, {}, filter, Houston._page_length);
};

Houston._houstonize_route = function(name) {
  return Houston._houstonize(name).slice(1);
};

Houston._go = function(route_name, options) {
  return Router.go(Houston._houstonize_route(route_name), options);
};

houston_route = (function(_this) {
  return function(route_name, options) {
    options.layoutTemplate = '_houston_master_layout';
    options.name = Houston._houstonize_route(route_name);
    options.template = Houston._houstonize(options.template);
    options.waitOn = function() {
      var subscriptions;
      subscriptions = options.subs ? options.subs(this.params) : [];
      subscriptions.push(Houston._subscribe('admin_user'));
      return subscriptions;
    };
    return Router.route("" + Houston._ROOT_ROUTE + options.houston_path, options);
  };
})(this);

houston_route('home', {
  houston_path: '/',
  template: 'db_view',
  data: function() {
    return {
      collections: Houston._collections.collections
    };
  },
  waitOn: function() {
    return Houston._collections;
  }
});

houston_route('login', {
  houston_path: "/login",
  template: 'login'
});

houston_route('change_password', {
  houston_path: "/password",
  template: 'change_password'
});

houston_route('collection', {
  houston_path: "/:collection_name",
  data: function() {
    return Houston._get_collection(this.params.collection_name);
  },
  subs: function(params) {
    return [setup_collection(params.collection_name)];
  },
  template: 'collection_view'
});

houston_route('document', {
  houston_path: "/:collection/:_id",
  data: function() {
    var collection, document;
    this.subscription = setup_collection(this.params.collection, this.params._id);
    collection = Houston._get_collection(this.params.collection);
    document = collection.findOne({
      _id: this.params._id
    });
    return {
      document: document,
      collection: collection,
      name: this.params.collection
    };
  },
  template: 'document_view'
});

houston_route('custom_template', {
  houston_path: "/:template",
  template: 'custom_template_view',
  data: function() {
    return this.params;
  }
});

mustBeAdmin = function() {
  if (!Meteor.user()) {
    if (Meteor.loggingIn()) {
      return this.render('houstonLoading');
    } else {
      return Houston._go('login');
    }
  } else {
    if (this.ready() && !Houston._user_is_admin(Meteor.userId())) {
      return Houston._go('login');
    } else {
      return this.next();
    }
  }
};

hide_non_admin_stuff = function() {
  $('body').css('visibility', 'hidden').children().hide();
  $('body>.houston').show();
  return this.next();
};

remove_host_css = function() {
  $('link[rel="stylesheet"]').remove();
  return this.next();
};

BASE_HOUSTON_ROUTES = (function() {
  var _i, _len, _ref2, _results;
  _ref2 = ['home', 'collection', 'document', 'change_password', 'custom_template'];
  _results = [];
  for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
    name = _ref2[_i];
    _results.push(Houston._houstonize_route(name));
  }
  return _results;
})();

ALL_HOUSTON_ROUTES = BASE_HOUSTON_ROUTES.concat([Houston._houstonize_route('login')]);

Router.onBeforeAction(mustBeAdmin, {
  only: BASE_HOUSTON_ROUTES
});

Router.onBeforeAction(hide_non_admin_stuff, {
  only: ALL_HOUSTON_ROUTES
});

Router.onBeforeAction(remove_host_css, {
  only: ALL_HOUSTON_ROUTES
});

onRouteNotFound = Router.onRouteNotFound;

Router.onRouteNotFound = function() {
  var args, non_houston_routes;
  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  non_houston_routes = _.filter(Router.routes, function(route) {
    return route.name.indexOf('houston_') !== 0;
  });
  if (non_houston_routes.length > 0) {
    return onRouteNotFound.apply(Router, args);
  } else {
    return console.log("Note: Houston is suppressing Iron-Router errors because we don't think you are using it.");
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['houston:admin'] = {};

})();
