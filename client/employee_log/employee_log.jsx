
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import './employee_log.html';

//Meteor.subscribe('employees');


if (Meteor.isClient) {
	Template.list.helpers({
		employeeList: function(){
			return Employees.find({}).fetch();
		}
	});

	Template.list.onCreated(function() {
		var self = this;
		self.autorun(function() {
			self.subscribe('employees');
		})
	});

	Template.list.events({
		'click .toggle-menu': function() {
			Meteor.call('toggleMenuItem', this._id, this.scheduleLog);
		}
	});
};


