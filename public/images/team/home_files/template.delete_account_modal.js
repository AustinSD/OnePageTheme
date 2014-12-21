(function(){
Template.__checkName("deleteAccountModal");
Template["deleteAccountModal"] = new Template("Template.deleteAccountModal", (function() {
  var view = this;
  return HTML.DIV({
    id: "deleteaccount",
    "class": "modal fade",
    tabindex: "-1",
    "data-width": "760",
    style: "display:none;"
  }, "\n		", HTML.DIV({
    "class": "modal-dialog"
  }, "\n			", HTML.DIV({
    "class": "modal-content"
  }, "\n				", Spacebars.include(view.lookupTemplate("deleteAccountModalInner")), "\n			"), "\n		"), "\n	");
}));

Template.__checkName("deleteAccountModalInner");
Template["deleteAccountModalInner"] = new Template("Template.deleteAccountModalInner", (function() {
  var view = this;
  return Spacebars.With(function() {
    return Spacebars.call(view.lookup("userInScope"));
  }, function() {
    return [ "\n	 	", HTML.DIV({
      "class": "modal-body"
    }, "\n	 		", HTML.H4("Are you sure you want to delete ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("email"));
    }), "?"), "\n	 	"), "\n	 	", HTML.DIV({
      "class": "modal-footer"
    }, "\n			", HTML.BUTTON({
      type: "button",
      "data-dismiss": "modal",
      "class": "btn btn-default"
    }, "Cancel"), "\n			", HTML.BUTTON({
      type: "button",
      "class": "btn btn-danger"
    }, "Delete"), "\n		"), "\n	" ];
  });
}));

})();
