console.log("loading locales for command line");

module.exports = function Locales(db, consoleWidth, consoleHeight) {
  function renderLocaleMenu() {
    let output = `\t Please choose your language and reigon:\n`;
    db.locales.getLocales().forEach((locale) => {
      output += `${locale.locale_id}: ${locale.label}\n`;
    });
    return output;
  }

  function renderInvalidLocaleId(localeId) {
    return `Locale id ${localeId} is invalid\n`;
  }
  function render(localeId) {
    if (!db.locales.isValidLocaleId(localeId)) {
      return renderInvalidLocaleId(localeId);
    } else {
      return renderLocaleMenu(localeId);
    }
  }
  return {
    isValidLocaleId: db.locales.isValidLocaleId,
    render,
  };
};
