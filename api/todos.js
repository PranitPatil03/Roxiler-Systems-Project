const express = require('express')
const router = express.Router()



router.get('/todos', (req, res) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => console.log(data));
    
})

module.exports = router
