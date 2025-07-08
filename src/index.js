const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const {sendBasicEmail} = require('./services/emailService')
const startAndSetupServer = ()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.listen(3004,()=>{
        console.log(`Server running on Port ${PORT}`);
        sendBasicEmail(
            'admin',
            'siddiqueowais499@gmail.com',
            'Testing Mail',
            'hey Sup man, what are u doing'
        )
    })
}
startAndSetupServer();
