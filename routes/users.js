const express = require('express');
const router = express.Router();

router.get('/userlist', (req, res, next) => {
  const { db } = req;
  const collection = db.get('userlist');
  collection.find({}, {}, (e,docs) => {
    res.json(docs);
  });
});

/* POST to adduser. */
router.post('/adduser', (req, res) => {
  const { db } = req;
  const collection = db.get('userlist');
  collection.insert(req.body, (err, result) => {
    res.send(
      (err === null) ? { msg: '' } : { msg: err }
    );
  });
});

module.exports = router;
