const express=require('express')

const app = express()

app.use(express.json())


//  GET /todos - returns a list of todos without user id field


app.get("/",(req,res)=>{
    res.send("Server is running")
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})