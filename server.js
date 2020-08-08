
var express = require('express')
var mongoose = require('mongoose')
var logger = require('morgan')


const PORT = process.env.port || 3000

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

require("./routes/api-routes.js")(app)
require("./routes/html-routes.js")(app)


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
 });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});