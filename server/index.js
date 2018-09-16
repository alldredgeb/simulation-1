//IMPORTS / REQUIRES
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

//VARIABLES
const app = express();
const port = 3006;

//TOP LEVEL MIDDLEWARE
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../build'));

massive(process.env.CONNECTION_STRING).then(function(db) {
  app.set('db', db);
});

//ENDPOINTS
app.get('/api/shelf/:id', (req,res) => {
  app.get('db').getShelfInfo(req.params.id).then( shelf_info => {
    res.status(200).send(shelf_info);
  });
});

app.get('/api/shelf/:shelfid/bin/:binid', (req,res) => {
  app.get('db').getBinInfo(req.params.shelfid, req.params.binid).then( bin_info => {
    // console.log(bin_info);
    res.status(200).send(bin_info[0]);
  });
});

app.post('/api/add/shelf/:shelfid/bin/:binid', (req,res) => {
  app.get('db').addBinInfo(req.body.name, req.body.price, req.params.shelfid, req.params.binid).then( () => {
    res.status(200).send("bin item added!");    
  });
});

app.put('/api/shelf/:shelfid/bin/:binid', (req,res) => {
  app.get('db').editBinInfo(req.body.name, req.body.price, req.params.shelfid, req.params.binid).then( () => {
    res.status(200).send("bin item edited!");
  });
});

app.delete('/api/shelf/:shelfid/bin/:binid', (req,res) => {
  app.get('db').deleteBinInfo(req.params.shelfid, req.params.binid).then( () => {
    res.status(200).send("bin item deleted!");
  });
});

//LISTEN
app.listen(port, () => console.log(`listening on port ${port}!`));
