const Student = require('../Models/Student.model')
module.exports.studentsController = {
    getStudents: async (req, res) => {
        try {
            const studentsList = await Student.find()
            res.json(studentsList)
        }
        catch (err) { res.json("error") }

    },
    postStudents: (req, res) => {
        Student.create({
            firstname: req.body.firstname,
            phone: req.body.phone,
            age: req.body.age
        })
            .then(() => {
                res.json('Добавлен студент')
            })
    },

    deleteStudents: (req, res) => {
        Student.findOneAndRemove(
            req.params.id
        ).then(() => { res.json(`удаление студента с ID ${req.params.id}`) })
    },


    patchStudents: async (req, res) => {
        try {
            const changeName = await Student.findByIdAndUpdate(
                req.params.id,
                { name: req.body.name },
                { new: true });
            res.json(changeName)
        }
        catch (err) { res.json("error") }
    }


}