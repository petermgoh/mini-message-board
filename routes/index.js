const { Router } = require("express")
const index = Router()
const { getMessageList, postNewMessage, getForm, getMessageDetails } = require("../controllers/messageController")

index.get("/", getMessageList)
index.get("/new", getForm)
index.get("/message/:messageId/details", getMessageDetails);

index.post("/new", postNewMessage)

module.exports = index