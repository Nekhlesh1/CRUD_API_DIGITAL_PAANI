const express = require('express')
const app = express();
const db = require('./db/db.js')


app.use("/api/books",require('./routes/book.route.js'))

app.listen(process.env.PORT || 5000, ()=> console.log("listening to port ", process.env.PORT))