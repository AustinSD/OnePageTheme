    Meteor.startup(function () {
		process.env.MAIL_URL = 'smtp://austin%40everydayguy.net:R00zzic%40831@smtp.booksbyjos.com:587';
        // bootstrap the admin user if they exist -- You'll be replacing the id later
        if (Meteor.users.findOne("d9B4aPYuPcHYiMQfM"))
            Roles.addUsersToRoles("d9B4aPYuPcHYiMQfM", ['admin']);

    });
Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  },
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
/*Meteor.FilterCollections.publish(CarsHistory, {
name: 'carreport',
  callbacks: {
    beforePublish: function(query, handler){
      if (handler.userId)
        query.selector =  _.extend(query.selector, {company: Meteor.users.findOne(handler.userId).profile.company});
      return query;
    },
    },
});*/
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
/*Meteor.FilterCollections.publish(TaskHistory, {
name: 'taskreport',
  callbacks: {
    beforePublish: function(query, handler){
      if (handler.userId)
        query.selector =  _.extend(query.selector, {company: Meteor.users.findOne(handler.userId).profile.company});
      return query;
    },
    },
});*/
Meteor.publish("carshistory", function () {
	if (!this.userId) {
        this.ready();
        return;
   }
	var company = Meteor.users.findOne(this.userId).profile.company;
	return CarsHistory.find({company : company});
});
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
Meteor.publish("taskhistory", function () {
	if (!this.userId) {
        this.ready();
        return;
   }
	var company = Meteor.users.findOne(this.userId).profile.company;
	return TaskHistory.find({company : company});
});
Meteor.publish("shuttlehistory", function () {
	if (!this.userId) {
        this.ready();
        return;
   }
	var company = Meteor.users.findOne(this.userId).profile.company;
	return ShuttleHistory.find({company : company});
});
Meteor.publish("company", function () {
	return Company.find();
});
Meteor.publish("feed_entries", function () {
	return FeedEntries.find({}, {sort: {"date":-1}, limit:3});
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