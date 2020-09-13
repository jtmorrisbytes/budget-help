const router = require("express").Router();

router.use("/locales", require("./locales"));

router.use("/user", require("./user"));
module.exports = router;
