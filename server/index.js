// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const RegisterModel = require('./models/Register')

// const app = express()
// app.use(cors())
// app.use(express.json())

// mongoose.connect('mongodb://127.0.0.1:27017/register')
// //api for register
// app.post('/register', (req, res) => {
//     const {name, email, password} = req.body;
//     // to insert into database this data extracted from frontend 
//     // we have to create a model 
//     RegisterModel.findOne({email: email})
//     .then(user => {
//         if(user){
//             res.json("Already have an account")

//         } else{
//             RegisterModel.create({name: name, email: email})
//             .then((result) => {
//                 res.json("account created")
//             }).catch((err) => {
//                 res.json(err)
//             });
//         }
        
//     }).catch((err) => {
//          res.json(err);
        
//     });
// })

// app.listen(3001, ()=> {
//     console.log("Server is running");
    
// })

/******************* */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel = require('./models/Register');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/register')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// API for registration
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  RegisterModel.findOne({ email })
    .then(user => {
      if (user) {
        res.json('Already have an account');
      } else {
        RegisterModel.create({ name, email, password })
          .then(() => res.json('Account created'))
          .catch(err => res.json(err));
      }
    })
    .catch(err => res.json(err));
});

// API for login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  RegisterModel.findOne({ email, password })
    .then(user => {
      if (user) {
        res.json('Login successful');
      } else {
        res.json('Invalid email or password');
      }
    })
    .catch(err => res.json(err));
});

app.listen(3001, () => {
  console.log('Server is running on http://127.0.0.1:3001');
});
