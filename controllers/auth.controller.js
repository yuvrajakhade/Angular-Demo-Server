const db = require("../config/database");

exports.findUser = async (req, res) => {
  const query = "SELECT * FROM auth";
  db.query(query, function (error, result) {
    if (error)
      return res.json({
        error: true,
        result: error,
      });
    else
      return res.json({
        error: false,
        result: result,
      });
  });
};

exports.findUserById = async (req, res) => {
  const user_id = req.params.id;
  const query = "SELECT * FROM auth where id=" + user_id;
  db.query(query, function (error, result) {
    if (error)
      return res.json({
        error: true,
        result: error,
      });
    else
      return res.json({
        error: false,
        result: result,
      });
  });
};
