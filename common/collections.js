Cars = new Meteor.Collection('cars');
CarsHistory = new Meteor.Collection('carshistory');
Company = new Meteor.Collection('company');
Shuttle = new Meteor.Collection('shuttle');
ShuttleHistory = new Meteor.Collection('shuttlehistory');
Task = new Meteor.Collection('task');
TaskHistory = new Meteor.Collection('taskhistory');

Feeds = new Meteor.Collection("feeds");
FeedEntries = new Meteor.Collection("feed_entries");

var Schemas = {};
Schemas.Car = new SimpleSchema({
	timestamp: {
        type: String,
        label: "Timestamp"
    },
    vehicle: {
        type: String,
        label: "Vehicle"
    },
    color: {
			type: String,
			label: "Color"    
    },
    tagnum: {
        type: Number,
        label: "Tag Number",
        min: 0
    },
    vin: {
        type: Number,
        label: "Tag Number",
        min: 0
    },
    team: {
			type: String,
			label: "Team"    
    },
    asm: {
			type: String,
			label: "ASM"    
    },
    status: {
			type: String,
			label: "Status"    
    },
    porter: {
			type: String,
			label: "Porter",
			optional: true   
    },
    username: {
			type: String,
			label: "Username"    
    },
    wash: {
			type: String,
			label: "Company"    
    },
    completestamp: {
			type: String,
			label: "completestamp",
			optional: true   
    },
    company: {
    		type: String,
    		label: "Company"
    },
    notes: {
        type: [Object],
        optional: true
    },
    "notes.$.note": {
        type: String,
        optional: true
    },
    "notes.$.time": {
        type: String,
        optional: true
    },
    "notes.$.user": {
        type: String,
        optional: true
    }
});
Cars.attachSchema(Schemas.Car);