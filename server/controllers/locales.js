const router = require(".");

// function getSupportedLocales(req,res)
const locales = require("express").Router();
locales.get("/", async (req, res) => {
  let locales = await req.app.get("db").locales.getLocales();
  res.status(200).json(locales);
});
locales.get("/:localeName([a-z]{2}-[a-zA-Z]{2})", async (req, res) => {
  let [locale] = await req.app
    .get("db")
    .locales.getLocaleByName(req.params.localeName);
  locale ? res.json(locale) : res.sendStatus(404);
});
module.exports = locales;
