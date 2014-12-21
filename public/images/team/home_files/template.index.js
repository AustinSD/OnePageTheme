(function(){
Template.__checkName("basicLayout");
Template["basicLayout"] = new Template("Template.basicLayout", (function() {
  var view = this;
  return [ HTML.HEAD("\n  ", HTML.TITLE("Dealer Logistics"), "\n"), HTML.Raw('\n<!--<header>\n{{> yield "header"}}\n</header>-->\n\n'), HTML.DIV({
    "class": "mainBody"
  }, "\n", Spacebars.include(view.lookupTemplate("yield")), "\n") ];
}));

})();
