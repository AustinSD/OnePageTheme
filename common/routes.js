Router.configure({
	layoutTemplate: 'basicLayout',
	notFoundTemplate: 'notFound',
	yieldTemplates: {
		'header': { to : 'header'},
		'footer': { to: 'footer'}	
	}
	});

Router.route('/', function () {
  this.redirect('cars');
});
Router.route('/home', function () {
  this.redirect('cars');
});

Router.route('/signup');

Router.route('/carshistory', {
  name: 'carshistory',
  path: '/carshistory',
  template: 'carshistory',
  onBeforeAction: function () {
    if (!Meteor.userId()) {
		this.redirect('cars');
  } else {
    this.next();
  }},
  action: function () {
	this.layout('appLayout');
    // render all templates and regions for this route
    this.render();
  }
});
Router.route('/cars', {
  name: 'cars',
  path: '/cars',
  template: 'cars', 

  action: function () {
	this.layout('appLayout');
    // render all templates and regions for this route
    this.render();
  }
});
Router.route('/shuttle', {
  name: 'shuttle',
  path: '/shuttle',
  template: 'shuttle',
  onBeforeAction: function () {
    if (!Meteor.userId()) {
		this.redirect('cars');
  } else {
    this.next();
  }},
  action: function () {
  	this.layout('appLayout');
    // render all templates and regions for this route
    this.render();
  }
});
Router.route('/shuttleD', {
  name: 'shuttleD',
  path: '/shuttleD',
  template: 'shuttle',
  onBeforeAction: function () {
    if (!Meteor.userId()) {
		this.redirect('cars');
  } else {
  	Session.set("shuttleDirection","Drop Off");
  	this.redirect('shuttle');
    //this.next();
  }},
  action: function () {
  	this.layout('appLayout');
    // render all templates and regions for this route
    this.render();
  }
});
Router.route('/shuttleP', {
  name: 'shuttleP',
  path: '/shuttleP',
  template: 'shuttle',
  onBeforeAction: function () {
    if (!Meteor.userId()) {
		this.redirect('cars');
  } else {
  	Session.set("shuttleDirection","Pick Up");
  	this.redirect('shuttle');
    //this.next();
  }},
  action: function () {
  	this.layout('appLayout');
    // render all templates and regions for this route
    this.render();
  }
});
Router.route('/shuttlehistory', {
  name: 'shuttlehistory',
  path: '/shuttlehistory',
  template: 'shuttlehistory',
  onBeforeAction: function () {
    if (!Meteor.userId()) {
		this.redirect('cars');
  } else {
    this.next();
  }},
  action: function () {
  	this.layout('appLayout');
    // render all templates and regions for this route
    this.render();
  }
});
Router.route('/task', {
  name: 'task',
  path: '/task',
  template: 'task',
  onBeforeAction: function () {
    if (!Meteor.userId()) {
		this.redirect('cars');
  } else {
    this.next();
  }},
  action: function () {
  	this.layout('appLayout');
    // render all templates and regions for this route
    this.render();
  }
});
Router.route('/taskhistory', {
  name: 'taskhistory',
  path: '/taskhistory',
  template: 'taskhistory',
  onBeforeAction: function () {
    if (!Meteor.userId()) {
		this.redirect('cars');
  } else {
    this.next();
  }},
  action: function () {
  	this.layout('appLayout');
    // render all templates and regions for this route
    this.render();
  }
});
Router.route('/adminTemplate', {
  name: 'adminTemplate',
  path: '/adminTemplate',
  template: 'adminTemplate',
  onBeforeAction: function () {
    if (!Meteor.userId()) {
		this.redirect('cars');
  } else {
    this.next();
  }},
  action: function () {
  	this.layout('appLayout');
    // render all templates and regions for this route
    this.render();
  }
});
Router.route('/siteAdmin', {
  name: 'siteAdmin',
  path: '/siteAdmin',
  template: 'siteAdmin',
  onBeforeAction: function () {
    if (!Meteor.userId()) {
		this.redirect('cars');
  } else {
    this.next();
  }},
  action: function () {
  	this.layout('appLayout');
    // render all templates and regions for this route
    this.render();
  }
});