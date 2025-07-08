const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const startAndSetupServer = ()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.listen(3004,()=>{
        console.log(`Server running on Port ${PORT}`);
    })
}
startAndSetupServer();
