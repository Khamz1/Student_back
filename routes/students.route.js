const {Router} = require("express");
const route = Router();
const {studentsController} = require('../contorllers/students.controllers')

route.get('/students',studentsController.getStudents);
route.post('/students',studentsController.postStudents);
route.delete('/students/:id',studentsController.deleteStudents)
route.patch('/students/:id',studentsController.patchStudents)

module.exports=route