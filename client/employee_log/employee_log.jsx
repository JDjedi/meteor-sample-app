
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import './employee_log.html';

//Meteor.subscribe('employees');


if (Meteor.isClient) {

	Template.list.helpers({
		employeeList: function(){
			return Employees.find({}).fetch();
		},

		updateEmployeeId: function(){
			return Employees.findOne({_id: Router.current().params._id})
		},

		editMode: function() {
			return Template.instance().editMode.get();
		}
	});

	Template.list.onCreated(function() {
		var self = this;
		self.autorun(function() {
			self.subscribe('employees');
		});
		this.editMode = new ReactiveVar(false);
	});

	Template.list.events({
		'click .toggle-menu': function() {
			Meteor.call('toggleMenuItem', this._id, this.scheduleLog);
		},
		'click .fa-trash': function() {
			Meteor.call('deleteEmployee', this._id);
		}
		// 'click .fa-pencil': function() {
		// 	template.editMode.set(!template.editMode.get());
		// 	//Session.set('editMode', !Session.get('editMode')); //does not work with react
		// }
	});

};


