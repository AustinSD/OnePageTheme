(function(){
Template.__checkName("modifyPorterModal");
Template["modifyPorterModal"] = new Template("Template.modifyPorterModal", (function() {
  var view = this;
  return HTML.DIV({
    id: "modifyPorters",
    "class": "modal fade",
    tabindex: "-1",
    "data-width": "760",
    style: "display:none;"
  }, "\n		", HTML.DIV({
    "class": "modal-dialog"
  }, "\n			", HTML.DIV({
    "class": "modal-content"
  }, "\n				", Spacebars.include(view.lookupTemplate("modifyPorterModalInner")), "\n			"), "\n		"), "\n	");
}));

Template.__checkName("modifyPorterModalInner");
Template["modifyPorterModalInner"] = new Template("Template.modifyPorterModalInner", (function() {
  var view = this;
  return [ HTML.Raw('<div class="modal-header">\n						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n						<h4 class="modal-title">Modify</h4>\n					</div>\n					'), HTML.DIV({
    "class": "modal-body"
  }, "\n					", HTML.FORM({
    id: "modPorterForm"
  }, "\n					", HTML.Raw("<h5>ASMs:</h5>"), "\n						", HTML.INPUT({
    id: "ASM-name",
    "class": "form-control",
    type: "text",
    placeholder: "Name",
    value: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("company"), "asm"));
    }
  }), "\n					", HTML.Raw("<h5>Porters:</h5>"), "\n						", HTML.INPUT({
    id: "porter-name",
    "class": "form-control",
    type: "text",
    placeholder: "Name",
    value: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("company"), "porters"));
    }
  }), "\n					", HTML.Raw("<h5>Drivers:</h5>"), "\n						", HTML.INPUT({
    id: "driver-name",
    "class": "form-control",
    type: "text",
    placeholder: "Name",
    value: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("company"), "drivers"));
    }
  }), "\n					"), "\n					"), HTML.Raw('\n					<div class="modal-footer">\n						<a class="btn btn-default" id="login-buttons-cancel-enroll-account-button">close</a>\n						<button class="btn btn-primary" id="login-buttons-enroll-account-button">submit</button>\n					</div>') ];
}));

})();
