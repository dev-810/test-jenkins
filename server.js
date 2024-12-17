const express = require('express')
const app = express()

app.use('/',(req,res)=>{
	res.send("docker V1.1")
})

app.listen(4000,'0.0.0.0',()=>{
	console.log("server running on port 4000")
})
