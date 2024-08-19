const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');


const connectToDB = require('./db/connectToDB');
const userAuthRoute = require('./routes/userAuth.route');
const noteRoute = require('./routes/note.route');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());
app.use(cors({
          origin: "http://localhost:5173",
          credentials: true,
          methods: ['GET', 'POST', 'PUT', 'DELETE']
}))


app.use('/api/user', userAuthRoute);
app.use('/api/note', noteRoute);
app.get('/', (req, res) =>{
          res.send('<h1>Hello world</h1>');
})

app.listen(PORT, () =>{
          connectToDB();
          console.log(`Server is running on port ${PORT}`);
})
