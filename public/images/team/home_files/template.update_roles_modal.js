(function(){
Template.__checkName("updateRolesModal");
Template["updateRolesModal"] = new Template("Template.updateRolesModal", (function() {
  var view = this;
  return HTML.DIV({
    id: "updateroles",
    "class": "modal fade",
    tabindex: "-1",
    "data-width": "760",
    style: "display:none;"
  }, "\n		", HTML.DIV({
    "class": "modal-dialog"
  }, "\n			", HTML.DIV({
    "class": "modal-content"
  }, "\n				", Spacebars.include(view.lookupTemplate("updateRolesModalInner")), "\n			"), "\n		"), "\n	");
}));

Template.__checkName("updateRolesModalInner");
Template["updateRolesModalInner"] = new Template("Template.updateRolesModalInner", (function() {
  var view = this;
  return [ HTML.Raw('<div class="modal-header">\n		<h4>Update Roles</h4>\n	</div>\n 	'), HTML.DIV({
    "class": "modal-body"
  }, "\n 		", HTML.UL({
    "class": "list-group"
  }, "\n			", Blaze.Each(function() {
    return Spacebars.call(view.lookup("roles"));
  }, function() {
    return [ "\n				", Blaze.If(function() {
      return Spacebars.call(view.lookup("adminRole"));
    }, function() {
      return [ "\n					", HTML.LI({
        "class": "list-group-item"
      }, "\n						", HTML.EM("Admin Role"), "\n						", HTML.SPAN({
        "class": "pull-right"
      }, Blaze.View(function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "name"));
      })), "\n					"), "\n				" ];
    }, function() {
      return [ "\n					", HTML.LI({
        "class": "list-group-item"
      }, "\n						", HTML.BUTTON({
        "class": "btn btn-danger btn-xs remove-role",
        type: "button"
      }, "Delete"), "\n						", HTML.SPAN({
        "class": "pull-right"
      }, Blaze.View(function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "name"));
      })), "\n					"), "\n				" ];
    }), "\n			" ];
  }), "\n		"), "\n		", HTML.Raw('<div class="input-group">\n			<input type="text" class="form-control add-role-input" value="">\n			<span class="input-group-btn">\n				<button class="btn btn-success add-role disabled" type="button"><span class="glyphicon glyphicon-plus"></span> Create Role</button>\n			</span>\n		</div>'), "\n 	"), HTML.Raw('\n 	<div class="modal-footer">\n		<button type="button" data-dismiss="modal" class="btn btn-primary">Done</button>\n	</div>') ];
}));

})();
