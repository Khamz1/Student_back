const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    firstname:String,
    phone:String,
    age:Number

});
const Student = mongoose.model('Student',studentSchema);


module.exports = Student