import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
// import { Accounts } from 'meteor/accounts-base';
import { userData } from '../api/collection.js';
import '../client/userlist.html';


if (Meteor.isClient){
	Template.Userlist.helpers({
		user: function(){
			return userData.find();
		}
});
}

      Template.Userlist.events({
      	'click #create_user':function(event){
			event.preventDefault();
            FlowRouter.go("/createuser");
		}
      });