(function(){
Template.__checkName("notFound");
Template["notFound"] = new Template("Template.notFound", (function() {
  var view = this;
  return HTML.DIV({
    "class": "not-found jumbotron"
  }, HTML.Raw("\n    <h2>404</h2>\n    <p>Sorry, we couldn't find a page at this address.</p>\n    "), HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("urlFor"), "home");
    }
  }, "Go to home"), "\n  ");
}));

})();
