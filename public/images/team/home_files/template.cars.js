(function(){
Template.__checkName("cars");
Template["cars"] = new Template("Template.cars", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("updateCarDialog")), "\n   ", Spacebars.include(view.lookupTemplate("updateCarDialogAdvisor")), "\n   ", Spacebars.include(view.lookupTemplate("newCarDialog")), HTML.Raw("\n   <h1>Service Desk</h1>\n   "), Blaze.If(function() {
    return Spacebars.call(view.lookup("isCreateUser"));
  }, function() {
    return [ "\n   ", HTML.BUTTON({
      id: "btnNewCar",
      "class": "btn btn-primary newCar"
    }, "New Car"), "\n   " ];
  }), "\n   ", HTML.DIV({
    "class": "datagrid"
  }, "\n", HTML.DIV({
    "class": "table-responsive"
  }, "\n  ", HTML.TABLE("\n         ", HTML.THEAD("\n            ", HTML.TR("\n               ", HTML.TH("Timestamp"), "\n               ", HTML.TH("Tag Number"), "\n               ", HTML.TH("ASM"), "\n               ", HTML.TH("Team"), "\n               ", HTML.TH("Vehicle"), "\n               ", HTML.TH("Color"), "\n               ", HTML.TH("VIN - Last 4"), "\n               ", HTML.TH("Status"), "\n               ", HTML.TH("Additional Notes"), "\n               ", HTML.TH("Porter"), "\n               ", HTML.TH("Username"), "\n               ", HTML.TH("Wash"), "\n               ", HTML.TH("Update"), "\n            "), "\n         "), "\n         ", HTML.TBODY("\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("cars"));
  }, function() {
    return [ "\n            ", HTML.TR({
      "class": function() {
        return Spacebars.mustache(view.lookup("statusClass"), view.lookup("status"));
      }
    }, "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("timeParse"), view.lookup("timestamp"));
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
    })), "\n               ", HTML.TD(HTML.A({
      id: "updateCar",
      "class": "btn btn-primary updateCar"
    }, "Update Car")), "\n            "), "\n            " ];
  }), "\n         "), "\n      "), "\n   "), "\n   ") ];
}));

Template.__checkName("newCarDialog");
Template["newCarDialog"] = new Template("Template.newCarDialog", (function() {
  var view = this;
  return HTML.DIV({
    "class": "modal",
    id: "newCarDialog"
  }, "\n      ", HTML.DIV({
    "class": "modal-dialog"
  }, "\n         ", HTML.DIV({
    "class": "modal-content"
  }, "\n            ", HTML.Raw('<div class="modal-header">\n               <button type="button" class="close cancel" data-dismiss="modal">&times;</button>\n               <h2>New Car</h2>\n            </div>'), "\n            ", HTML.FORM({
    id: "newBody"
  }, "\n            ", HTML.DIV({
    "class": "modal-body"
  }, "\n               Vehicle: \n               ", HTML.SELECT({
    id: "vehicleNew",
    name: "vehicleNew"
  }, "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Corolla");
  }), "Corolla"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Camry");
  }), "Camry"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Avalon");
  }), "Avalon"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Yaris");
  }), "Yaris"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Sienna");
  }), "Sienna"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Tacoma");
  }), "Tacoma"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Tundra");
  }), "Tundra"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "RAV4");
  }), "RAV4"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Venza");
  }), "Venza"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Highlander");
  }), "Highlander"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "FJ Cruiser");
  }), "FJ Crusier"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "4Runner");
  }), "4Runner"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Sequoia");
  }), "Sequoia"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Land Cruiser");
  }), "Land Cruiser"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Prius");
  }), "Prius"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Matrix");
  }), "Matrix"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Solara");
  }), "Solara"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Celica");
  }), "Celica"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Cressida");
  }), "Cressida"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Pickup");
  }), "Pickup"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Previa");
  }), "Previa"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Tercel");
  }), "Tercel"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Echo");
  }), "Echo"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Scion FR-S");
  }), "Scion FR-S"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Scion tC");
  }), "Scion tC"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Scion iQ");
  }), "Scion iQ"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Scion xB");
  }), "Scion xB"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Scion xA");
  }), "Scion xA"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Scion xD");
  }), "Scion xD"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Scion FR-S");
  }), "Scion FR-S"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Other");
  }), "Other"), "\n               "), HTML.Raw("<br>"), "\n               Color: \n               ", HTML.SELECT({
    id: "colorNew",
    name: "colorNew"
  }, "\n               ", HTML.Raw("<option></option>"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "White");
  }), "White"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Black");
  }), "Black"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Blue");
  }), "Blue"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Light Blue");
  }), "Light Blue"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Silver");
  }), "Silver"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Grey");
  }), "Grey"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Red");
  }), "Red"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Burgandy");
  }), "Burgandy"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Green");
  }), "Green"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Mint Green");
  }), "Mint Green"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Brown");
  }), "Brown"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Beige");
  }), "Beige"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Orange");
  }), "Orange"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Yellow");
  }), "Yellow"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Purple");
  }), "Purple"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Beige");
  }), "Beige"), "\n               "), HTML.Raw("<br>"), "\n               Tag Number: ", HTML.Raw('<input type="text" id="tagnumNew" placeholder="Tag Number">'), HTML.Raw("<br>"), "\n               VIN: ", HTML.Raw('<input type="text" id="vinNew" placeholder="VIN">'), HTML.Raw("<br>"), "\n               ASM: \n               ", HTML.SELECT({
    id: "asmNew",
    name: "asmNew"
  }, "\n               ", HTML.Raw("<option></option>"), "\n               ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("company"));
  }, function() {
    return [ " \n    				", Blaze.Each(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("company"), "asm"));
    }, function() {
      return [ "\n               ", HTML.OPTION({
        value: function() {
          return Spacebars.mustache(view.lookup("."));
        }
      }, Blaze.View(function() {
        return Spacebars.mustache(view.lookup("."));
      })), "\n   				" ];
    }), "\n    				" ];
  }), "\n               "), HTML.Raw("<br>"), "\n               Team:\n               ", HTML.SELECT({
    id: "teamNew",
    name: "teamNew"
  }, "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "TXM");
  }), "TXM"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Silver");
  }), "Silver"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Yellow");
  }), "Yellow"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Brown");
  }), "Brown"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Gold");
  }), "Gold"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Purple");
  }), "Purple"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Red");
  }), "Red"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Orange");
  }), "Orange"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Detail");
  }), "Detail"), "\n               "), HTML.Raw("<br>"), "\n               Status:\n               ", HTML.SELECT({
    id: "statusNew",
    name: "statusNew"
  }, "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Prep");
  }), "Prep"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Ready");
  }), "Ready"), "              \n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Waiting");
  }), "Waiting"), "\n               "), HTML.Raw("<br>"), "\n               Notes: ", HTML.Raw('<input type="text" id="notesNew" placeholder="Notes">'), HTML.Raw("<br>"), "\n               Wash: \n               ", HTML.SELECT({
    id: "washNew"
  }, "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("wash"), "Yes");
  }), "Yes"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("wash"), "No");
  }), "No"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("wash"), "In Progress");
  }), "In Progress"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("selected"), view.lookup("wash"), "Already Washed");
  }), "Already Washed"), "\n               "), "\n            "), "\n				"), "\n            ", HTML.Raw('<div class="modal-footer">\n               <a href="#" class="btn cancel">Cancel</a>\n               <a href="#" class="btn btn-primary save">Save Car</a>\n            </div>'), "\n         "), "\n      "), "\n   ");
}));

Template.__checkName("updateCarDialog");
Template["updateCarDialog"] = new Template("Template.updateCarDialog", (function() {
  var view = this;
  return HTML.DIV({
    "class": "modal",
    id: "updateCarDialog"
  }, "\n      ", HTML.DIV({
    "class": "modal-dialog"
  }, "\n         ", HTML.DIV({
    "class": "modal-content"
  }, "\n            ", HTML.Raw('<div class="modal-header">\n               <button type="button" class="close cancel" data-dismiss="modal">&times;</button>\n               <h2>Update Car</h2>\n            </div>'), "\n            ", HTML.DIV({
    "class": "modal-body"
  }, "\n               ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("getCarID"));
  }, function() {
    return [ "\n               ", HTML.H3("Vehicle"), "\n		         ", HTML.B("Vehicle: ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("vehicle"));
    })), HTML.BR(), "\n		         ", HTML.B("Color: ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("color"));
    })), HTML.BR(), "\n		         ", HTML.B("Tag Number: ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("tagnum"));
    })), HTML.BR(), "\n		         ", HTML.B("Vin: ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("vin"));
    })), HTML.BR(), "\n		         ", HTML.B("ASM: ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("asm"));
    })), HTML.BR(), "\n		         ", HTML.B("Username: ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("username"));
    })), HTML.BR(), "\n               ", HTML.B("Team: ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("team"));
    })), HTML.BR(), "\n               ", HTML.BR(), "\n               Porter: \n               ", HTML.SELECT({
      id: "porter",
      name: "porter"
    }, "\n               ", HTML.OPTION(), "\n               ", Spacebars.With(function() {
      return Spacebars.call(view.lookup("company"));
    }, function() {
      return [ " \n    				", Blaze.Each(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("company"), "porters"));
      }, function() {
        return [ "\n               ", HTML.OPTION(HTML.Attrs(function() {
          return Spacebars.attrMustache(view.lookup("selected"), Spacebars.dot(view.lookup("getCarID"), "porter"), view.lookup("."));
        }), Blaze.View(function() {
          return Spacebars.mustache(view.lookup("."));
        })), "\n   				" ];
      }), "\n    				" ];
    }), "\n               "), HTML.BR(), "\n               Status:\n               ", HTML.SELECT({
      id: "status",
      name: "status"
    }, "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Prep");
    }), "Prep"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Ready");
    }), "Ready"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Waiting");
    }), "Waiting"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Completed");
    }), "Completed"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Delete");
    }), "Delete"), "\n               "), HTML.BR(), "\n               Wash: \n               ", HTML.SELECT({
      id: "washUpdate",
      name: "washUpdate"
    }, "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("wash"), "Yes");
    }), "Yes"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("wash"), "No");
    }), "No"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("wash"), "In Progress");
    }), "In Progress"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("wash"), "Already Washed");
    }), "Already Washed"), "             \n               "), HTML.BR(), "\n					Notes: ", HTML.INPUT({
      type: "text",
      id: "notes",
      value: function() {
        return Spacebars.mustache(view.lookup("notes"));
      }
    }), HTML.BR(), "\n               " ];
  }), "\n            "), "\n            ", HTML.Raw('<div class="modal-footer">\n               <a href="#" class="btn cancel">Cancel</a>\n               <a href="#" class="btn btn-primary save">Update Car</a>\n            </div>'), "\n         "), "\n      "), "\n   ");
}));

Template.__checkName("updateCarDialogAdvisor");
Template["updateCarDialogAdvisor"] = new Template("Template.updateCarDialogAdvisor", (function() {
  var view = this;
  return HTML.DIV({
    "class": "modal",
    id: "updateCarDialogAdvisor"
  }, "\n      ", HTML.DIV({
    "class": "modal-dialog"
  }, "\n         ", HTML.DIV({
    "class": "modal-content"
  }, "\n            ", HTML.Raw('<div class="modal-header">\n               <button type="button" class="close cancel" data-dismiss="modal">&times;</button>\n               <h2>Update Car</h2>\n            </div>'), "\n            ", HTML.DIV({
    "class": "modal-body"
  }, "\n               ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("getCarID"));
  }, function() {
    return [ "\n                Vehicle: \n               ", HTML.SELECT({
      id: "vehicleAdvisor",
      name: "vehicleAdvisor"
    }, "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Corolla");
    }), "Corolla"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Camry");
    }), "Camry"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Avalon");
    }), "Avalon"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Yaris");
    }), "Yaris"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Sienna");
    }), "Sienna"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Tacoma");
    }), "Tacoma"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Tundra");
    }), "Tundra"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "RAV4");
    }), "RAV4"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Venza");
    }), "Venza"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Highlander");
    }), "Highlander"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "FJ Cruiser");
    }), "FJ Crusier"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "4Runner");
    }), "4Runner"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Sequoia");
    }), "Sequoia"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Land Cruiser");
    }), "Land Cruiser"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Prius");
    }), "Prius"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Matrix");
    }), "Matrix"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Solara");
    }), "Solara"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Celica");
    }), "Celica"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Cressida");
    }), "Cressida"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Pickup");
    }), "Pickup"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Previa");
    }), "Previa"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Tercel");
    }), "Tercel"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Echo");
    }), "Echo"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Scion FR-S");
    }), "Scion FR-S"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Scion tC");
    }), "Scion tC"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Scion iQ");
    }), "Scion iQ"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Scion xB");
    }), "Scion xB"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Scion xA");
    }), "Scion xA"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Scion xD");
    }), "Scion xD"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Scion FR-S");
    }), "Scion FR-S"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("vehicle"), "Other");
    }), "Other"), "\n               "), HTML.BR(), "\n               Color: \n               ", HTML.SELECT({
      id: "colorAdvisor",
      name: "colorAdvisor"
    }, "\n               ", HTML.OPTION(), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("color"), "White");
    }), "White"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("color"), "Black");
    }), "Black"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("color"), "Blue");
    }), "Blue"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("color"), "Light Blue");
    }), "Light Blue"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("color"), "Silver");
    }), "Silver"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("color"), "Grey");
    }), "Grey"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("color"), "Red");
    }), "Red"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("color"), "Burgandy");
    }), "Burgandy"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("color"), "Green");
    }), "Green"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("color"), "Mint Green");
    }), "Mint Green"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("color"), "Brown");
    }), "Brown"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("color"), "Beige");
    }), "Beige"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("color"), "Orange");
    }), "Orange"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("color"), "Yellow");
    }), "Yellow"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("color"), "Purple");
    }), "Purple"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("color"), "Beige");
    }), "Beige"), "\n               "), HTML.BR(), "\n               Tag Number: ", HTML.INPUT({
      type: "text",
      id: "tagnumAdvisor",
      value: function() {
        return Spacebars.mustache(view.lookup("tagnum"));
      }
    }), HTML.BR(), "\n               VIN: ", HTML.INPUT({
      type: "text",
      id: "vinAdvisor",
      value: function() {
        return Spacebars.mustache(view.lookup("vin"));
      }
    }), HTML.BR(), "\n               ASM: \n               ", HTML.SELECT({
      id: "asmAdvisor",
      name: "asmAdvisor"
    }, "\n               ", HTML.OPTION(), "\n               ", Spacebars.With(function() {
      return Spacebars.call(view.lookup("company"));
    }, function() {
      return [ " \n    				", Blaze.Each(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("company"), "asm"));
      }, function() {
        return [ "\n               ", HTML.OPTION(HTML.Attrs(function() {
          return Spacebars.attrMustache(view.lookup("selected"), Spacebars.dot(view.lookup("getCarID"), "asm"), view.lookup("."));
        }), Blaze.View(function() {
          return Spacebars.mustache(view.lookup("."));
        })), "\n   				" ];
      }), "\n    				" ];
    }), "\n               "), HTML.BR(), "\n               Team:\n               ", HTML.SELECT({
      id: "teamAdvisor",
      name: "teamAdvisor"
    }, "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("team"), "TXM");
    }), "TXM"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("team"), "Silver");
    }), "Silver"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("team"), "Yellow");
    }), "Yellow"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("team"), "Brown");
    }), "Brown"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("team"), "Gold");
    }), "Gold"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("team"), "Purple");
    }), "Purple"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("team"), "Red");
    }), "Red"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("team"), "Orange");
    }), "Orange"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("team"), "Detail");
    }), "Detail"), "\n               "), HTML.BR(), "\n               Porter: \n               ", HTML.SELECT({
      id: "porterAdvisor",
      name: "porterAdvisor"
    }, "\n               ", HTML.OPTION(), "\n               ", Spacebars.With(function() {
      return Spacebars.call(view.lookup("company"));
    }, function() {
      return [ " \n    				", Blaze.Each(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("company"), "porters"));
      }, function() {
        return [ "\n               ", HTML.OPTION(HTML.Attrs(function() {
          return Spacebars.attrMustache(view.lookup("selected"), Spacebars.dot(view.lookup("getCarID"), "porter"), view.lookup("."));
        }), Blaze.View(function() {
          return Spacebars.mustache(view.lookup("."));
        })), "\n   				" ];
      }), "\n    				" ];
    }), "\n               "), HTML.BR(), "\n               Status:\n               ", HTML.SELECT({
      id: "statusAdvisor",
      name: "statusAdvisor"
    }, "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Prep");
    }), "Prep"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Ready");
    }), "Ready"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Waiting");
    }), "Waiting"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Completed");
    }), "Completed"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Delete");
    }), "Delete"), "\n               "), HTML.BR(), "\n               Notes: ", HTML.INPUT({
      type: "text",
      id: "notesAdvisor",
      value: function() {
        return Spacebars.mustache(view.lookup("notes"));
      }
    }), HTML.BR(), "\n               Wash: \n               ", HTML.SELECT({
      id: "washUpdateAdvisor",
      name: "washUpdateAdvisor"
    }, "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("wash"), "Yes");
    }), "Yes"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("wash"), "No");
    }), "No"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("wash"), "In Progress");
    }), "In Progress"), "\n               ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("wash"), "Already Washed");
    }), "Already Washed"), "\n               "), "\n               " ];
  }), "\n            "), "\n            ", HTML.Raw('<div class="modal-footer">\n               <a href="#" class="btn cancel">Cancel</a>\n               <a href="#" class="btn btn-primary save">Update Car</a>\n            </div>'), "\n         "), "\n      "), "\n   ");
}));

})();
