(function(){
Template.__checkName("adminTemplate");
Template["adminTemplate"] = new Template("Template.adminTemplate", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("isAdminUser"));
  }, function() {
    return [ "\n        ", Spacebars.include(view.lookupTemplate("accountsAdmin")), "\n    " ];
  }, function() {
    return "\n        Must be admin to see this...\n    ";
  });
}));

})();
