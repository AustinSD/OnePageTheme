(function(){
Template.__checkName("shuttlehistory");
Template["shuttlehistory"] = new Template("Template.shuttlehistory", (function() {
  var view = this;
  return [ HTML.Raw("<h1>Shuttle History</h1>\n   "), HTML.DIV({
    "class": "datagrid"
  }, "\n   ", HTML.DIV({
    "class": "table-responsive"
  }, "\n      ", HTML.TABLE("\n         ", HTML.THEAD("\n            ", HTML.TR("\n               ", HTML.TH("Timestamp"), "\n					", HTML.TH("Completed"), "\n               ", HTML.TH("Time Requested"), "\n               ", HTML.TH("Customer Name"), "\n               ", HTML.TH("Phone Number"), "\n               ", HTML.TH("Address"), "\n               ", HTML.TH("Driver"), "\n               ", HTML.TH("Username"), "\n               ", HTML.TH("Status"), "\n               ", HTML.TH("Time Out"), "\n               ", HTML.TH("Time In"), "\n            "), "\n         "), "\n         ", HTML.TBODY("\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("shuttlehistory"));
  }, function() {
    return [ "\n            ", HTML.TR({
      "class": function() {
        return Spacebars.mustache(view.lookup("statusClass"), view.lookup("status"));
      }
    }, "\n               ", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("timeParse"), view.lookup("timestamp"));
    })), "\n					", HTML.TD(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("timeParse"), view.lookup("completestamp"));
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
    })), "\n            "), "\n            " ];
  }), "\n         "), "\n      "), "\n   "), "\n   ") ];
}));

})();
