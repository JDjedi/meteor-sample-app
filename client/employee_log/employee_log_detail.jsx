
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import './employee_log.html';

//Meteor.subscribe('employees');


if (Meteor.isClient) {
	Template.EmployeeDetail.onCreated(function() {
		var self = this;
		self.autorun(function() {
			self.subscribe('employees');
		})
	});

	Template.EmployeeDetail.helpers({
		employee: function(){
			return Employees.findOne({id});
		}
	});
};
