  Template.task.helpers({
      tasks: function() {
          return Task.find();
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
 	   taskcount: function () {
return Task.find().count();
},
 	   cars: function () {
return Cars.find().count();
},
  });
  
  Template.task.events({
      'click #btnNewTask': function(e, t) {
          e.preventDefault();
          $('#newBody').get(0).reset();
          $("#newTaskDialog").modal("show");
      },
      'click .updateTask': function(e, t) {
          Session.set("taskID", this._id);
          e.preventDefault();
          $("#updateTaskDialog").modal("show");
      },

  });

  ///////////////////////////////////////////////////////////////////////////////
  // Update Task dialog

  Template.updateTaskDialog.helpers({
      tasks: function() {
          return Task.find();
      },
      getTaskID: function() {
          return Task.findOne({
              _id: Session.get("taskID")
          });
      },
      company: function () {
			return Company.findOne({companyname: Meteor.user().profile.company});		
		},
  });

  Template.updateTaskDialog.events({
      'click .save': function(event, template) {

          var properties = {
              status: template.find("#status").value,
              notes: template.find("#notes").value,
              porter: template.find("#porter").value,
              completestamp: moment().format()
          };
          Task.update(Session.get("taskID"), {
              $set: properties
          });
          if (template.find("#status").value == "Completed") {
          createTaskHistory(Session.get("taskID"));
          	Task.remove({
          		_id: Session.get("taskID")
          		});
          	}
          $("#updateTaskDialog").modal("hide");
      },
      'click .cancel': function() {
          $("#updateTaskDialog").modal("hide");
      },
  });

  Template.updateTaskDialog.error = function() {
      return Session.get("createError");
  };

  ///////////////////////////////////////////////////////////////////////////////
  // New Task dialog

  Template.newTaskDialog.helpers({
      company: function () {
			return Company.findOne({companyname: Meteor.user().profile.company});		
		},
  });
  Template.newTaskDialog.events({
      'click .save': function(event, template) {

          var properties = {
              timestamp: moment().format(),
              time: template.find("#time").value,
              asm: template.find("#asm").value,
              task: template.find("#task").value,
              username: Meteor.user().emails[0].address,
              company: Meteor.user().profile.company,
          };
          createTask(properties);
          $("#newTaskDialog").modal("hide");
      },
      'click .cancel': function() {
          $("#newTaskDialog").modal("hide");
      }
  });