Meteor.publish('Employee', function() {
	return Lists.find({name: this.userId});
})