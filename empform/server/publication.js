import { Meteor } from 'meteor/meteor';
import { userData } from '../imports/api/collection.js';
import { Tasks } from '../imports/api/collection.js';


if (Meteor.isServer){
Meteor.publish('userData', function () {
  return userData.find();
});



// Meteor.publish('users', function () {
//     if (this.userId) {
//         return Meteor.users.find(); 
//     }
// });

// Meteor.publish('roles', function(){

// 	return roles.find();
// });

Meteor.publish('tasks', function () {
  return Tasks.find();
});

}