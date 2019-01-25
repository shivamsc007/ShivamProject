import { Meteor } from 'meteor/meteor';
import { userData } from '../imports/api/collection.js';
import { Tasks } from '../imports/api/collection.js';
import { Roles } from 'meteor/alanning:roles';

Meteor.methods({

CreateAdminRole: function(adminReg) {
var AdminId = Accounts.createUser(adminReg);
Roles.addUsersToRoles(AdminId, 'admin' );
},

userData: function (name, phone, email, gender, department, address, imageData){
		userData.insert({
           name,
           phone,
           email,
           gender,
           department,
           address,
           imageData
       });
	},

CreateUserRole: function(userprofile) {
var UserId = Accounts.createUser(userprofile);
Roles.addUsersToRoles(UserId, 'user' );
  },
   
Tasks: function (tasks, date, userlist) {
	Tasks.insert({
           tasks,
           date,
           userlist
           });
}
	});
