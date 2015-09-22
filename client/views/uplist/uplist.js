 Template.uplist.events({
      'click #btnAddSalesPerson': function(e, t) {
          e.preventDefault();
          console.log("test");
          $('#newBody').get(0).reset();
          
          $("#newSalesDialog").modal("show");
      },
      'click .updateSales': function(e, t) {
          Session.set("salesID", this._id);
          e.preventDefault();
          $("#updateSalesDialog").modal("show");
      },
  });

  fakeFunction = function(params) {
        var properties = {
        timestamp: moment().format(),
        salesperson: params
        }
        console.log(properties)
        createUp(properties);
      }

 Template.uplist.helpers({
 company: function() {
      return Company.findOne({
        companyname: Meteor.user().profile.company
      }); 
 } ,
 uplist: function() {
      return Uplist.find();
    },
 });
 
 
 
 
//    ///////////////////////////////////////////////////////////////////////////////
//   // Update Uplist dialog
// 
//   Template.updateSalesDialog.helpers({
//       sales: function() {
//           return Sales.find();
//       },
//       getSalesID: function() {
//           return Sales.findOne({
//               _id: Session.get("SalesID")
//           });
//       },
//       company: function () {
// 			return Company.findOne({companyname: Meteor.user().profile.company});		
// 		},
//   });
// 
//   Template.updateSalesDialog.events({
//       'click .save': function(event, template) {
// 
//           var properties = {
//               salesperson: template.find("#salesperson").value,
//               completestamp: moment().format()
//           };
//           Sales.update(Session.get("salesID"), {
//               $set: properties
//           });
//           if (template.find("#salesperson").value == "Completed") {
//           createTaskHistory(Session.get("sales"));
//           	Sales.remove({
//           		_id: Session.get("salesID")
//           		});
//           	}
//           $("#updateSalesDialog").modal("hide");
//       },
//       'click .cancel': function() {
//           $("#updateSalesDialog").modal("hide");
//       },
//   });
// 
//   Template.updateSalesDialog.error = function() {
//       return Session.get("createError");
//   };

 
 
  ///////////////////////////////////////////////////////////////////////////////
  // New Task dialog

  Template.newSalesDialog.helpers({
    //   company: function () {
		// 	return Company.findOne({companyname: Meteor.user().profile.company});		
		// },
  });
  Template.newTaskDialog.events({
      'click .save': function(event, template) {

          var properties = {
              timestamp: moment().format(),
              time: template.find("#time").value,
              salesperson: template.find("#salesperson").value,
              company: Meteor.user().profile.company,
          };
          createSales(properties);
          $("#newSalesDialog").modal("hide");
      },
      'click .cancel': function() {
          $("#newSalesDialog").modal("hide");
      }
  });