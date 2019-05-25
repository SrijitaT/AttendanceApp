const db = require("../dbConnection");
const Sequelize = require("sequelize");
const Cards = db.define(
  "cards",
  {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    user_id: Sequelize.INTEGER,
    card_id: Sequelize.TEXT
  },
  {
    timestamps: false
  }
);
module.exports = Cards;
module.exports.linkCard = card => {
  return Cards.create(card);
};
module.exports.getUserByCardID = cid => {
  return db.query("select user_id from cards where card_id = '" + cid + "'");
};
