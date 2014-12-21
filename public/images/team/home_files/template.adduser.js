(function(){
Template.__checkName("addUserModal");
Template["addUserModal"] = new Template("Template.addUserModal", (function() {
  var view = this;
  return HTML.DIV({
    id: "adduser",
    "class": "modal fade",
    tabindex: "-1",
    "data-width": "760",
    style: "display:none;"
  }, "\n		", HTML.DIV({
    "class": "modal-dialog"
  }, "\n			", HTML.DIV({
    "class": "modal-content"
  }, "\n				", Spacebars.include(view.lookupTemplate("addUserModalInner")), "\n			"), "\n		"), "\n	");
}));

Template.__checkName("addUserModalInner");
Template["addUserModalInner"] = new Template("Template.addUserModalInner", (function() {
  var view = this;
  return HTML.Raw('<div class="modal-header">\n						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n						<h4 class="modal-title">Create User</h4>\n					</div>\n					<div class="modal-body">\n					<form id="addUserForm">\n						Name:\n						<input id="enroll-account-name" class="form-control" type="text" placeholder="Name">\n						Email:\n						<input id="enroll-account-email" class="form-control" type="email" placeholder="Email">\n						Password:\n						<input id="enroll-account-password" class="form-control" type="password" placeholder="Password">\n					</form>\n					</div>\n					<div class="modal-footer">\n						<a class="btn btn-default" id="login-buttons-cancel-enroll-account-button">close</a>\n						<button class="btn btn-primary" id="login-buttons-enroll-account-button">\n							set password\n						</button>\n					</div>');
}));

})();
