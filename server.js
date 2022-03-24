const express = require("express");
const cors = require('cors');
const port = process.env.PORT || 8000;
// require('dotenv').config();
const app = express();
const mongoose = require('mongoose')

app.use(cors());

app.use(express.json());

app.use(express.urlencoded())

//bringing in schema 
const Message = require('./Message.js');

//model for schema instances
const ChatMessage = mongoose.model('ChatMessage', Message);


//get request to access info from database to render in chat box component
app.get("/:id", async (request, response) => {

  console.log(request.params);

    //pulls parameter from request object  
    let id = request.params['id']

    //created connection with database and assigns it to a variable collection
    let collection = await this.db()

    //uses find method to search collection for documents with room value that matches request parameter
    let result = await collection.find({room: id})

    console.log(result)

    //send results back to client in response object
    response.json(result)

})

//post request to save user input to database
app.post("/:id", async (request, response) => {


  console.log(request.params);

  console.log(request.body);

  //pulls date out of request body and adds it to variable to pass it to model
  let when = request.body.when;

  //pulls user-name out of request body and adds it to variable to pass it to model
  let user = request.body.user;

  //pulls chat-room name out of request body and adds it to variable to pass it to model
  let room = request.body.room;

  //pulls text content out of request body and adds it to variable to pass it to model
  let body = request.body.body;

  const entry = new ChatMessage({

    //builds model instance with variable values
    when: when,
    user: user,
    room: room,
    body: body,

  })

    //adds entry to ChatMessage collection in chatroom database
    entry.save();

    console.log(request.params);

    //pulls parameter from request object  
    let id = request.params['id']

    //created connection with database and assigns it to a variable collection
    let collection = await this.db()

    //uses find method to search collection for documents with room value that matches request parameter
    let result = await collection.find({room: id})

    console.log(result)

    //send results back to client in response object
    response.json(result)


}) 


app.listen(port, () => {
  console.log('listening on port: ' + port) 
})


