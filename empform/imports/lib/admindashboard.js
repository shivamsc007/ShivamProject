import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import '../client/admindashboard.html';

if(Meteor.isClient){
Template.Admin_Dashboard.events({
    'click #user': function(event){
        event.preventDefault();
        FlowRouter.go("/userlist");

    },
    
    'click #tasks': function(event){
        event.preventDefault();
        FlowRouter.go("/tasklist");
    }
})
}

Template.Admin_Dashboard.events({
    'click #logout': function(event){
        event.preventDefault(); 
        {
        Meteor.logout();
    }
        FlowRouter.go("/");
    }
})

// Template.Admin_Dashboard.helpers({
//     'userroledata': function(){
//         return Meteor.users.find({role:'admin'});
//         console.log(users);
//     }
// })
