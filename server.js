const express=require('express')

const app = express()

const fetch =require('node-fetch');

app.use(express.json())


const getAPI=()=>{
    const URL="https://jsonplaceholder.typicode.com/todos"
    fetch(URL).then((res)=>{
        res.json().then((data)=>{console.log(data);})
    })
}

app.get('/todos',async (req, res) => {
   const ans= getAPI()
   res.json(ans).send(ans)
})


app.get("/",(req,res)=>{
    res.send("Server is running")
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})

