(function(){	Session.set("showupdateCarDialog", false);
	Session.set("showNewCarDialog", false);
	Session.set("shuttleDirection","Pick Up");
	
	UI.registerHelper('selected', function(foo, bar){
	//return (foo == bar) ? ' selected' : '';
	if (foo == bar) {
		return 'selected';
	}
	else {
		return '';
	}

	});
	UI.registerHelper("statusClass" , function(status){
    if(status == "Ready"){
        return 'carReady';
    }
    if (status == "Prep") {
    return 'carPrep';
    }
    if (status == "Waiting") {
    	return "carWait";
    }
});
	UI.registerHelper("timeParse" , function(value){
		//converts timestamps to readable format
		return moment(value).format("MM/DD/YYYY h:mm A");
});
Meteor.startup(
		function() {
		    var revapi;
	        jQuery(document).ready(function() {
	           revapi = jQuery('.fullscreenbanner').revolution(
	            {
	                delay:15000,
	                startwidth:1170,
	                startheight:500,
	                hideThumbs:10,
	                fullWidth:"on",
	                fullScreen:"on",
	                hideCaptionAtLimit: "",
	                dottedOverlay:"twoxtwo",
	                navigationStyle:"preview4",
	                fullScreenOffsetContainer: ""
	            });	            
	        });
});

})();
