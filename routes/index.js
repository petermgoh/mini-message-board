const { Router } = require("express")
const indexRouter = Router()
const { getMessageList, postNewMessage, getForm } = require("../controllers/messageController")

indexRouter.get("/", getMessageList)
indexRouter.get("/new", getForm)
indexRouter.post("/new", postNewMessage)

module.exports = indexRouter