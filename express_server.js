const express = require('express');
const { url } = require('inspector');
const app = express();
const PORT = 8080;
app.set("view engine", "ejs");

const urlDatabase = {
  'b2xVn2': 'http://www.lighthouselabs.ca',
  '9sm5xK': "http://www.google.com"
};

app.get('/', (req,res)=>{ 
  res.send("hello")
});
app.listen(PORT,()=>{
console.log(`Example app listening on port ${PORT}`)
})

app.get('/urls.json',(req,res)=>{
  res.json(urlDatabase)

})
app.get('/hello',(req,res)=>{
res.send('<html><body> Hello <b> World </b> </body></html>\n')
})