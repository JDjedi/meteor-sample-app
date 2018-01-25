
if (Meteor.isClient) {
	Accounts.onLogin(function() {
		this.redirect('/employee')
	});

	Accounts.onLogout(function() {
		this.redirect('/')
	});
}

Router.route('/', function() {
	this.render('index', {to: 'main'});
	// if(Meteor.userId()) { //if user is logged in the homepage will redirect to the employee entry log page
	// 	this.redirect('/employee')
	// }
});

Router.route('/about', function() {
	this.render('about', {to: 'main'});
});

Router.route('/interests', function() {
	this.render('interests', {to: 'main'});
});

Router.route('/employee', function() {
	this.render('employeeLogEntry', {to: 'main'});
	if(!Meteor.userId()) { //if user is not logged the client will be redirected to /home
		this.redirect('/')
	}
});

Router.route('/employee_log', function() {
	this.render('employeeLogList', {to: 'main'});
	if(!Meteor.userId()) { 
		this.redirect('/')
	}
});

Router.route('/employee/:_id', function () {
	this.render('EmployeeDetail', {to: 'main'});
	if(!Meteor.userId()) { 
		this.redirect('/')
	}
});

Router.route('/employee_schedule', function() {
	this.render('employeeSchedule', {to: 'main'});
	if(!Meteor.userId()) { //if user is not logged the client will be redirected to /home
		this.redirect('/')
	}
});

Router.configure({ //used to make a default template for all routes
	layoutTemplate: 'ApplicationLayout'
});





		



