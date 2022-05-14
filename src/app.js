const db = require("../models/index");
const Users = require("../models/users");
const express = require("express");
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })
const app = express()
const port = 3000
const views = require('./routes/view')
const apis = require('./routes/api')
const bodyParser = require('body-parser')
// app.use(express.static(__dirname + "/views"));
app.set("view engine", "ejs");
app.engine('ejs', require('ejs').__express);

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const assignMysqlObj = function (req, res, next) {
  // console.log("in assignMysqlObj")
  req.db = db
  // console.log('LOGGED')
  next()
}

app.use(assignMysqlObj)

// app.set('views', './views')

app.use('/views', views)
app.use('/apis', apis)

app.get('/', (req, res) => {
  res.send('Hello World!')
})




try {
  db.sequelize.authenticate();
  // db.sequelize.sync({ force: false })
  // db.Users.create({email:"asdfasdf"})
  // let m = await db.Countries.findAll()
  
  // console.log(db.Sequelize.Op)
  // Users.create({email:"mamnoon@gmail.om"})
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})