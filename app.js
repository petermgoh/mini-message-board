const express = require("express")
const app = express()
const path = require("node:path")
const indexRouter = require("./routes/indexRouter")
const port = 3001

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));

// for styles in public folder
//const assetsPath = path.join(__dirname, "public");
//app.use(express.static(assetsPath));

app.use("/", indexRouter)

app.listen(port, () => {
    console.log(`Mini-Message-Board Listening on PORT:${port}`)
})