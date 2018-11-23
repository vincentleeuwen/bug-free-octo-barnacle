const express = require('express');
const router = express.Router();

router.get('/userlist', (req, res, next) => {
  const { db } = req;
  const collection = db.get('userlist');
  collection.find({}, {}, (e,docs) => {
    res.json(docs);
  });
});

module.exports = router;
