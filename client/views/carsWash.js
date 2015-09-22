  Template.carWash.helpers({
    cars: function() {
      return Cars.find({$or:[{wash: 'Yes'},{wash: 'In Progress'}]});
    },
    lastNote: function (id) {
    	var lastNote = Cars.findOne({_id: id},{ sort: {"notes.time": -1}});
    	return lastNote.notes[lastNote.notes.length -1 ];	
    }
  });


  Template.carWash.events({
    'click .updateWash': function(e, t) {
      Session.set("carID", this._id);
      e.preventDefault();
        $("#updateCarWashDialog").modal("show");
    },

  });
  

  ///////////////////////////////////////////////////////////////////////////////
  // Update Car Wash dialog

  Template.updateCarWashDialog.helpers({
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

  Template.updateCarWashDialog.events({
    'click .save': function(event, template) {

      var properties = {
        status: template.find("#statusUpdate").value,
        washer: template.find("#washerUpdate").value,
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
      }
      $("#updateCarWashDialog").modal("hide");
    },
    'click .cancel': function() {
      $("#updateCarWashDialog").modal("hide");
    },
  });

  Template.updateCarDialog.error = function() {
    return Session.get("createError");
  };
