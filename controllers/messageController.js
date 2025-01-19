const messages = require("../database/db")
const getFormattedDateTime = require("../utils/getFormattedDateTime")

async function getMessageList(req, res) {
    res.render("index", { messages: messages })
}

async function getForm(req, res) {
    res.render("form")
}

async function getMessageDetails(req, res) {
    const { messageId } = req.params
    const messageDetails = messages.find((message) => message.id === Number(messageId))
    if (!messageDetails) {
        console.log("Error: Path Not Found")
    }
    res.render("messageDetails", { message: messageDetails })
}

let nextId = 3
async function postNewMessage(req, res) {
    const messageText = req.body.text
    const messageUser = req.body.user
    messages.push({ id: nextId++, user: messageUser, date: getFormattedDateTime(), text: messageText });
    res.redirect("/")
}
module.exports = { getMessageList, postNewMessage, getForm, getMessageDetails }