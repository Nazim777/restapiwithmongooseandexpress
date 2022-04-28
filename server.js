import express from "express";
const app= express()
const port= process.env.port ||5000
import mongooseconnect from './db/connectdb.js'
//import {readdata} from './model/employe.js'
//import employdata from './model/employe.js'
//import employemodel from './model/employe.js'
//import  {updatedata}  from './model/employe.js'
import {deletedata} from './model/employe.js'
//app.use(express.json())
//const daabaseurl= 'mongodb://localhost:27017/mohammad'
/*
import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost:27017/mohammad').then(()=>{
    console.log('database connected')
})
*/

//database connection
//mongooseconnect(daabaseurl)
mongooseconnect()
//insert data function
//employdata()
//read data
//readdata()
//getreaddata()
//update data
//updatedata('6267b21d47336d169ef648aa') //update data by id
//updatedata('6267b21d47336d169ef648aa') // update one data by id
//updatedata(50000)
//delete data
//deletedata('626224570b0edb01ffa109b3')
//deletedata('6267afa7cf1237d5e9f52b8b')
deletedata()
/*
app.get('/',async(req,res)=>{
    const data = await employemodel.find()
    console.log(data)
    res.send(data)
})
app.post('/post',async(req,res)=>{
    const data= await employemodel(req.body)
    const data1= await data.save()
    res.send(data1)

})


app.delete('/delete',async(req,res)=>{
    const data= await employemodel.deleteOne(req.body)
    res.send(data)
})
app.put('/put',async(req,res)=>{
    const data = await employemodel.updateOne({name:"harun ali"},{$set:(req.body)})
    res.send(data)
})

*/

app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})