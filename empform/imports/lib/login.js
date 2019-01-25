import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
// import { Session } from 'meteor/session';
import '../client/login.html';

if(Meteor.isClient){
Template.Login.events({
    'click #loginuser': function(event){
        event.preventDefault();
        
        var email = $('#email').val();
        var password = $('#pwd2').val();

        Meteor.loginWithPassword(email, password, function(error){
                if(error){
                    alert(error.reason);
                }
                    else{  
                       FlowRouter.go("/admindashboard");
                        }     
            });
    },


    'click #register': function(event){
    	event.preventDefault();
    	FlowRouter.go("/register");
    },

    'click #forgot_pwd': function(event){
    	event.preventDefault();
        FlowRouter.go("/forgotpassword");
    }
})
}

// Template.Login.helpers({
//         admin: function(){
//             // return Roles.userIsInRole(this._id, 'admin') ? 'admin': 'normal';
//             return Roles.userisInRole(Meteor.userId(), 'admin');
//         },
//         user: function(){
//             // return Roles.userIsInRole(this._id, 'user') ? 'user': 'normal';
//              return Roles.userisInRole(Meteor.userId(), 'user');
//         }
//     })
