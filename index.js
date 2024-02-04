const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
const routesHandler = require("./routes");

const PORT = 8000;

app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Use cors middleware with the specified options
app.use(cors(corsOptions));

// app.use("/api/health", (req, res) => {
//   res.send("healthy");
// });

app.use("/api", routesHandler);

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
