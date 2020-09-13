let locales = require("./metadata.json").map((locale, locale_id) => {
  return { locale_id, ...locale };
});
function getLocales() {
  return locales;
}
function getLocale(localeId = 0) {
  return locales[localeId];
}
function getLocaleByName(localeName) {
  return (
    locales.find((locale) => {
      return locale.name === localeName;
    }) || null
  );
}
function getLocaleIdByName(localeName = "") {
  let localeId = locales.findIndex((locale) => {
    return locale.name === localeName;
  });
  return localeId >= 0 ? localeId : null;
}
module.exports = {
  getLocale,
  getLocales,
  getLocaleByName,
  getLocaleIdByName,
};
