const router = require("express").Router();

module.exports = { default: router, router };

router.get("/user/:id([0-9]+)", async (req, res) => {
  console.log(`User ID:${req.params.id}`);
  let [user] = await req.app.get("db").f_get_user(req.params.id);
  user ? res.send(user) : res.sendStatus(404);
});
router.get("/user/:username([a-zA-Z0-9]+)", async (req, res) => {
  console.log(`Username: ${req.params.username}`);
  let [user] = await req.app.get("db").f_get_user(req.params.username);
  console.log(`User: ${user}`);
  user ? res.send(user) : res.sendStatus(404);
});

router.put("/user", async (req, res) => {
  let { username, password, localeId, calendarId } = req.body;
  try {
    let [user] = await (req.app.db?.f_create_user || req.app.db?.create_user)(
      localeId,
      calendarId,
      username,
      //   password,
      name
    );
    res.sendStatus(201);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});
