  Template.carshistory.helpers({
    carshistory: function() {
      return CarsHistory.find();
    },

  })

  
  Template.carshistory.rendered = function() {
 $( "#start" ).datepicker({
defaultDate: "+1w",
changeMonth: true,
numberOfMonths: 3,
onClose: function( selectedDate ) {
$( "#finish" ).datepicker( "option", "minDate", selectedDate );
}
});
$( "#finish" ).datepicker({
defaultDate: "+1w",
changeMonth: true,
numberOfMonths: 3,
onClose: function( selectedDate ) {
$( "#start" ).datepicker( "option", "maxDate", selectedDate );
}
});
}
  Template.carshistory.events({
 		'click .export': function (event) {
			exportTableToCSV.apply(this, [$('#carhisttable>table'), 'export.csv']);
			},
  'focus #start': function (event) {
    // show datepicker
    $('#start').datepicker();  
  },
  'focus #finish': function (event) {
    // show datepicker
    $('#finish').datepicker();  
  },
  'click .btn-sm': function(event, template) {
  	console.log('Date Range Button, From: ' + template.find("#start").value + ' To: ' + template.find("#finish").value );
  	  var myQuery = {
    selector: {
      timestamp: '2012-12-12'
    },
    options: {
      limit: 300,
      skip: 0
    }
  };
  PeopleFilter.filter.set('timestamp', {value:'2012-12-12', operator: ['$lt']});
  //CarHistoryFilter.query.set(myQuery);
  	}
  });
