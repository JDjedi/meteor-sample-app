import { Meteor } from 'meteor/meteor';

Meteor.publish('employees', function() {
	return Employees.find({author: this.userId});
});

Meteor.publish('singleEmployee', function(id) { //helps to ensure that only one log is loaded at a time when viewing emp. details
	check(id, Object); //validates that id is actually a string
	return Employees.find({_id: id});
});


