const router = require(".");

// function getSupportedLocales(req,res)
const locales = require("express").Router();
locales.get("/", async (req, res) => {
  let locales = await req.app.get("db").locales.getLocales();
  res.status(200).json(locales);
});
module.exports = locales;
