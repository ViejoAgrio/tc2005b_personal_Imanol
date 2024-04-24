const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is route 3');
});

module.exports = router;