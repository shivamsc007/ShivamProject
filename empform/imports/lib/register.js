import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import '../client/register.html';
// import { userData } from '../api/collection.js';
// import '../api/collection.js';

if(Meteor.isClient){
	Template.Register.events({
		  'click #register': function(event){
			event.preventDefault();
            // adminReg = {};
            // $.each($('.RegAdmin').serializeArray() , function(){
            //     adminReg[this.name] = this.value;
            // }); 
            var email = $('#email').val();
            var password = $('#pwd').val();
            var confirmpassword = $('#pwd1').val();

            adminReg= {
              email, password
            }

   Meteor.call('CreateAdminRole', adminReg, function(err,res){
    if(err){
      alert(err.reason);
    }else{
      alert("registered successfully.");
       FlowRouter.go("/");
    }
  });
           
}
})
}
