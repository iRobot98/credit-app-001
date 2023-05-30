require("./src/process.handlers")
const fs = require("fs")
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.use("*",require("./src"))
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))


// dev\home_001\build
app.get("/*", express.static("dev/home_001/build"))
// app.get('/', express.static("views"));

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
