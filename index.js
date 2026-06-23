//import express 
const express=require('express')

//create an application
const app=express()//using this app we can structure our server

app.get('/',(req,res)=>{
    res.end('homepage')
})//get route

app.get('/contact-us',(req,res)=>{
    res.end('you can contact me at my email address')
})//get route

app.post('/tweets',(req,res)=>{
    res.status(201).end('tweet created successfull')//by default express gives status code as 200 but if u want to change we can do that by doing res.status()
})//post route

app.get('/tweets',(req,res)=>{
    res.end('here are your tweets')
})

app.listen(8000,()=>console.log('server is running on PORT 8000'))