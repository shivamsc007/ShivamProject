FlowRouter.route('/',{
	name: 'home',
	action:function() {
		BlazeLayout.render('mainContainer', {main: "Login" });
	}
});

FlowRouter.route('/register',{
	name: 'register',
	action:function() {
		BlazeLayout.render('mainContainer', {main: "Register" });
	}
});

FlowRouter.route('/forgotpassword', {
	name: 'forgotpassword',
	action:function() {
		BlazeLayout.render('mainContainer', {main: "forgotpassword"});
	}
});

FlowRouter.route('/admindashboard',{
	name: 'admindashboard',
	action:function() {
		BlazeLayout.render('mainContainer', {main: "Admin_Dashboard" });
	}
});

FlowRouter.route('/userdashboard', {
	name: 'userdashboard',
	action:function() {
		BlazeLayout.render('mainContainer', {main: "User_Dashboard"});
	}
});

FlowRouter.route('/userlist', {
	name: 'userlist',
	action:function() {
		BlazeLayout.render('mainContainer', {main: "Userlist"});
	}
});

FlowRouter.route('/tasklist', {
	name: 'tasklist',
	action:function() {
		BlazeLayout.render('mainContainer', {main: "Tasklist"});
	}
});

FlowRouter.route('/createuser', {
	name: 'createuser',
	action:function() {
		BlazeLayout.render('mainContainer', {main: "Create_User"});
	}
});

FlowRouter.route('/createtask', {
	name: 'createtask',
	action:function() {
		BlazeLayout.render('mainContainer', {main: "Create_Task"});
	}
});