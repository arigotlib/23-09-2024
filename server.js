const path = require("path");
const express = require("express");
const app = express();
app.use(express.json());
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
    try {
   app.get("/users", (req, res) => {
      res.send(users);
   });
    } catch (error) {
        console.log(error);
    }
};


function getUserById(id) {
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === id);
    res.send(user);
});
}   

function createUser(user) {
    app.post("/users", (req, res) => {
        const user = req.body;
        users.push(user);
        res.send(user);
    });
}

function updateUser(id, user) {
    app.put("/users/:id", (req, res) => {
        const id = req.params.id;
        const user = req.body;
        const index = users.findIndex((user) => user.id === id);
        users[index] = user;
        res.send(user);
    });
}

function deleteUser(id) {
    app.delete("/users/:id", (req, res) => {
        const id = req.params.id;
        const index = users.findIndex((user) => user.id === id);
        users.splice(index, 1);
        res.send();
    });
}



app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});


getAllUsers();
getUserById();
createUser();
updateUser();
deleteUser();


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}









