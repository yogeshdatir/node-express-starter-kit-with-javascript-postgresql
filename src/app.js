const express = require("express");
const router = require("./routes/userRoutes");
const app = express();

const PORT = 5000;

app.use("/users", router);

app.listen(PORT, () => console.log(`Server started at http://localhost:5000/`));
