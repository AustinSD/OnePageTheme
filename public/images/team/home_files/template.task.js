(function(){
Template.__checkName("task");
Template["task"] = new Template("Template.task", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("updateTaskDialog")), " ", Spacebars.include(view.lookupTemplate("newTaskDialog")), HTML.Raw("\n   <h1>Task Manager</h1> "), Blaze.If(function() {
    return Spacebars.call(view.lookup("isCreateUser"));
  }, function() {
    return [ "\n   ", HTML.BUTTON({
      id: "btnNewTask",
      "class": "btn btn-primary newTask"
    }, "New Task"), "\n   " ];
  }), "\n   ", HTML.DIV({
    "class": "datagrid"
  }, "\n      ", HTML.DIV({
    "class": "table-responsive"
  }, "\n         ", HTML.TABLE("\n            ", HTML.THEAD("\n               ", HTML.TR("\n                  ", HTML.TH("Timestamp"), "\n                  ", HTML.TH("Time"), "\n                  ", HTML.TH("ASM"), "\n                  ", HTML.TH("Task"), "\n                  ", HTML.TH("Porter"), "\n                  ", HTML.TH("Status"), "\n                  ", HTML.TH("Additional Notes"), "\n                  ", HTML.TH("Username"), "\n                  ", HTML.TH("Update"), "\n               "), "\n            "), "\n            ", HTML.TBODY("\n               ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("tasks"));
  }, function() {
    return [ "\n               ", HTML.TR({
      "class": function() {
        return Spacebars.mustache(view.lookup("statusClass"), view.lookup("status"));
      }
    }, "\n                  ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("timeParse"), view.lookup("timestamp"));
    })), "\n                  ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("time"));
    })), "\n                  ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("asm"));
    })), "\n                  ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("task"));
    })), "\n                  ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("porter"));
    })), "\n                  ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("status"));
    })), "\n                  ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("notes"));
    })), "\n                  ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("username"));
    })), "\n                  ", HTML.TD(HTML.A({
      id: "updateTask",
      "class": "btn btn-primary updateTask"
    }, "Update Task"), "\n                  "), "\n               "), "\n               " ];
  }), "\n            "), "\n         "), "\n      "), "\n   ") ];
}));

Template.__checkName("newTaskDialog");
Template["newTaskDialog"] = new Template("Template.newTaskDialog", (function() {
  var view = this;
  return HTML.DIV({
    "class": "modal",
    id: "newTaskDialog"
  }, "\n      ", HTML.DIV({
    "class": "modal-dialog"
  }, "\n         ", HTML.DIV({
    "class": "modal-content"
  }, "\n            ", HTML.Raw('<div class="modal-header">\n               <button type="button" class="close cancel" data-dismiss="modal">&times;</button>\n               <h2>New Task</h2>\n            </div>'), "\n            ", HTML.FORM({
    id: "newBody"
  }, "\n               ", HTML.DIV({
    "class": "modal-body"
  }, "\n                  Time:\n                  ", HTML.Raw('<input type="text" id="time" placeholder="Time">'), "\n                  ", HTML.Raw("<br>"), " ASM:\n                  ", HTML.SELECT({
    id: "asm",
    name: "asm"
  }, "\n                     ", HTML.Raw("<option></option>"), "\n                     ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("company"));
  }, function() {
    return [ " ", Blaze.Each(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("company"), "asm"));
    }, function() {
      return [ "\n                     ", HTML.OPTION({
        value: function() {
          return Spacebars.mustache(view.lookup("."));
        }
      }, Blaze.View(function() {
        return Spacebars.mustache(view.lookup("."));
      })), "\n                     " ];
    }), " " ];
  }), "\n                  "), "\n                  ", HTML.Raw("<br>"), " Task:\n                  ", HTML.Raw("<br>"), "\n                  ", HTML.TEXTAREA({
    id: "task",
    name: "task",
    placeholder: "Task"
  }), "\n                  ", HTML.Raw("<br>"), "\n               "), "\n            "), "\n            ", HTML.Raw('<div class="modal-footer">\n               <a href="#" class="btn cancel">Cancel</a>\n               <a href="#" class="btn btn-primary save">Save Task</a>\n            </div>'), "\n         "), "\n      "), "\n   ");
}));

Template.__checkName("updateTaskDialog");
Template["updateTaskDialog"] = new Template("Template.updateTaskDialog", (function() {
  var view = this;
  return HTML.DIV({
    "class": "modal",
    id: "updateTaskDialog"
  }, "\n      ", HTML.DIV({
    "class": "modal-dialog"
  }, "\n         ", HTML.DIV({
    "class": "modal-content"
  }, "\n            ", HTML.Raw('<div class="modal-header">\n               <button type="button" class="close cancel" data-dismiss="modal">&times;</button>\n               <h2>Update Task</h2>\n            </div>'), "\n            ", HTML.DIV({
    "class": "modal-body"
  }, "\n               ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("getTaskID"));
  }, function() {
    return [ "\n               ", HTML.H3("Task"), "\n               ", HTML.B("time: ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("time"));
    })), "\n               ", HTML.BR(), "\n               ", HTML.B("ASM: ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("asm"));
    })), "\n               ", HTML.BR(), "\n               ", HTML.B("Task: ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("task"));
    })), "\n               ", HTML.BR(), "\n               ", HTML.B("Username: ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("username"));
    })), "\n               ", HTML.BR(), "\n               ", HTML.BR(), " Status:\n               ", HTML.SELECT({
      id: "status",
      name: "status"
    }, "\n                  ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Started");
    }), "Started"), "\n                  ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Hold");
    }), "Hold"), "\n                  ", HTML.OPTION(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("selected"), view.lookup("status"), "Completed");
    }), "Completed"), "\n               "), "\n               ", HTML.BR(), " Notes:\n               ", HTML.INPUT({
      type: "text",
      id: "notes",
      value: function() {
        return Spacebars.mustache(view.lookup("notes"));
      }
    }), "\n               ", HTML.BR(), " Porter:\n               ", HTML.SELECT({
      id: "porter",
      name: "porter"
    }, "\n                  ", HTML.OPTION(), "\n                  ", Spacebars.With(function() {
      return Spacebars.call(view.lookup("company"));
    }, function() {
      return [ " ", Blaze.Each(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("company"), "porters"));
      }, function() {
        return [ "\n                  ", HTML.OPTION(HTML.Attrs(function() {
          return Spacebars.attrMustache(view.lookup("selected"), Spacebars.dot(view.lookup("getCarID"), "porter"), view.lookup("."));
        }), Blaze.View(function() {
          return Spacebars.mustache(view.lookup("."));
        })), "\n                  " ];
      }), " " ];
    }), "\n               "), "\n               ", HTML.BR(), " " ];
  }), "\n            "), "\n            ", HTML.Raw('<div class="modal-footer">\n               <a href="#" class="btn cancel">Cancel</a>\n               <a href="#" class="btn btn-primary save">Update Task</a>\n            </div>'), "\n         "), "\n      "), "\n   ");
}));

})();
