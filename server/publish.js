import { Meteor } from 'meteor/meteor';

Meteor.publish('employees', function() {
	return Employees.find({});
});

	