
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import './employee_log.html';

//Meteor.subscribe('employees');


if (Meteor.isClient) {
	Template.EmployeeDetail.onCreated(function() {
		var self = this;
		self.autorun(function() {
			var id = Employees.findOne({_id: Router.current().params._id}); //communicates with publish.js to ensure only one emp. is loaded per detail view
			self.subscribe('singleEmployee', id);
		})
	});

	Template.EmployeeDetail.helpers({
		employee: function(){
			return Employees.findOne({_id: Router.current().params._id});
		}
	});

	Template.EmployeeDetail.events({
		'click .toggle-menu': function() {
			var id = Employees.findOne({_id: Router.current().params._id});

			Meteor.call('toggleMenuItem', id, id.scheduleLog);
		}
	});

	Template.SkillAndRatingList.helpers({
		employeeAttributes: function(){
			var id = Employees.findOne({_id: Router.current().params._id});
			
			return id.attributes;
		}
	});
};

