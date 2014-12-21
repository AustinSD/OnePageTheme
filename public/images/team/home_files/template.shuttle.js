(function(){
Template.__checkName("shuttle");
Template["shuttle"] = new Template("Template.shuttle", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("updateShuttleDialog")), "\n   ", Spacebars.include(view.lookupTemplate("updateShuttleDialogAdvisor")), "\n   ", Spacebars.include(view.lookupTemplate("newShuttleDialog")), HTML.Raw("\n  <h1>Shuttle Log</h1>\n\n   "), HTML.DIV("\n   ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isCreateUser"));
  }, function() {
    return [ "\n   ", HTML.BUTTON({
      id: "btnNewShuttle",
      "class": "btn btn-primary newShuttle"
    }, "New Shuttle"), "\n   " ];
  }), "\n               ", HTML.SELECT({
    id: "toggleDir",
    name: "toggleDir"
  }, "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("shuttleDirection"), "Pick Up");
  }), "Pick Up"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("shuttleDirection"), "Drop Off");
  }), "Drop Off"), "\n               \n               "), "\n   "), "\n\n", HTML.DIV({
    "class": "datagrid"
  }, "\n", HTML.DIV({
    "class": "table-responsive"
  }, "\n  ", HTML.TABLE("\n         ", HTML.THEAD("\n            ", HTML.TR("\n               ", HTML.TH("Timestamp"), "\n               ", HTML.TH("Time Requested"), "\n               ", HTML.TH("Customer Name"), "\n               ", HTML.TH("Phone Number"), "\n               ", HTML.TH("Address"), "\n               ", HTML.TH("Driver"), "\n               ", HTML.TH("Username"), "\n               ", HTML.TH("Status"), "\n               ", HTML.TH("Time Out"), "\n               ", HTML.TH("Time In"), "\n               ", HTML.TH("Update"), "\n            "), "\n         "), "\n         ", HTML.TBODY("\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("shuttle"));
  }, function() {
    return [ "\n            ", HTML.TR({
      "class": function() {
        return Spacebars.mustache(view.lookup("statusClass"), view.lookup("status"));
      }
    }, "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("timeParse"), view.lookup("timestamp"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("time"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("name"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("number"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("address"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("driver"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("username"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("status"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("timeout"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("timein"));
    })), "\n               ", HTML.TD(HTML.A({
      id: "updateShuttle",
      "class": "btn btn-primary updateShuttle"
    }, "Update Shuttle")), "\n            "), "\n            " ];
  }), "\n         "), "\n      "), "\n   "), "\n   ") ];
}));

Template.__checkName("newShuttleDialog");
Template["newShuttleDialog"] = new Template("Template.newShuttleDialog", (function() {
  var view = this;
  return HTML.DIV({
    "class": "modal",
    id: "newShuttleDialog"
  }, "\n      ", HTML.DIV({
    "class": "modal-dialog"
  }, "\n         ", HTML.DIV({
    "class": "modal-content"
  }, "\n            ", HTML.Raw('<div class="modal-header">\n               <button type="button" class="close cancel" data-dismiss="modal">&times;</button>\n               <h2>New Shuttle</h2>\n            </div>'), "\n            ", HTML.FORM({
    id: "newBody"
  }, "\n            ", HTML.DIV({
    "class": "modal-body"
  }, "\n               ", Spacebars.include(view.lookupTemplate("timeselect")), HTML.Raw("<br>"), "               \n               Customer Name: ", HTML.Raw('<input type="text" id="name" placeholder="Customer Name">'), HTML.Raw("<br>"), "\n               Customer Number: ", HTML.Raw('<input type="text" id="number" placeholder="Customer Number">'), HTML.Raw("<br>"), "\n               Customer Address: ", HTML.Raw('<input type="text" id="address" placeholder="Address">'), HTML.Raw("<br>"), "\n               ", HTML.SELECT({
    id: "direction",
    name: "direction"
  }, "\n               ", HTML.Raw("<option></option>"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("direction"), "pickup");
  }), "Pick Up"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("direction"), "dropoff");
  }), "Drop Off"), "\n               "), HTML.Raw("<br>"), "\n            "), "\n				"), "\n            ", HTML.Raw('<div class="modal-footer">\n               <a href="#" class="btn cancel">Cancel</a>\n               <a href="#" class="btn btn-primary save">Save Shuttle</a>\n            </div>'), "\n         "), "\n      "), "\n   ");
}));

Template.__checkName("updateShuttleDialog");
Template["updateShuttleDialog"] = new Template("Template.updateShuttleDialog", (function() {
  var view = this;
  return HTML.DIV({
    "class": "modal",
    id: "updateShuttleDialog"
  }, "\n      ", HTML.DIV({
    "class": "modal-dialog"
  }, "\n         ", HTML.DIV({
    "class": "modal-content"
  }, "\n            ", HTML.Raw('<div class="modal-header">\n               <button type="button" class="close cancel" data-dismiss="modal">&times;</button>\n               <h2>Update Shuttle</h2>\n            </div>'), "\n            ", HTML.DIV({
    "class": "modal-body"
  }, "\n               ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("getShuttleID"));
  }, function() {
    return [ "\n               ", HTML.H3("Shuttle"), "\n               ", HTML.B("Time Requested: ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("time"));
    })), HTML.BR(), "\n		         ", HTML.B("Customer name: ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("name"));
    })), HTML.BR(), "\n		         ", HTML.B("Customer Number: ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("number"));
    })), HTML.BR(), "\n		         ", HTML.B("Customer Address: ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("address"));
    })), HTML.BR(), "\n               ", HTML.BR(), "\n               Driver:\n               ", HTML.SELECT({
      id: "driver",
      name: "driver"
    }, "\n               ", HTML.OPTION(), "\n               ", Spacebars.With(function() {
      return Spacebars.call(view.lookup("company"));
    }, function() {
      return [ " \n    				", Blaze.Each(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("company"), "drivers"));
      }, function() {
        return [ "\n               ", HTML.OPTION(HTML.Attrs(function() {
          return Spacebars.attrMustache(view.lookup("selected"), Spacebars.dot(view.lookup("getShuttleID"), "driver"), view.lookup("."));
        }), Blaze.View(function() {
          return Spacebars.mustache(view.lookup("."));
        })), "\n   				" ];
      }), "\n    				" ];
    }), "\n               "), HTML.BR(), "\n               Status:\n               ", HTML.SELECT({
      id: "status",
      name: "status"
    }, "\n               ", HTML.OPTION(), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Confirmed");
    }), "Confirmed"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "En Route");
    }), "En Route"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Completed");
    }), "Completed"), "\n               "), HTML.BR(), "\n               Time out: ", HTML.INPUT({
      type: "text",
      id: "timeout",
      value: function() {
        return Spacebars.mustache(view.lookup("timeout"));
      }
    }), HTML.BR(), "\n               Time In: ", HTML.INPUT({
      type: "text",
      id: "timein",
      value: function() {
        return Spacebars.mustache(view.lookup("timein"));
      }
    }), HTML.BR(), "\n               " ];
  }), "\n            "), "\n            ", HTML.Raw('<div class="modal-footer">\n               <a href="#" class="btn cancel">Cancel</a>\n               <a href="#" class="btn btn-primary save">Update Shuttle</a>\n            </div>'), "\n         "), "\n      "), "\n   ");
}));

Template.__checkName("updateShuttleDialogAdvisor");
Template["updateShuttleDialogAdvisor"] = new Template("Template.updateShuttleDialogAdvisor", (function() {
  var view = this;
  return HTML.DIV({
    "class": "modal",
    id: "updateShuttleDialogAdvisor"
  }, "\n      ", HTML.DIV({
    "class": "modal-dialog"
  }, "\n         ", HTML.DIV({
    "class": "modal-content"
  }, "\n            ", HTML.Raw('<div class="modal-header">\n               <button type="button" class="close cancel" data-dismiss="modal">&times;</button>\n               <h2>Update Shuttle</h2>\n            </div>'), "\n            ", HTML.DIV({
    "class": "modal-body"
  }, "\n               ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("getShuttleID"));
  }, function() {
    return [ "\n               ", HTML.H3("Shuttle"), "\n               ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("timesplit"));
    }, function() {
      return [ "\n               Time Requested:\n               ", HTML.SELECT({
        id: "hourAdvisor",
        name: "hourAdvisor"
      }, "\n	            ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "1");
      }), "1"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "2");
      }), "2"), "\n	            ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "3");
      }), "3"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "4");
      }), "4"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "5");
      }), "5"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "6");
      }), "6"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "7");
      }), "7"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "8");
      }), "8"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "9");
      }), "9"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "10");
      }), "10"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "11");
      }), "11"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "12");
      }), "12"), "\n               "), "\n               ", HTML.SELECT({
        id: "minuteAdvisor",
        name: "minuteAdvisor"
      }, "\n               ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "00");
      }), "00"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "05");
      }), "05"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "10");
      }), "10"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "15");
      }), "15"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "20");
      }), "20"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "25");
      }), "25"), "\n					", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "30");
      }), "30"), "\n					", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "35");
      }), "35"), "\n					", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "40");
      }), "40"), "\n					", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "45");
      }), "45"), "\n					", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "50");
      }), "50"), "\n					", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "55");
      }), "55"), "\n               "), "\n               ", HTML.SELECT({
        id: "ampmAdvisor",
        name: "ampmAdvisor"
      }, "\n               ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("ampm"), "AM");
      }), "AM"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
        return Spacebars.attrMustache(view.lookup("selected"), view.lookup("ampm"), "PM");
      }), "PM"), "\n               "), " ", HTML.BR(), "   \n               " ];
    }), "      \n               Customer Name: ", HTML.INPUT({
      type: "text",
      id: "nameAdvisor",
      value: function() {
        return Spacebars.mustache(view.lookup("name"));
      }
    }), HTML.BR(), "\n               Customer Number: ", HTML.INPUT({
      type: "text",
      id: "numberAdvisor",
      value: function() {
        return Spacebars.mustache(view.lookup("number"));
      }
    }), HTML.BR(), "\n               Customer Address: ", HTML.INPUT({
      type: "text",
      id: "addressAdvisor",
      value: function() {
        return Spacebars.mustache(view.lookup("address"));
      }
    }), HTML.BR(), "\n               ", HTML.SELECT({
      id: "directionAdvisor",
      name: "directionAdvisor"
    }, "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("direction"), "Pick Up");
    }), "Pick Up"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("direction"), "Drop Off");
    }), "Drop Off"), "\n               "), HTML.BR(), "\n               Driver:\n               ", HTML.SELECT({
      id: "driverAdvisor",
      name: "driverAdvisor"
    }, "\n               ", HTML.OPTION(), "\n               ", Spacebars.With(function() {
      return Spacebars.call(view.lookup("company"));
    }, function() {
      return [ " \n    				", Blaze.Each(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("company"), "drivers"));
      }, function() {
        return [ "\n               ", HTML.OPTION(HTML.Attrs(function() {
          return Spacebars.attrMustache(view.lookup("selected"), Spacebars.dot(view.lookup("getShuttleID"), "driver"), view.lookup("."));
        }), Blaze.View(function() {
          return Spacebars.mustache(view.lookup("."));
        })), "\n   				" ];
      }), "\n    				" ];
    }), "\n               "), HTML.BR(), "\n               Status:\n               ", HTML.SELECT({
      id: "statusAdvisor",
      name: "statusAdvisor"
    }, "\n               ", HTML.OPTION(), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Confirmed");
    }), "Confirmed"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "En Route");
    }), "En Route"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Completed");
    }), "Completed"), "\n               "), HTML.BR(), "\n               Time out: ", HTML.INPUT({
      type: "text",
      id: "timeoutAdvisor",
      value: function() {
        return Spacebars.mustache(view.lookup("timeout"));
      }
    }), HTML.BR(), "\n               Time In: ", HTML.INPUT({
      type: "text",
      id: "timeinAdvisor",
      value: function() {
        return Spacebars.mustache(view.lookup("timein"));
      }
    }), HTML.BR(), "\n               " ];
  }), "\n            "), "\n            ", HTML.Raw('<div class="modal-footer">\n               <a href="#" class="btn cancel">Cancel</a>\n               <a href="#" class="btn btn-primary save">Update Shuttle</a>\n            </div>'), "\n         "), "\n      "), "\n   ");
}));

Template.__checkName("timeselect");
Template["timeselect"] = new Template("Template.timeselect", (function() {
  var view = this;
  return [ "Time Requested:\n                ", HTML.SELECT({
    id: "hour",
    name: "hour"
  }, "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "1");
  }), "1"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "2");
  }), "2"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "3");
  }), "3"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "4");
  }), "4"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "5");
  }), "5"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "6");
  }), "6"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "7");
  }), "7"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "8");
  }), "8"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "9");
  }), "9"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "10");
  }), "10"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "11");
  }), "11"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("hour"), "12");
  }), "12"), "\n               "), "\n               ", HTML.SELECT({
    id: "minute",
    name: "minute"
  }, "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "00");
  }), "00"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "05");
  }), "05"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "10");
  }), "10"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "15");
  }), "15"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "20");
  }), "20"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "25");
  }), "25"), "\n					", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "30");
  }), "30"), "\n					", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "35");
  }), "35"), "\n					", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "40");
  }), "40"), "\n					", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "45");
  }), "45"), "\n					", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "50");
  }), "50"), "\n					", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("minute"), "55");
  }), "55"), "\n               "), "\n               ", HTML.SELECT({
    id: "ampm",
    name: "ampm"
  }, "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("ampm"), "AM");
  }), "AM"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("ampm"), "PM");
  }), "PM"), "\n               ") ];
}));

})();
