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
        //notes: [ {time: moment().format(),note: template.find("#notesNew").value, user: Meteor.user().profile.name}],
        porter: '',
        username: Meteor.user().emails[0].address,
        wash: template.find("#washNew").value,
        company: Meteor.user().profile.company
      };
      
      if(template.find("#notesNew").value != ""){
            properties.notes = {notes:  {time: moment().format(),note: template.find("#notesNew").value, user: Meteor.user().profile.name}}
      }
      
      createCar(properties);
      $("#newCarDialog").modal("hide");   
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