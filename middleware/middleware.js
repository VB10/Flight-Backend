const statusCode       = require("http-status-codes");

const district = function(req, res, next) {
  if (!req.headers["vb10"]) return  res.status(statusCode.NOT_FOUND).json({ "error":"Header is required" });
  next();
};

module.exports = { district };
