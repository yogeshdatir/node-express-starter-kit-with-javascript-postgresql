const { pool } = require("../db");

// * HTTP codes: https://www.w3.org/Protocols/HTTP/HTRESP.html
// * Postgresql Error codes: https://www.postgresql.org/docs/current/errcodes-appendix.html
// async-await pattern for get callback argument
const userController = {
  getAllUsers: async (req, res) => {
    try {
      // pool.query runs a query on the first available idle client and
      // return its result
      const result = await pool.query(`Select * from users`);
      res.status(200).send({ data: result.rows });
    } catch (err) {
      console.error("Error executing query", err.stack);
      res.status(500).json({ error: "Something went wrong" });
    }
  },
  addUser: async (req, res) => {
    const { name, email } = req.body;
    try {
      const result = await pool.query(
        "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
        [name, email]
      );
      console.log(result.rows[0]);
      res.status(201).send({ data: result.rows });
    } catch (err) {
      console.error("Error executing query", err.code);
      res.status(500).json({ error: "Something went wrong" });
    }
  },
  deleteUser: async (req, res) => {
    const { name } = req.body;
    try {
      const result = await pool.query(
        "DELETE FROM users WHERE name=$1 RETURNING *",
        [name]
      );
      res.status(200).send({ data: result.rows });
    } catch (err) {
      console.error("Error executing query", err.stack);
      res.status(500).json({ error: "Something went wrong" });
    }
  },

  updateUser: async (req, res) => {
    const { name, email } = req.body;
    try {
      const result = await pool.query(
        "UPDATE users SET email = $1 WHERE name = $2 RETURNING *",
        [email, name]
      );
      res.status(200).send({ data: result.rows });
    } catch (err) {
      console.error("Error executing query", err.stack);
      res.status(500).json({ error: "Something went wrong" });
    }
  },
};

module.exports = userController;
