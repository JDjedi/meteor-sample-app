
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import './employee.html';

Meteor.subscribe('employees');

Template.employeeDataList.helpers({
	employeeList: function(){
		return Employees.find({}).fetch();
	}
});

Template.employeeDataInput.events({
	'submit form': function(event){
		event.preventDefault();
		var employeeNameVar = event.target.name.value;
		var employeeSkillVar = event.target.skill.value;
		var employeeRatingVar = event.target.rating.value;

		Employees.insert({
			name: employeeNameVar,
			attributes: { skill: employeeSkillVar, rating: employeeRatingVar }
		});

		//console.log(Employees.find({}).fetch());
	}
});


