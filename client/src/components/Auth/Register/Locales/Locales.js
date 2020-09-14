import React from "react";

import strings from "./Locales.strings.json";
let mappedLocales = null;
function Locales(props) {
  mappedLocales =
    mappedLocales ||
    props.locales.map((locale) => {
      return <option value={locale.localeId}>{locale.label}</option>;
    });
  return (
    <div id="Locales">
      <label htmlFor={"Locales_select-localeId"}>
        {strings[props.localeId || 0]["locales.select"]}
      </label>
      <select
        value={props.localeId}
        id={"Locales_select-localeId"}
        onChange={props.updateLocaleId}
      >
        {mappedLocales}
      </select>
    </div>
  );
}

export default Locales;
