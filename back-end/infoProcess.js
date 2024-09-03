const http = require('http');
const cors = require('cors');
const express = require('express');
const {MongoClient} = require('mongodb');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const uri = 'mongodb://localhost:27017/meu-jogo'; // URL do MongoDB
const client = new MongoClient(uri);

app.use(cors())

const io = socketIO(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type'],
      credentials: true
    }
  });

async function main(documento) {
    
    try {
      await client.connect();
      const database = client.db('meu-jogo');
      const collection = database.collection('fernando');
  
      const resultado = await collection.insertOne(documento);
  
      console.log(`Cadastro inserido com o ID: ${resultado.insertedId}`);
    } finally {
      client.close();
    }
  }
  
  io.on('connection',(socket)=>{
        console.log('conectado')
      
      socket.on('login',async (msg)=>{
        console.log('usuario logado')
        try{
          await client.connect();
          const database = client.db('meu-jogo');
          const collection = database.collection(msg.login);

          const senha = await collection.findOne({senha: msg.senha});

          if(senha){
            console.log('senha correta')
            socket.emit('conectPlayer',msg.login)
          } else {
            console.log('senha incorrete')
          }

        } finally{
          client.close();
        }
      })

      socket.on('cadastro',(msg)=>{
          main(msg).catch(console.error);
      })
  })
  
  server.listen(5021,()=>{
    console.log('servidor ligado na url: http://localhost:5021')
})