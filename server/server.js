const express = require("express");

const app = express();

/*
 *  Endpoints
 */

const auth = app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on PORT  ${PORT}`));
