  Template.cars.helpers({
    cars: function() {
      return Cars.find();
    },
    isCreateUser: function() {
      return Roles.userIsInRole(Meteor.user(), ['admin', 'Advisor']);
    },
    lastNote: function (id) {
    	var lastNote = Cars.findOne({_id: id},{ sort: {"notes.time": -1}});
    	return lastNote.notes[lastNote.notes.length -1 ];	
    }
  });

  Template.cars.events({
    'click #btnNewCar': function(e, t) {
      e.preventDefault();
      $('#newBody').get(0).reset();
      $("#newCarDialog").modal("show");
    },
    'click .updateCar': function(e, t) {
      Session.set("carID", this._id);
      e.preventDefault();
      if (Roles.userIsInRole(Meteor.user(), ['admin', 'Advisor'])) {
        $("#updateCarDialogAdvisor").modal("show");
      }
      else {
        $("#updateCarDialog").modal("show");
      }
    },
    'click #notesCar': function(e, t) {
      e.preventDefault();
      $('#updateNotesBody').get(0).reset();
      $("#updateNotes").modal("show");
    },
  });

  ///////////////////////////////////////////////////////////////////////////////
  // Update Car dialog

  Template.updateCarDialog.helpers({
    cars: function() {
      return Cars.find();
    },
    getCarID: function() {
      return Cars.findOne({
        _id: Session.get("carID")
      });
    },
    company: function() {
      return Company.findOne({
        companyname: Meteor.user().profile.company
      });
    },
    isCreateUser: function() {
      return Roles.userIsInRole(Meteor.user(), ['admin', 'Advisor']);
    },
  });

  Template.updateCarDialog.events({
    'click .save': function(event, template) {

      var properties = {
        status: template.find("#statusUpdate").value,
        porter: template.find("#porterUpdate").value,
        wash: template.find("#washUpdate").value,
        completestamp: moment().format() //moment().format('MM/DD/YYYY h:mm A')
      };
      Cars.update(Session.get("carID"), {
        $set: properties
      });
      if(template.find("#notesUpdate").value != ""){
        Cars.update(Session.get("carID"), {
            $push: {notes:  {time: moment().format(),note: template.find("#notesUpdate").value, user: Meteor.user().profile.name}}
          });
          template.find("#notesUpdate").value = "";
      };
      if (template.find("#statusUpdate").value == "Completed" || template.find("#statusUpdate").value == "Delete") {
        createCarHistory(Session.get("carID"));
        Cars.remove({
          _id: Session.get("carID")
        });
      };
      $("#updateCarDialog").modal("hide");
    },
    'click .cancel': function() {
      $("#updateCarDialog").modal("hide");
    },
  });

  Template.updateCarDialog.error = function() {
    return Session.get("createError");
  };

  ///////////////////////////////////////////////////////////////////////////////
  // updateCarDialogAdvisor 

  Template.updateCarDialogAdvisor.helpers({
    cars: function() {
      return Cars.find();
    },
    getCarID: function() {
      return Cars.findOne({
        _id: Session.get("carID")
      });
    },
    company: function() {
      return Company.findOne({
        companyname: Meteor.user().profile.company
      });
    },
    isCreateUser: function() {
      return Roles.userIsInRole(Meteor.user(), ['admin', 'Advisor']);
    },
  });
  Template.updateCarDialogAdvisor.events({
    'click .save': function(event, template) {
      event.preventDefault();
      var properties = {
        vehicle: template.find("#vehicleUpdateAdvisor").value,
        color: template.find("#colorUpdateAdvisor").value,
        tagnum: template.find("#tagnumUpdateAdvisor").value,
        vin: template.find("#vinUpdateAdvisor").value,
        team: template.find("#teamUpdateAdvisor").value,
        asm: template.find("#asmUpdateAdvisor").value,
        status: template.find("#statusUpdateAdvisor").value,
        //$push: {notes: [ {time: moment().format(),note: template.find("#notesUpdateAdvisor").value}]}
        porter: template.find("#porterUpdateAdvisor").value,
        wash: template.find("#washUpdateAdvisor").value,
        completestamp: moment().format() //moment().format('MM/DD/YYYY h:mm A')
      };
      Cars.update(Session.get("carID"), {
        $set: properties
      });
      if(template.find("#notesUpdateAdvisor").value != ""){
        Cars.update(Session.get("carID"), {
            $push: {notes:  {time: moment().format(),note: template.find("#notesUpdateAdvisor").value}}
          });
          template.find("#notesUpdateAdvisor").value = "";
      }
      if (template.find("#statusUpdateAdvisor").value == "Completed" || template.find("#statusUpdateAdvisor").value == "Delete") {
        createCarHistory(Session.get("carID"));
        Cars.remove({
          _id: Session.get("carID")
        });
      }
      $("#updateCarDialogAdvisor").modal("hide");
    },
    'click .cancel': function() {
      $("#updateCarDialogAdvisor").modal("hide");
    },
  });

  Template.updateCarDialogAdvisor.error = function() {
    return Session.get("createError");
  };

  ///////////////////////////////////////////////////////////////////////////////
  // New Car dialog

  Template.newCarDialog.helpers({
    company: function() {
      return Company.findOne({
        companyname: Meteor.user().profile.company
      });
    },
  });

  Template.newCarDialog.events({
    'click .save': function(event, template) {

      var properties = {
        timestamp: moment().format(), //moment().format('MM/DD/YYYY h:mm A'),
        vehicle: template.find("#vehicleNew").value,
        color: template.find("#colorNew").value,
        tagnum: template.find("#tagnumNew").value,
        vin: template.find("#vinNew").value,
        team: template.find("#teamNew").value,
        asm: template.find("#asmNew").value,
        status: template.find("#statusNew").value,
        notes: [ {time: moment().format(),note: template.find("#notesNew").value}],
        porter: '',
        username: Meteor.user().emails[0].address,
        wash: template.find("#washNew").value,
        company: Meteor.user().profile.company
      };
      //if (ValidationCar.valid_name(properties.asm)) {
      createCar(properties);
      $("#newCarDialog").modal("hide");
      //} 	    
    },
    'click .cancel': function() {
      $("#newCarDialog").modal("hide");
    }
  });

  ValidationCar = {
    clear: function() {
      return Session.set("error", undefined);
    },
    set_error: function(message) {
      return Session.set("error", message);
    },
    valid_name: function(name) {
      this.clear();
      if (name.length == 0) {
        this.set_error("Fill in required fields");
        return false;
      }
      else {
        this.clear();
        return true;
      }
    },
  };