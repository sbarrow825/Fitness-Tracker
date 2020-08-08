const db = require("../models")
const Mongoose  = require("mongoose")


module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find()
        .then( workouts => {
            res.json(workouts)
        })
    });

    app.post("/api/workouts", ({body}, res) => {
        db.Workout.create(body).then(workout => {
            res.json(workout)
        });
    });

    app.put("/api/workouts/:id", async (req, res) => {
        db.Workout.findOneAndUpdate({ _id: Mongoose.Types.ObjectId(req.params.id) }, {
            $push: {
                exercises: req.body
            },
            $inc: {
                totalDuration: req.body.duration
            }
        }).then(updatedWorkout => {
            res.json(updatedWorkout)
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find().limit(7)
        .then(workouts => {
            res.json(workouts);
        })
    });
}