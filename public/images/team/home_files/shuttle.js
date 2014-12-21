(function(){  Template.shuttle.helpers({
      shuttle: function() {
      	var dir = Session.get("shuttleDirection");
          return Shuttle.find({direction: dir});
      },
      isCreateUser: function() {
          return Roles.userIsInRole(Meteor.user(), ['admin', 'Advisor']);
      },
      
      pickup: function () {
return Shuttle.find({direction: "Pick Up"}).count();
},
 	   dropoff: function () {
return Shuttle.find({direction: "Drop Off"}).count();
},
 	   tasks: function () {
return Task.find().count();
},
 	   cars: function () {
return Cars.find().count();
},
shuttleDirection: function(){
	return Session.get("shuttleDirection");
}
  });

Template.shuttle.rendered = function(){
    var direction = Session.get("shuttleDirection");
    $("#toggleDir").val(direction);
  };  
    
  Template.shuttle.events({
  	'change #toggleDir' :function(e,t) {
		Session.set("shuttleDirection",t.find("#toggleDir").value);
	},
      'click #btnNewShuttle': function(e, t) {
          e.preventDefault();
          $('#newBody').get(0).reset();
          $("#newShuttleDialog").modal("show");
      },
      'click .updateShuttle': function(e, t) {
          Session.set("shuttleID", this._id);
          e.preventDefault();
          if (Roles.userIsInRole(Meteor.user(), ['admin', 'Advisor'])) {
          $("#updateShuttleDialogAdvisor").modal("show");
       }
       else {
       	$("#updateShuttleDialog").modal("show");
       }
      },
  });

  ///////////////////////////////////////////////////////////////////////////////
  // Update Shuttle dialog

  Template.updateShuttleDialog.helpers({
      shuttle: function() {
          return Shuttle.find();
      },
      getShuttleID: function() {
          return Shuttle.findOne({
              _id: Session.get("shuttleID")
          });
      },
      company: function () {
			return Company.findOne({companyname: Meteor.user().profile.company});		
		},
  });

  Template.updateShuttleDialog.events({
      'click .save': function(event, template) {

          var properties = {
              timeout: template.find("#timeout").value,
              timein: template.find("#timein").value,
              status: template.find("#status").value,
              driver: template.find("#driver").value,
              completestamp: moment().format()
          };
         Shuttle.update(Session.get("shuttleID"), {
              $set: properties
          });
          if (template.find("#status").value == "Completed") {
          	createShuttleHistory(Session.get("shuttleID"));
          	Shuttle.remove({
          		_id: Session.get("shuttleID")
          		});
          	}
          $("#updateShuttleDialog").modal("hide");
      },
      'click .cancel': function() {
          $("#updateShuttleDialog").modal("hide");
      },
  });

  ///////////////////////////////////////////////////////////////////////////////
  // Update Shuttle dialog Advisor

  Template.updateShuttleDialogAdvisor.helpers({
      shuttle: function() {
          return Shuttle.find();
      },
      getShuttleID: function() {
          return Shuttle.findOne({
              _id: Session.get("shuttleID")
          });
      },
      company: function () {
			return Company.findOne({companyname: Meteor.user().profile.company});		
		},
		timesplit: function () {			
			var time = Shuttle.findOne({_id: Session.get("shuttleID")}).time;
			var splits = time.split(":");
			var splits2 = splits[1].split(" ");
			var hour = splits[0];
			var minute = splits2[0];
			var ampm = splits2[1];
			return [{'hour':hour, 'minute':minute , 'ampm': ampm}];
			}
  });

  Template.updateShuttleDialogAdvisor.events({
      'click .save': function(event, template) {

          var properties = {
              time: template.find("#hourAdvisor").value +":"+template.find("#minuteAdvisor").value + " " + template.find("#ampmAdvisor").value,
              name: template.find("#nameAdvisor").value,
              number: template.find("#numberAdvisor").value,
              address: template.find("#addressAdvisor").value,
              direction: template.find("#directionAdvisor").value,
              username: Meteor.user().emails[0].address,
              company: Meteor.user().profile.company,
              timeout: template.find("#timeoutAdvisor").value,
              timein: template.find("#timeinAdvisor").value,
              status: template.find("#statusAdvisor").value,
              driver: template.find("#driverAdvisor").value,
              completestamp: moment().format()
          };
         Shuttle.update(Session.get("shuttleID"), {
              $set: properties
          });
          if (template.find("#statusAdvisor").value == "Completed") {
          	createShuttleHistory(Session.get("shuttleID"));
          	Shuttle.remove({
          		_id: Session.get("shuttleID")
          		});
          	}
          $("#updateShuttleDialogAdvisor").modal("hide");
      },
      'click .cancel': function() {
          $("#updateShuttleDialogAdvisor").modal("hide");
      },
  });
  
  Template.updateShuttleDialog.error = function() {
      return Session.get("createError");
  };

  ///////////////////////////////////////////////////////////////////////////////
  // New Shuttle dialog

  Template.newShuttleDialog.events({
      'click .save': function(event, template) {

          var properties = {
              timestamp: moment().format(),
              time: template.find("#hour").value +":"+template.find("#minute").value + " " + template.find("#ampm").value,
              name: template.find("#name").value,
              number: template.find("#number").value,
              address: template.find("#address").value,
              direction: template.find("#direction").value,
              username: Meteor.user().emails[0].address,
              company: Meteor.user().profile.company       
          };
          //console.log(properties);
          createShuttle(properties);
          $("#newShuttleDialog").modal("hide");
      },
      'click .cancel': function() {
          $("#newShuttleDialog").modal("hide");
      }
  });

})();
