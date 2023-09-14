const express = require("express")
const dotenv = require("dotenv")
dotenv.config()

const mongoose = require('mongoose')

const app = express()

mongoose.set('strictQuery', true);
mongoose.connect(process.env.BASE_URL)
    .then(() => console.log("Database Connected successful"))
    .catch(err => console.log(err.message))

app.listen(3000, () => {
    console.log(`Server 3000`)
})