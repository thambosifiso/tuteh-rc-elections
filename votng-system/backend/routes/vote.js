const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post('/vote', (req, res) => {
    const { studentId, candidate } = req.body;
    db.query('INSERT INTO votes (studentId, candidate) VALUES (?, ?)', [studentId, candidate]);
    db.query('UPDATE students SET used=1 WHERE studentId=?', [studentId]);
    res.json({ success: true });
  });
  return router;
};
