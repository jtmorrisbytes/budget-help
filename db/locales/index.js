let locales = require("./metadata.json").map((locale, locale_id) => {
  return { locale_id, ...locale };
});
async function getLocales() {
  return locales;
}
async function getLocale(localeId = 0) {
  return locales[localeId];
}
async function getLocaleByName(localeName) {
  return (
    locales.find((locale) => {
      return locale.name === localeName;
    }) || null
  );
}
async function getLocaleIdByName(localeName = "") {
  let localeId = locales.findIndex((locale) => {
    return locale.name === localeName;
  });
  return localeId >= 0 ? localeId : null;
}
async function isValidLocaleId(localeId) {
  return locales[localeId] !== null;
}
module.exports = {
  getLocale,
  getLocales,
  getLocaleByName,
  getLocaleIdByName,
  isValidLocaleId,
};
