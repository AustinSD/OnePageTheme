  Template.header.helpers({
    isUser: function(){
    	return Roles.userIsInRole(Meteor.user(), ['admin','Advisor','Porter']);
    },
    pickup: function () {
		return Shuttle.find({direction: "Pick Up"}).count();
		},
 	 dropoff: function () {
		return Shuttle.find({direction: "Drop Off"}).count();
		},
 	 taskcount: function () {
		return Task.find().count();
		},
 	 cars: function () {
		return Cars.find().count();
	},
	washCount: function () {
		return Cars.find({wash: 'Yes',$or: [{status: 'Prep'}, {status: 'Waiting'}]}).count();
	},
	shuttleDirection: function () {
		Session.set("shuttleDirection","Drop Off");
		return "shuttle";
		}
  });
Template.header.rendered = function() {
    // Anything here will get executed right when the template
    // is finished rendering.

};
Meteor.startup(function() {

});