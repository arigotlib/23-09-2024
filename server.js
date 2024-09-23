const path = require("path");
const express = require("express");
const app = express();
const port = 3000;


const users = [
    {
        id: "1",
       email: "wD2pQ@example.com",
       password: "12345"
    },
    {
        id: "2",
        email: "wD2pQ@example.com",
        password: "12345"
    },   
    {
        id: "3",
        email: "wD2pQ@example.com",
        password: "12345"
    }
]
function getAllUsers() {
app.get("/", (req, res) => {
    res.send(users);
});
}

function getUserById(id) {
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === id);
    res.send(user);
});
}   
module.exports = {
    getAllUsers,
    getUserById
}









app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});