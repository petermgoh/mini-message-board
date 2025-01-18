const { Router } = require("express")
const indexRouter = Router()

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];
  
indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages})
})

indexRouter.get("/new", (req, res) => {
    res.render("form")
})

indexRouter.post("/new", (req, res) => {
    messageText = req.body.message
    messageUser = req.body.author
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/")
})

module.exports = indexRouter