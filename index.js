const express=require('express');
const app=express();
app.use(express.json());

app.use('/todo',require('./routes/todoRoutes'));

app.listen(8000,()=>{
    console.log("I am running server");
});
