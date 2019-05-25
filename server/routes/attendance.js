var express = require("express");
var router = express.Router();
const attendance_model = require("../models/attendance_model");

/* GET home page. */
router.post("/", async function(req, res, next) {
  try {
    const response = await attendance_model.createAttendance(req.body.card_id);
    res.send({ success: true });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
