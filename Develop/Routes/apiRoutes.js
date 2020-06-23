var router = require("express").Router()
var store = require("../db/store")

router.get("/notes", function(req, res){
    store.getNotes().then(function(notes){
      return res.json(notes)  
    })
    .catch(function(err) {
        return res.status(500).json(err)
      });
})


module.exports = router