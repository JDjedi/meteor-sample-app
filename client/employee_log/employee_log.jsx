
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import './employee_log.html';

Meteor.subscribe('employees');


if (Meteor.isClient) {
	Template.employeeLogTemplate.helpers({
		employeeList: function(){
			return Employees.find({}).fetch();
		}
	});
}