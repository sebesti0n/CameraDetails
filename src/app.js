const express = require('express')
const db=require("./connectionSetup/mongoDBSetup.js");
const student = require("./models/studentSchma.js")
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());
app.post('/predict',async (req,res)=>{
    // console.log(req.body);
    const s1 = await new student(req.body);
    s1.save().then(()=>{
        res.status(200).send(s1);
    })
    .catch((e)=>{
        console.log(e);
        res.status(400).send(e);
    });
});
app.get('/all', async (req,res)=>{
    try {
        const allStudents = await student.find();
        res.send(allStudents);
    } catch (error) {
        console.log(error)
    }
})
app.listen(port,()=>{
    console.log("Server connection setup Successfully...")
});

