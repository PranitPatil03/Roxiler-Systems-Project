const express = require('express')

const app = express()

const fetch = require('node-fetch');

app.use(express.json())

// GET /todos - returns a list of todos without user id field

app.get('/todos', async (req, resp) => {

    const URL = "https://jsonplaceholder.typicode.com/todos"

    fetch(URL).then((res) => {
        res.json().then((data) => {
            data.forEach(object => {
                delete object['userId'];
            });
            resp.send(data);
        });
    })
})

// GET /user/<pass-your-user-id> - returns user information along with todo items
// where userid matches with the one provided in the URL

app.get('/users/:id', (req, resp) => {

    const URL = "https://jsonplaceholder.typicode.com/users"
    var todos=[]

    fetch(URL).then((res) => {
        res.json().then((data) => {
            for (const item of data) {
                if (item.id == req.params.id) {

                    delete item['address'];
                    delete item['company'];
                    delete item['website'];

                    const URL = "https://jsonplaceholder.typicode.com/todos"

                    fetch(URL).then((res) => {
                        res.json().then((data) => {
                            data.forEach(object => {
                                if (object.userId == req.params.id){
                                    todos=[]
                                    todos.push(object)
                                } 
                            });
                        });
                    })
                    item.todos=todos;
                    console.log(item)
                    resp.send(item)
                }
            }
        });
    })
})


app.get("/", (req, res) => {
    res.send("Server is running")
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})

