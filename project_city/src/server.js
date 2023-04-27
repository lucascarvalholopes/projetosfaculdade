const express = require('express');
const app = express();
const port = 8080;

app.get('/',(req, res)=>{
  return res.send('Página inicial')
})

app.listen(port,()=>{
  console.log(`Servidor aberto | http://localhost:${port}`)
})