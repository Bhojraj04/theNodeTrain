const express = require('express')
const router = express.Router()


router.get('/signup', (req, res) => {
  res.render("signup")
  // res.end("asdf")
})


module.exports = router
