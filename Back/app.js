// ::::::::::::on appelle le service expresse avec la commande require
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
// const corsoption = require({
//   origin:' http://localhost:3000',
//   optionsuccestatus:200
// });


const stuffRoutes = require('./routes/stuff.Routes.js');
const userRoutes = require('./routes/user.Routes.js');

// const url = 'mongodb+srv://jondjodji019:Jordan96@cluster0.yf9q8jp.mongodb.net/?retryWrites=true&w=majority'
// :::::::::: connection BD mongoDB

  async function connectDatabase() {
    try {
      await mongoose.connect( process.env.Mongo_DB, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log('Connexion à MongoDB réussie !');
  } catch (error) {
      console.error('Erreur de connexion à la base de données :', error);
  }


  app.use(cors() );
        
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  })   

       
    }

    app.use(bodyParser.json());
    app.use(express.json());
    app.use(helmet() );
    app.use('/images', express.static(path.join(__dirname,'images')));

    app.use('/api/auth', userRoutes);
    app.use('/api/stuff', stuffRoutes);
  

  connectDatabase()

    module.exports= app;