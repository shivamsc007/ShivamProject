import { Mongo } from 'meteor/mongo';
export const Tasks = new Mongo.Collection('tasks');
export const userData = new Mongo.Collection('userData');
// export const admin = new Mongo.Collection('admin');