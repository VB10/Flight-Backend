const express = require("express");
const app              = express();
const port             = 3000;
const { district }     = require("./middleware/middleware");
const { flightStates } = require("./controllers/open_sky_controller");
const statusCode       = require("http-status-codes");

app.use(district);
app.get("/router", (req, res) => res.status(statusCode.OK).json({ error }));

app.get("/api/flight", (req, res) =>
  flightStates(data => {
    if (!data) {
      error = "OpenSky Error";
      res.status(statusCode.OK).json({ error });
    } else {
      res.status(statusCode.OK).json(data);
    }
  })
);
// app.listen(port, () => {});
module.exports = { app };
