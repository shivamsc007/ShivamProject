import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import '../client/userdashboard.html';
import { Tasks } from '../api/collection.js';
// import { userData } from '../api/collection.js';

if (Meteor.isClient){
	Template.User_Dashboard.helpers({
		tasksData1: function(){
			return Tasks.find();
		}
})

Template.User_Dashboard.events({
    'click #logout1': function(event){
        event.preventDefault(); 
        {
        Meteor.logout();
    }
        FlowRouter.go("/");
    }

})
}