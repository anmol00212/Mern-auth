const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: './config/config.env' });


connectDB();

const auth = require('./routes/auth.routes');

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/auth', auth);


app.get('/', (req, res) => {
    res.send('Hello Coders!')
  })

  if (process.env.NODE_ENV = "production") {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

 
const PORT = 8080; 

app.listen(PORT, () =>{
  console.log(
    `Your sample of MERN authentication is running at ${PORT} `
  )
  });

