(function(){
Template.__checkName("header");
Template["header"] = new Template("Template.header", (function() {
  var view = this;
  return HTML.NAV({
    "class": "navbar navbar-default",
    role: "navigation"
  }, "\n      ", HTML.DIV({
    "class": "container-fluid"
  }, "\n         ", HTML.Raw("<!-- Brand and toggle get grouped for better mobile display -->"), "\n         ", HTML.DIV({
    "class": "navbar-header"
  }, "\n            ", HTML.Raw('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n            <span class="sr-only">Toggle navigation</span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n            </button>'), "\n            ", HTML.A({
    "class": "navbar-brand",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "home");
    }
  }, "Dealer Desk"), "\n         "), "\n         ", HTML.DIV({
    "class": "navbar-text"
  }, "\n            ", HTML.LABEL(" ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "cars");
    }
  }, "Cars")), " ", HTML.SPAN({
    "class": "badge"
  }, " ", Blaze.View(function() {
    return Spacebars.mustache(view.lookup("cars"));
  })), "\n				", HTML.LABEL("  ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "shuttleP");
    }
  }, "Pick-ups")), " ", HTML.SPAN({
    "class": "badge"
  }, " ", Blaze.View(function() {
    return Spacebars.mustache(view.lookup("pickup"));
  })), "\n				", HTML.LABEL(" ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "shuttleD");
    }
  }, "Drop-offs")), " ", HTML.SPAN({
    "class": "badge"
  }, " ", Blaze.View(function() {
    return Spacebars.mustache(view.lookup("dropoff"));
  })), "\n				", HTML.LABEL(" ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "task");
    }
  }, "Tasks")), " ", HTML.SPAN({
    "class": "badge"
  }, " ", Blaze.View(function() {
    return Spacebars.mustache(view.lookup("taskcount"));
  })), "\n				", HTML.LABEL(" ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "cars");
    }
  }, "Wash")), " ", HTML.SPAN({
    "class": "badge"
  }, " ", Blaze.View(function() {
    return Spacebars.mustache(view.lookup("washCount"));
  })), "			\n   		"), "  \n         ", HTML.Raw("<!-- Collect the nav links, forms, and other content for toggling -->"), "\n         ", HTML.DIV({
    "class": "collapse navbar-collapse",
    id: "bs-example-navbar-collapse-1"
  }, "\n            ", HTML.Raw('<ul class="nav navbar-nav">\n            </ul>'), "\n            ", HTML.UL({
    "class": "nav navbar-nav navbar-right"
  }, "\n               ", HTML.LI(HTML.A({
    "class": "brand",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "home");
    }
  }, "Home")), "\n               ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isUser"));
  }, function() {
    return [ "\n               ", HTML.LI({
      "class": "dropdown"
    }, "\n                  ", HTML.A({
      href: "#",
      "class": "dropdown-toggle",
      "data-toggle": "dropdown"
    }, "Service Desk", HTML.SPAN({
      "class": "caret"
    })), "\n                  ", HTML.UL({
      "class": "dropdown-menu",
      role: "menu"
    }, "\n                     ", HTML.LI(HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "cars");
      }
    }, "Cars")), "\n                     ", HTML.LI(HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "carshistory");
      }
    }, "Cars History")), "\n                  "), "\n               "), "\n               ", HTML.LI({
      "class": "dropdown"
    }, "\n                  ", HTML.A({
      href: "#",
      "class": "dropdown-toggle",
      "data-toggle": "dropdown"
    }, "Shuttle Log", HTML.SPAN({
      "class": "caret"
    })), "\n                  ", HTML.UL({
      "class": "dropdown-menu",
      role: "menu"
    }, "\n                     ", HTML.LI(HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "shuttle");
      }
    }, "Shuttle")), "\n                     ", HTML.LI(HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "shuttlehistory");
      }
    }, "Shuttle History")), "\n                  "), "\n               "), "\n               ", HTML.LI({
      "class": "dropdown"
    }, "\n                  ", HTML.A({
      href: "#",
      "class": "dropdown-toggle",
      "data-toggle": "dropdown"
    }, "Tasks", HTML.SPAN({
      "class": "caret"
    })), "\n                  ", HTML.UL({
      "class": "dropdown-menu",
      role: "menu"
    }, "\n                     ", HTML.LI(HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "task");
      }
    }, "Tasks")), "\n                     ", HTML.LI(HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "taskhistory");
      }
    }, "Tasks History")), "\n                  "), "\n               "), "\n               " ];
  }), "\n               ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("isInRole"), "admin");
  }, function() {
    return [ "\n               ", HTML.LI(HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "adminTemplate");
      }
    }, "Admin Panel")), "\n               " ];
  }), "\n", HTML.Raw('<!--               <li class="dropdown">\n                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">About<span class="caret"></span></a>\n                  <ul class="dropdown-menu" role="menu">\n                     <li><a href={{pathFor \'about\'}}>About</a></li>\n                     <li><a href={{pathFor \'meetstaff\'}}>Meet the Staff</a></li>\n                  </ul>\n               </li>-->'), "\n               ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n            "), "\n         "), HTML.Raw("<!-- /.navbar-collapse -->"), "\n      "), HTML.Raw("<!-- /.container-fluid -->\n   "));
}));

})();
