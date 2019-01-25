import { Meteor } from 'meteor/meteor';
import { userData } from '../imports/api/collection.js';
import { Tasks } from '../imports/api/collection.js';

if (Meteor.isClient) {
  Meteor.subscribe('userData');
  Meteor.subscribe('tasks');
  // Meteor.subscribe('users');
}


