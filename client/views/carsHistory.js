  Template.carshistory.helpers({
    carshistory: function() {
      return CarsHistory.find();
    },

  })

  
  Template.carshistory.events({
 		'click .export': function (event) {
			exportTableToCSV.apply(this, [$('#carhisttable>table'), 'export.csv']);
			},
  });
