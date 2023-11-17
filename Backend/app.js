const express = require('express')
const app = express();
const port = 9000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

app.get('/health-check',(req,res)=>{
    res.send('success');
});