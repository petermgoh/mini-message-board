const getFormattedDateTime = require("../utils/getFormattedDateTime")

const messages = [
    {
        id: 1,
        userName: "Peter",
        date: getFormattedDateTime(),
        text: "Welcome to my Message Board!"
    },
    {
        id: 2,
        userName: "Jiji",
        date: getFormattedDateTime(),
        text: "Meow meow"
    }
]

module.exports = messages