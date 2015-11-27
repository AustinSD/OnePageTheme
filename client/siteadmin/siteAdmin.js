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

				if ($(event.target).attr("value") === "noCompany") {
					Session.set("selectedCompany", "");
				}else {
					Session.set("selectedCompany", $(event.target).attr("value"));
				}
				
      },
});


  Template.accountsSiteAdmin.helpers({
    company: function() {
      return Company.find();
    },
    selectedCompany: function() {
      return Company.findOne({companyname: Session.get("selectedCompany")}); 
    },
    users: function() {
		return Meteor.users.find({'profile.company': Session.get("selectedCompany")});
	},
	email: function () {
		if (this.emails && this.emails.length)
			return this.emails[0].address;

		if (this.services) {
			//Iterate through services
			for (var serviceName in this.services) {
				var serviceObject = this.services[serviceName];
				//If an 'id' isset then assume valid service
				if (serviceObject.id) {
					if (serviceObject.email) {
						return serviceObject.email;
					}
				}
			}
		}
		return "";
	},
  });