

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import './employee_schedule.html';


if (Meteor.isClient) {
	Template.schedule.onCreated(function() {
		var self = this;
		self.autorun(function() {
			self.subscribe('employees');
		})
	});

	Template.schedule.helpers({
		employeeList: function(){
			return Employees.find({scheduleLog: true}).fetch();
		}
	});
};