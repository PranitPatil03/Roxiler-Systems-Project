const express = require('express')

const app = express()

const fetch = require('node-fetch');

app.use(express.json())


app.get('/todos', async (req, resp) => {

    const URL = "https://jsonplaceholder.typicode.com/todos"

    fetch(URL).then((res) => {
        res.json().then((data) => {
            console.log(data)
            data.forEach(object => {
                delete object['userId'];
            });
            resp.send(data);
        });
    })
})



app.get("/", (req, res) => {
    res.send("Server is running")
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})

