const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const routesHandler = require("./routes");

const PORT = 8000;

app.use(bodyParser.json());

// app.use("/api/health", (req, res) => {
//   res.send("healthy");
// });

app.use('/api', routesHandler);

app.use((error, req, res, next) => {
  if (error.name === "JSONWebTokenError") {
    res.status(401).json({
      error: "Invalid token.",
    });
  } else {
    // TODO
    res.status(404).json({
        error: "API Not found",
      });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
