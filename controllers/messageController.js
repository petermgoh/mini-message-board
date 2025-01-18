const messages = require("../database/db")

async function getMessageList(req, res) {
    res.render("index", { messages: messages })
}
async function postNewMessage(req, res) {
    messageText = req.body.text
    messageUser = req.body.user
    messages.push({ text: messageText, user: messageUser, date: new Date() });
    res.redirect("/")
}
async function getForm(req, res) {
    res.render("form")
}
module.exports = { getMessageList, postNewMessage, getForm }