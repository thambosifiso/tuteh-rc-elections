const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post('/login', (req, res) => {
    const { studentId, keyNumber } = req.body;
    db.query('SELECT * FROM students WHERE studentId=? AND keyNumber=? AND used=0',
      [studentId, keyNumber],
      (err, results) => {
        if (results.length > 0) {
          res.json({ success: true });
        } else {
          res.json({ success: false, message: "Invalid or already used key" });
        }
      });
  });
  return router;
};
