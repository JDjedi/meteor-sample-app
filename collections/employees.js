
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Employees = new Mongo.Collection('employees');

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

Employees.allow({ //only a regestered user may enter
	insert: function(userId, doc) {
		return !!userId;
	}
});

EmployeeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},

	mainLog: {
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

Employees.attachSchema(EmployeeSchema);











