const express = require("express");
const router = require("./routes/userRoutes");
const cors = require("cors");
const app = express();

// Config .env
require("dotenv").config();

app.use(express.json());
/*
 * cors notes: https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/
 * https://expressjs.com/en/resources/middleware/cors.html
 */
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/users", router);

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}/`)
);
