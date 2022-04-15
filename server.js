const express = require ('express');
const cors = require ('cors');
const dotenv = require ('dotenv');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtAuthenticate = require('express-jwt')

dotenv.config()
mongoose.Promise = global.Promise;
// mongoose.set('useFindAndModify', false);
mongoose.connect(
  `mongodb+srv://admin:${process.env.MONGO_PW}@cluster0.cmnvz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {useNewUrlParser: true}
)

const port = 3000;
const app = express();

app.listen(port);

 
//404 page
app.use((req,res) =>{
    res.status(404).send({url:`${req.originalUrl} not found`})
})
app.get('/', (req, res) => {
    res.send ('Hello World');
});
console.log(`Server started on http://localhost:${port}`)

// hi

