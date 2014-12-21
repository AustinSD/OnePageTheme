(function(){
Template.__checkName("taskhistory");
Template["taskhistory"] = new Template("Template.taskhistory", (function() {
  var view = this;
  return [ HTML.Raw("<h1>Task History</h1>\n   "), HTML.DIV({
    "class": "datagrid"
  }, "\n   ", HTML.DIV({
    "class": "table-responsive"
  }, "\n    ", HTML.TABLE("\n         ", HTML.THEAD("\n            ", HTML.TR("\n               ", HTML.TH("Timestamp"), "\n               ", HTML.TH("Completed"), "\n               ", HTML.TH("Time"), "\n               ", HTML.TH("ASM"), "\n               ", HTML.TH("Task"), "\n               ", HTML.TH("Porter"), "\n               ", HTML.TH("Status"), "\n               ", HTML.TH("Additional Notes"), "\n               ", HTML.TH("Username"), "\n            "), "\n         "), "\n         ", HTML.TBODY("\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("taskhistory"));
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
      return Spacebars.mustache(view.lookup("time"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("asm"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("task"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("porter"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("status"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("notes"));
    })), "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("username"));
    })), "\n            "), "\n            " ];
  }), "\n         "), "\n      "), "\n   "), "\n   ") ];
}));

})();
