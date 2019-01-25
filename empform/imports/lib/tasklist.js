import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import '../client/tasklist.html';
import { Tasks } from '../api/collection.js';
// import { userData } from '../api/collection.js';s
// import '../api/collection.js';

if (Meteor.isClient){
	Template.Tasklist.helpers({
		tasksData: function(){
			return Tasks.find();
		}
});
}

      Template.Tasklist.events({
      	'click #create_tasks':function(event){
			event.preventDefault();
            FlowRouter.go("/createtask");
		}
      });

