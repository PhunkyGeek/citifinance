// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose"
// import Router from "./routes/routes.js"

// const app = express()

// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({extended: true}));
// app.use('/', Router)

// mongoose.connect("mongodb://localhost/Local")


// app.listen(8000, () => {
//     console.log("Server started on port 8000")
// })

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import Router from "./routes/routes.js"
import dotenv from 'dotenv';

const app = express()

dotenv.config()

app.use(bodyParser.json({limit: "32mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}))
app.use(cors())

app.use('/', Router)

app.get('/', (req, res) => {
  res.send('Welcome to Citizen Bank API!')
})

app.use(express.static(path.join(__dirname, "./client/build")));

app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, "./client/build/index.html"))
});
// const CONNECTION_URL = "mongodb://localhost/Local"
// const CONNECTION_URL = "mongodb://127.0.0.1:27017/Local";
const CONNECTION_URL = process.env.MONGODB_URI || "mongodb://localhost/Local";;
// const PORT = 8000

const PORT = process.env.PORT || 8000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch(err => console.log(err.message))