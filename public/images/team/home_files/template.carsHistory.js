(function(){
Template.__checkName("carshistory");
Template["carshistory"] = new Template("Template.carshistory", (function() {
  var view = this;
  return [ HTML.Raw("<h1>Cars History</h1>\n "), HTML.NAV({
    "class": "navbar navbar-inverse",
    role: "navigation"
  }, "\n", HTML.DIV({
    "class": "collapse navbar-collapse",
    id: "bs-example-navbar-collapse-1"
  }, "\n", HTML.FORM({
    "class": "navbar-form navbar-left",
    role: "search"
  }, "\n", HTML.DIV({
    "class": "form-group"
  }, "\n", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "Search",
    value: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("fcFilterSearchable"), "criteria"));
    },
    "data-fc-search-target": "search-box"
  }), "\n"), "\n", HTML.Raw('<button type="submit" class="btn btn-default fc-search-trigger" data-fc-search-trigger="search-box">Submit</button>'), "\n", HTML.Raw('<button type="button" class="btn btn-default fc-search-clear">Reset</button>'), "\n"), "\n"), "\n"), "\n   ", HTML.DIV({
    "class": "datagrid"
  }, "\n   ", HTML.DIV({
    "class": "table-responsive",
    id: "carhisttable"
  }, "\n   ", HTML.Raw('<a href="#" class="export">Export Table data into CSV</a>'), "\n   ", HTML.Raw("<br>"), "\n      ", HTML.TABLE("\n         ", HTML.THEAD("\n            ", HTML.TR("\n             ", HTML.TH("Timestamp"), "\n					", HTML.TH("Completed"), "\n              ", HTML.TH("Tag Number"), "\n              ", HTML.TH("ASM"), "\n              ", HTML.TH("Team"), "\n              ", HTML.TH("Vehicle"), "\n              ", HTML.TH("Color"), "\n              ", HTML.TH("VIN - Last 4"), "\n              ", HTML.TH("Status"), "\n              ", HTML.TH("Additional Notes"), "\n              ", HTML.TH("Porter"), "\n				  ", HTML.TH("Username"), "\n              ", HTML.TH("Wash"), "\n            "), "\n         "), "\n         ", HTML.TBODY("\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("fcResults"));
  }, function() {
    return [ "\n            ", HTML.TR({
      "class": function() {
        return Spacebars.mustache(view.lookup("statusClass"), view.lookup("status"));
      }
    }, "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("timeParse"), view.lookup("timestamp"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("timeParse"), view.lookup("completestamp"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("tagnum"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("asm"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("team"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("vehicle"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("color"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("vin"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("status"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("notes"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("porter"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("username"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("wash"));
    })), "\n            "), "\n            " ];
  }), "\n         "), "\n      "), "\n   "), "\n   "), "\n ", Blaze.If(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("fcPager"), "pages"));
  }, function() {
    return [ "\n", HTML.DIV({
      "class": "row"
    }, "\n", HTML.DIV({
      "class": "col-md-2"
    }, "\n", HTML.Comment(" items per page "), "\n", HTML.SMALL(HTML.STRONG("Results per page select")), "\n", HTML.SELECT({
      "class": "fc-pager-options form-control"
    }, "\n", Blaze.Each(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("fcPager"), "options"));
    }, function() {
      return [ "\n", HTML.OPTION(HTML.Attrs({
        value: function() {
          return Spacebars.mustache(view.lookup("value"));
        }
      }, function() {
        return Spacebars.attrMustache(view.lookup("status"));
      }), Blaze.View(function() {
        return Spacebars.mustache(view.lookup("value"));
      })), "\n" ];
    }), "\n"), "\n", HTML.Comment(" /items per page "), "\n"), "\n", HTML.DIV({
      "class": "col-md-7 text-center"
    }, "\n", Blaze.If(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("fcPager"), "pages"));
    }, function() {
      return [ "\n", HTML.Comment(" numbered pager "), "\n", HTML.UL({
        "class": "pagination"
      }, "\n", HTML.LI(HTML.A({
        href: "#",
        "class": "fc-pager-first"
      }, HTML.CharRef({
        html: "&lt;",
        str: "<"
      }), HTML.CharRef({
        html: "&lt;",
        str: "<"
      }))), "\n", HTML.LI(HTML.A({
        href: "#",
        "class": "fc-pager-previous"
      }, HTML.CharRef({
        html: "&lt;",
        str: "<"
      }))), "\n", Blaze.Each(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("fcPager"), "pages"));
      }, function() {
        return [ "\n", HTML.LI({
          "class": function() {
            return Spacebars.mustache(view.lookup("status"));
          }
        }, HTML.A({
          href: "#",
          "class": "fc-pager-page",
          "data-fc-pager-page": function() {
            return Spacebars.mustache(view.lookup("page"));
          }
        }, Blaze.View(function() {
          return Spacebars.mustache(view.lookup("page"));
        }))), "\n" ];
      }), "\n", HTML.LI(HTML.A({
        href: "#",
        "class": "fc-pager-next"
      }, HTML.CharRef({
        html: "&gt;",
        str: ">"
      }))), "\n", HTML.LI(HTML.A({
        href: "#",
        "class": "fc-pager-last"
      }, HTML.CharRef({
        html: "&gt;",
        str: ">"
      }), HTML.CharRef({
        html: "&gt;",
        str: ">"
      }))), "\n"), "\n", HTML.Comment(" /numbered pager "), "\n" ];
    }), "\n"), "\n", HTML.DIV({
      "class": "col-md-3"
    }, "\n", HTML.Comment(" pager status "), "\n", HTML.UL({
      "class": "small"
    }, "\n", HTML.LI("Current page is: ", HTML.STRONG(Blaze.View(function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("fcPager"), "currentPage"));
    })), "."), "\n", HTML.LI("We are displaying ", HTML.STRONG(Blaze.View(function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("fcPager"), "itemsPerPage"));
    })), " results."), "\n", HTML.LI("From ", HTML.STRONG(Blaze.View(function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("fcPager"), "offsetStart"));
    })), " to ", HTML.STRONG(Blaze.View(function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("fcPager"), "offsetEnd"));
    })), "."), "\n", HTML.LI("We have found a total of ", HTML.STRONG(Blaze.View(function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("fcPager"), "totalItems"));
    })), " records."), "\n"), "\n", HTML.Comment(" /pager status "), "\n"), "\n"), "\n" ];
  }) ];
}));

})();
