    Meteor.startup(function () {
        // bootstrap the admin user if they exist -- You'll be replacing the id later
        if (Meteor.users.findOne("d9B4aPYuPcHYiMQfM"))
            Roles.addUsersToRoles("d9B4aPYuPcHYiMQfM", ['admin']);

    });
       
Meteor.publish("cars", function () {
	if (!this.userId) {
        this.ready();
        return;
   }
	var company = Meteor.users.findOne(this.userId).profile.company;
	return Cars.find({company : company});
});
Meteor.FilterCollections.publish(CarsHistory, {
  name: 'carshistory',
  callbacks: {
    beforePublish: function(query, handler){
      if (handler.userId)
        query.selector =  _.extend(query.selector, {company: Meteor.users.findOne(handler.userId).profile.company});
      return query;
    },
    },
});
Meteor.FilterCollections.publish(ShuttleHistory, {
  name: 'shuttlehistory',
  callbacks: {
    beforePublish: function(query, handler){
      if (handler.userId)
        query.selector =  _.extend(query.selector, {company: Meteor.users.findOne(handler.userId).profile.company});
      return query;
    },
    },
});
Meteor.FilterCollections.publish(TaskHistory, {
  name: 'taskhistory',
  callbacks: {
    beforePublish: function(query, handler){
      if (handler.userId)
        query.selector =  _.extend(query.selector, {company: Meteor.users.findOne(handler.userId).profile.company});
      return query;
    },
    },
});
/*Meteor.publish("carshistory", function () {
	if (!this.userId) {
        this.ready();
        return;
   }
	var company = Meteor.users.findOne(this.userId).profile.company;
	return CarsHistory.find({company : company});
});*/
Meteor.publish("shuttle", function () {
	if (!this.userId) {
        this.ready();
        return;
   }
	var company = Meteor.users.findOne(this.userId).profile.company;
	return Shuttle.find({company : company});
});
Meteor.publish("task", function () {
	if (!this.userId) {
        this.ready();
        return;
   }
	var company = Meteor.users.findOne(this.userId).profile.company;
	return Task.find({company : company});
});
/*Meteor.publish("taskhistory", function () {
	if (!this.userId) {
        this.ready();
        return;
   }
	var company = Meteor.users.findOne(this.userId).profile.company;
	return TaskHistory.find({company : company});
});*/
/*Meteor.publish("shuttlehistory", function () {
	if (!this.userId) {
        this.ready();
        return;
   }
	var company = Meteor.users.findOne(this.userId).profile.company;
	return ShuttleHistory.find({company : company});
}); */
Meteor.publish("company", function () {
	return Company.find();
}); 

Shuttle.allow({
  insert: function (userId, doc) {
    return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  }
});
Company.allow({
  insert: function (userId, doc) {
    return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  }
});
Company.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});
Cars.allow({
  insert: function (userId, doc) {
    return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  }
});

Cars.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});
Task.allow({
  insert: function (userId, doc) {
    return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  }
});