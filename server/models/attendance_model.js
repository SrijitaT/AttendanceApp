const db = require("../dbConnection");
const Sequelize = require("sequelize");
const Card_model = require("./cards_model");
const Attendance = db.define(
  "dailyattendance",
  {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    user_id: Sequelize.INTEGER,
    count: Sequelize.INTEGER
  },
  { freezeTableName: true }
);
module.exports = Attendance;
getCountByDate = uid => {
  return db.query(
    "select * from dailyattendance where user_id = " +
      uid +
      " and DATE(createdAt)='2019-05-26'"
  );
};
module.exports.createAttendance = async card_id => {
  try {
    const user_id = await Card_model.getUserByCardID(card_id);
    console.log("user_id", user_id[0][0].user_id);
    const count = await getCountByDate(user_id[0][0].user_id);
    console.log(count);
    const att = {
      user_id: user_id[0][0].user_id,
      count: count[0].length > 0 ? count[0][0].count + 1 : 1
    };
    //return Attendance.create(att);
  } catch (err) {
    console.log(err);
  }
};
