Template.contact.events({
  'click #contactSubmit': function (event) {
   var emailFrom = $('#emailAddress').val();
   var emailSubject = $('#emailName').val();
   var emailMessage = $('#emailMessage').val();
	Meteor.call('sendEmail',
            'austin.johnson.sd@gmail.com',//To
            emailFrom, //From
            emailSubject, //Subject
            emailMessage //Message
            ); 
  },
});