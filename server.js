const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()
app.use(cors({
  origin: ['http://localhost:8080'],
  credentials: true // enable set cookie
}));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(session({
  secret: 'puki muki',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})





const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))