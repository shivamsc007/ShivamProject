import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import '../client/createuser.html';
import { userData } from '../api/collection.js';
import '../api/collection.js';

if (Meteor.isClient){

 File.prototype.convertToBase64 = function (callback) {
        var FR = new FileReader();
        FR.onload = function (e) {
            callback(e.target.result)
        };
        FR.readAsDataURL(this);
    }
   
Template.Create_User.events({
		'click #submit_form':function(event){
			event.preventDefault();
            
            var name = $('#name').val();
            var phone = $('#phone').val();
            var email = $('#email2').val();
            var password = $('#pwd3').val();

            var userprofile= {
              email,
              password
            }

            var confirmpasswordVar = $('#pwd4').val();
            var gender = document.getElementsByName('gender');
            for(var i = 0; i < gender.length; i++){
            if(gender[i].checked){
            gender = gender[i].value;
                 }
            }

            var department = document.getElementById('department');
            for(var i=0; i< department.length; i++){
            	if(department[i].selected){
            		department = department[i].value;
            	}
            }

            var line1 = $('#address').val();
            var line2 = $('#address1').val();

            var pin = $('#pin').val();

            var district = $('#district').val();

            var state = document.getElementById('state');
            for(var i=0; i< state.length; i++){
            	if(state[i].selected){
            		state = state[i].value;
            	}
            }
            var country = document.getElementById('country');
            for(var i=0; i< country.length; i++){
            	if(country[i].selected){
            		country = country[i].value;
            	}
            }
            var address = {
            	Line1:line1,
            	Line2:line2,
            	Pin:pin,
            	District:district,
            	State:state,
            	Country:country
            }
           
            var userimage = {};
           	imageData = [];
            imageData.push(userimage);
            document.getElementById("userImage").innerHTML = userimage[0];
          	
          	file = $('#userImage')[0].files[0];
            file.convertToBase64 (function (base64) {
            userimage["userImage"] = base64;

            Meteor.call('userData', name, phone, email, gender, department, address, imageData);

             });

  Meteor.call('CreateUserRole', userprofile, function(err,res){
    if(err){
      alert(err.reason);
    }else{
      alert("registered successfully.");
       FlowRouter.go("/userlist");
    }
  });

     // alert("registered successfully");
     // FlowRouter.go("/userlist");
        }
  })
     
}