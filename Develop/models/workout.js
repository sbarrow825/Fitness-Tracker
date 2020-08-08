const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exercises: {
    type: Array,
    default: []
  },
  day: {
      type: Date,
      default: Date.now
  },
  duration: {
      type: Number,
      default: 0
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
