(function(){
Template.__checkName("signup");
Template["signup"] = new Template("Template.signup", (function() {
  var view = this;
  return HTML.FORM({
    id: "signUp"
  }, "\n  ", Blaze.If(function() {
    return Spacebars.call(view.lookup("error"));
  }, function() {
    return [ "\n    ", HTML.SPAN({
      id: "error",
      style: "color: red;"
    }, "\n      ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("error"));
    }), HTML.BR(), "\n    "), "\n  " ];
  }), HTML.Raw('\nCompany Name: 		<input type="text" id="companyname" placeholder="Company Name"><br>\nUser: 				'), Blaze.View(function() {
    return Spacebars.mustache(view.lookup("currentUser"));
  }), HTML.Raw('<br>\nAddress: 			<input type="text" id="address" placeholder="Address"><br>\nPhone:				<input type="tel" id="phone" placeholder="Phone"><br>\n<a type="submit" id="btnCompanySignUp" class="btn btn-primary CompanySignUp">Sign Up Company</a>\n'));
}));

})();
