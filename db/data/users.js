const bcrypt = require('bcryptjs');

module.exports = [
    {
        username: "craftyKid123",
        email: "craftykid123@example.com",
        password: bcrypt.hashSync('pass', 10)
    },
    {
        username: "artLover22",
        email: "artlover22@example.com",
        password: bcrypt.hashSync('pass', 10)
    },
    {
        username: "diyMaster",
        email: "diymaster@example.com",
        password: bcrypt.hashSync('pass', 10)
    },
    {
        username: "makerMom",
        email: "makermom@example.com",
        password: bcrypt.hashSync('pass', 10)
    },
    {
        username: "projectPapa",
        email: "projectpapa@example.com",
        password: bcrypt.hashSync('pass', 10)
    }
];
