
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Employees = new Mongo.Collection('employees');

Employees.allow({ //only a regestered user may enter
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

EmployeeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},

	scheduleLog: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},

	author: {
		type: String,
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},

	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function(){
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	},

	//attributes: { type: AttributeSchema }, //old manual way of doing things
	attributes: Array,
	"attributes.$": Object,
  "attributes.$.skill": String,
  "attributes.$.rating": Number
});

Meteor.methods({
	toggleMenuItem: function(id, currentState) {
		Employees.update(id, {
			$set: {
				scheduleLog: !currentState
			}
		});
	},
	deleteEmployee: function(id) {
		Employees.remove(id);
	}
});


// AttributeSchema = new SimpleSchema({ //old manual way of doing things
// 	skill: {
// 		type: String,
// 		label: "Skill"
// 	},

// 	rating: {
// 		type: Number,
// 		label: "Rating"
// 	}
// });


Employees.attachSchema(EmployeeSchema);











