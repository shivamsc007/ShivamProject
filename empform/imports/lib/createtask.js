import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import '../client/createtask.html';
import { Tasks } from '../api/collection.js';
import { userData } from '../api/collection.js';

if (Meteor.isClient){

Template.Create_Task.helpers({
           user1: function() {
            return userData.find();
        }
    });


Template.Create_Task.events({
		'click #submittasks':function(event){
			event.preventDefault();
            
            var tasks = $('#tasks').val();

            var date1 = $('#getdate').val();  
            var date2 = $('#getdate1').val();
         
            var userlist = $('#userlist1').val();
            for(var i = 0; i < userlist.length; i++){
            if(userlist[i].checked){
            userlist = userlist[i].value;
                 }
            }
            
           var date = {
           date1, date2
           }
         Meteor.call('Tasks', tasks, date, userlist);

      alert("submitted successfully");
			FlowRouter.go("/tasklist");

		}
	})
}