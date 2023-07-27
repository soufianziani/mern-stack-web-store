
const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/products')
const userRoutes = require('./routes/user')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/products', productRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URI || "mongodb+srv://ayoub:host@cluster0.smuoutw.mongodb.net/Mernstack?retryWrites=true&w=majority")
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT || 4000, () => {
      console.log('connected to db & listening on port', process.env.PORT || 4000)
    })
  })
  .catch((error) => {
    console.log(error)
  })
  const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'password';

app.post('/api/user/login', (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // Generate JWT token
    const token = jwt.sign({ username }, process.env.JWT_SECRET);
    return res.json({ token });
  }

  return res.status(401).json({ error: 'Invalid credentials' });
});
app.post('/api/user', (req, res) => {
  const { email, password } = req.body;

  // Check if the email and password match the admin credentials
  if (email === 'ayoub' && password === 'admin') {
    // Return a success response indicating successful login
    return res.json({ success: true });
  } else {
    // Return an error response for invalid credentials
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});