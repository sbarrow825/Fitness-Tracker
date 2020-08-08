const db = require("../models")
const Mongoose  = require("mongoose")


module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        res.json(db.Workout.find());
    });

    app.post("/api/workouts", ({body}, res) => {
        db.Workout.create(body).then(data => {
            res.json(data)
        });
    });

    app.put("/api/workouts/:id", async ({body}, res) => {
        db.Workout.findOneAndUpdate({ _id: Mongoose.Types.ObjectId(req.params.id) }, {
            $push: {
                exercises: body
            }
        }).then(data => {
            res.json(data)
        })
        
    })

    app.get("/api/workouts/range", (req, res) => {
        res.json(db.Workout.find());   
    })
}