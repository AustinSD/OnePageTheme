if (Meteor.isClient) {
    Template.adminTemplate.helpers({
        // check if user is an admin
        isAdminUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
        }
    });

CarHistoryFilter = new Meteor.FilterCollections(CarsHistory, {
	name: 'carshistroy',
  template: 'carshistory',
    sort:{
    order: ['desc', 'asc'],
    defaults: [
      ['timestamp', 'desc'],
    ],
  },
  filters: {
		"asm": {
		title: 'ASM',
		operator: ['$regex', 'i'],
		condition: '$or',
		searchable: 'required'
		},
		"tagnum": {
		title: 'Tag Number',
		operator: ['$regex', 'i'],
		condition: '$or',
		searchable: 'required'
		},
		"timestamp": {
		title: 'Timestamp',
		operator: ['$regex', 'i'],
		condition: '$or',
		searchable: 'required'
		},
		"vehicle": {
		title: 'Vehicle',
		operator: ['$regex', 'i'],
		condition: '$or',
		searchable: 'required'
		},
		"porter": {
		title: 'Porter',
		operator: ['$regex', 'i'],
		condition: '$or',
		searchable: 'required'
		},
	},
  pager: {
    options: [5, 10, 15, 25, 50],
    itemsPerPage: 10,
    currentPage: 1,
    showPages: 5,
  }
  // Other arguments explained later. See Configuration.
});
ReportCarHistoryFilter = new Meteor.FilterCollections(CarsHistory, {
	name: 'carreport',
	//template: 'report',
	filters: {
		"name": {
			title: 'Name',
			operator: ['$regex', 'i'],
			condition: '$and',
			searchable: 'required'
		}
	},
});
ShuttleHistoryFilter = new Meteor.FilterCollections(ShuttleHistory, {
  template: 'shuttlehistory',
    sort:{
    order: ['desc', 'asc'],
    defaults: [
      ['timestamp', 'desc'],
    ],
  },
  filters: {
		"driver": {
		title: 'Driver',
		operator: ['$regex', 'i'],
		condition: '$or',
		searchable: 'required'
		},
		"name": {
		title: 'Name',
		operator: ['$regex', 'i'],
		condition: '$or',
		searchable: 'required'
		},
		"timestamp": {
		title: 'Timestamp',
		operator: ['$regex', 'i'],
		condition: '$or',
		searchable: 'required'
		},
		"number": {
		title: 'Number',
		operator: ['$regex', 'i'],
		condition: '$or',
		searchable: 'required'
		},
	},
  pager: {
    options: [5, 10, 15, 25, 50],
    itemsPerPage: 10,
    currentPage: 1,
    showPages: 5,
  }
  // Other arguments explained later. See Configuration.
});
TaskHistoryFilter = new Meteor.FilterCollections(TaskHistory, {
  template: 'taskhistory',
    sort:{
    order: ['desc', 'asc'],
    defaults: [
      ['timestamp', 'desc'],
    ],
  },
  filters: {
		"asm": {
		title: 'ASM',
		operator: ['$regex', 'i'],
		condition: '$or',
		searchable: 'required'
		},
		"timestamp": {
		title: 'Timestamp',
		operator: ['$regex', 'i'],
		condition: '$or',
		searchable: 'required'
		},
		"task": {
		title: 'Task',
		operator: ['$regex', 'i'],
		condition: '$or',
		searchable: 'required'
		},
		"porter": {
		title: 'Porter',
		operator: ['$regex', 'i'],
		condition: '$or',
		searchable: 'required'
		},
		"time": {
		title: 'Time',
		operator: ['$regex', 'i'],
		condition: '$or',
		searchable: 'required'
		},		
	},
  pager: {
    options: [5, 10, 15, 25, 50],
    itemsPerPage: 10,
    currentPage: 1,
    showPages: 5,
  }
  // Other arguments explained later. See Configuration.
});
ReportTaskHistoryFilter = new Meteor.FilterCollections(TaskHistory, {
	name: 'taskreport',
	template: 'report',
	filters: {
		"name": {
			title: 'Name',
			operator: ['$regex', 'i'],
			condition: '$and',
			searchable: 'required'
		}
	},
});
  	 Meteor.subscribe("cars");
    //Meteor.subscribe("carshistory");
    Meteor.subscribe("shuttle");
    //Meteor.subscribe("shuttlehistory");
    Meteor.subscribe("company");
    Meteor.subscribe("task");
    //Meteor.subscribe("taskhistory");
    
}
createUserServer = function (options) {
	Meteor.call('createUserServer',options);
};
createCar = function (options) {
	Meteor.call('createCar',options);
};
createCarHistory = function (carID) {
	Meteor.call('createCarHistory',carID);
};
createShuttleHistory = function (shuttleID) {
	Meteor.call('createShuttleHistory',shuttleID);
};
createShuttle = function (options) {
	Meteor.call('createShuttle',options);
}
createCompany = function (options) {
	Meteor.call('createCompany',options);
}
createTask = function (options) {
	Meteor.call('createTask',options);
}
createTaskHistory = function (options) {
	Meteor.call('createTaskHistory',options);
}
Meteor.methods({
	createUserServer: function (options) {
		Accounts.createUser(options);
	},
	createCar: function (options) {	
		if (options.vehicle.length == 0)
			throw new Meteor.Error(413, "Need a vehicle");
		if (options.company.length == 0)
			throw new Meteor.Error(413, "No Company");
		if (options.asm.length == 0)
			throw new Meteor.Error(413, "No ASM");

		Cars.insert({
			timestamp:	options.timestamp,
			vehicle:		options.vehicle,
			color:		options.color,
			tagnum:		options.tagnum,
			vin:			options.vin,
			team:			options.team,
      	asm:			options.asm,
			status:		options.status,
			notes: 		options.notes,
			porter: 		'',
			username: 	options.username,
			wash: 		options.wash,
			company:		options.company
		});
	},
	createCarHistory: function (carID) {
		var options = Cars.findOne({_id: carID});
		CarsHistory.insert({
			_id: 			carID,
			timestamp:	options.timestamp,
			vehicle:		options.vehicle,
			color:		options.color,
			tagnum:		options.tagnum,
			vin:			options.vin,
			team:			options.team,
      	asm:			options.asm,
			status:		options.status,
			notes: 		options.notes,
			porter: 		options.porter,
			username: 	options.username,
			wash: 		options.wash,
			company:		options.company,
			completestamp: options.completestamp
		});
	},
	createTask: function (options) {
		if (options.task.length == 0)
			throw new Meteor.Error(413, "Need a task");
		if (options.company.length == 0)
			throw new Meteor.Error(413, "No Company");
		if (options.asm.length == 0)
			throw new Meteor.Error(413, "No ASM");
			
		Task.insert({
			timestamp:	options.timestamp,
			time:			options.time,
      	asm:			options.asm,
			username: 	options.username,
			task: 		options.task,
			company:		options.company,
			status:     "",
			porter:		"",
      	notes:		"",
		});
	},
	createTaskHistory: function (taskID) {
		var options = Task.findOne({_id: taskID});
		TaskHistory.insert({
			_id: 			taskID,
	      timestamp: 	options.timestamp,
         time:       options.time,
         asm: 		   options.asm,
         username:   options.username,
         task: 		options.task,
         company: 	options.company,
         status: 	   options.status,
         porter: 		options.porter,
         notes: 	   options.notes,
         completestamp: options.completestamp
		});
	},
	createShuttle: function (options) {
		if (options.name.length == 0)
			throw new Meteor.Error(413, "Need a name");
		if (options.direction.length == 0)
			throw new Meteor.Error(413, "Need a direction");

		Shuttle.insert({
			timestamp: 		options.timestamp,
         time:        	options.time,
         name: 			options.name,
         number: 			options.number,
         address: 		options.address,
         driver: 			options.driver,
         direction:		options.direction,
         username: 		options.username,
         status: 			options.status,
         timeout: 		options.timeout,
         timein: 			options.timein,
         company:			options.company          
		});
	},
	createShuttleHistory: function (shuttleID) {
		var options = Shuttle.findOne({_id: shuttleID});
		ShuttleHistory.insert({
			_id: 			shuttleID,
	      timestamp: 	options.timestamp,
         time:        options.time,
         name: 			options.name,
         number: 		options.number,
         address: 		options.address,
         driver: 		options.driver,
         username: 	options.username,
         status: 		options.status,
         timeout: 		options.timeout,
         timein: 		options.timein,
         company:		options.company,
         completestamp: options.completestamp
		});
	},
	createCompany: function (options) {
		if (options.companyname.length == 0)
			throw new Meteor.Error(413, "No Company");

		Company.insert({
  			companyname:		options.companyname,
  			admin:				options.admin,
  			address:				options.address,
  			phone:				options.phone, 
		});

		var userId = Meteor.users.findOne({emails:{$elemMatch:{address: options.admin}}})._id;
		Roles.addUsersToRoles(userId, ['admin']);
		Meteor.users.update({_id: userId},{$set: {profile: {company: options.companyname}}});
	},
});