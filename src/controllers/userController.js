const { pool } = require("../db");

// * HTTP codes: https://www.w3.org/Protocols/HTTP/HTRESP.html
// async-await pattern for get callback argument
const userController = {
  getAllUsers: async (req, res) => {
    try {
      // pool.query runs a query on the first available idle client and
      // return its result
      pool.end();
      const result = await pool.query(`Select * from users`);
      res.status(200).send({ data: result.rows });
    } catch (err) {
      console.error("Error executing query", err.stack);
      res.status(500).json({ error: "Something went wrong" });
    }
  },
};

module.exports = userController;
