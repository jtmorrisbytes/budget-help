console.log("loading locales for command line");

module.exports = function Locales(db) {
  function render() {
    console.log("hello from locales");
  }
  return {
    render,
  };
};
