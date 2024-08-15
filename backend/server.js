const express = require('express');
const dotenv = require('dotenv');


const connectToDB = require('./db/connectToDB');
const userAuthRoute = require('./routes/userAuth.route');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(express.json());


app.use('/api/user', userAuthRoute);
app.get('/', (req, res) =>{
          res.send('<h1>Hello world</h1>');
})

app.listen(PORT, () =>{
          connectToDB();
          console.log(`Server is running on port ${PORT}`);
})
