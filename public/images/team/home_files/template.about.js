(function(){
Template.__checkName("about");
Template["about"] = new Template("Template.about", (function() {
  var view = this;
  return [ HTML.Raw('<div class="body">\n</div> \n<div class="mission">\n<center><h4><b>Our Mission</b></h4><br></center>\n<p>We started dealer desk with the objective to infuse technology with solid processes and procedures. Our goal is to help increase your dealership\'s effectiveness to provide your guests with an unprecedented customer service experience. Our products are designed and developed by professionals with dealership experience.</p><br>\n<br>\n<br>\n<center><h4><b>Our Vision</b></h4><br></center>\n<p> The purpose of our applications are to help your team improve efficiency, enhance accountability, and maintain streamline processes.</p>\n<br>\n<br>\n<center><h4><b>Why Us?</b></h4><br></center>\n<p>Created by people with dealership experience. We are qualified to develop effective applications and will continue to add new features and improvements.</p>\n\n<p>Still on the fence? Try our services for free for 1 month. </p>\n</div>\n'), Spacebars.include(view.lookupTemplate("footer")) ];
}));

})();
