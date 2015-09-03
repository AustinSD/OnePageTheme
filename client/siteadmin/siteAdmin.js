  Template.siteAdmin.helpers({
    company: function() {
      return Company.find();
    },
    selectedCompany: function() {
      return Company.findOne({companyname: Session.get("selectedCompany")}); 
    },
    users: function() {
		return Meteor.users.find({'profile.company': Session.get("selectedCompany")});
	}
  });

Template.siteAdmin.events({
		'click .btnCompany': function(event, template) {
      		event.preventDefault();

				console.log($(event.target).attr("value"));
				if ($(event.target).attr("value") === "noCompany") {
					Session.set("selectedCompany", "");
				}else {
					Session.set("selectedCompany", $(event.target).attr("value"));
				}
				
      },
});