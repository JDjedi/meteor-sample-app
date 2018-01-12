
Router.route('/', function() {
	this.render('index', {to: 'main'});
	GAnalytics.pageview(); //google analytics
});

Router.route('/about', function() {
	this.render('about', {to: 'main'});
});

Router.route('/interests', function() {
	this.render('interests', {to: 'main'});
});

Router.route('/employee', function() {
	this.render('employeeListTemplate', {to: 'main'});
});

Router.route('/employee_log', function() {
	this.render('employeeLogTemplate', {to: 'main'});
});

Router.configure({ //used to make a default template for all routes
	layoutTemplate: 'ApplicationLayout'
});

