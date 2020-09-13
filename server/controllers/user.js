const user = require("express").Router();

user.get("/:id([0-9]+)", async (req, res) => {
  console.log(`User ID:${req.params.id}`);
  let [user] = await req.app.get("db").f_get_user(req.params.id);
  user ? res.send(user) : res.sendStatus(404);
});
user.get("/:username([a-zA-Z0-9]+)", async (req, res) => {
  console.log(`Username: ${req.params.username}`);
  let [user] = await req.app.get("db").f_get_user(req.params.username);
  console.log(`User: ${user}`);
  user ? res.send(user) : res.sendStatus(404);
});

user.put("/", async (req, res) => {
  let {
    userId,
    username,
    password,
    localeId,
    timezone,
    calendarId,
    name,
  } = req.body;
  try {
    (await req.app.get("db").f_get_user(userId || username))[0]
      ? res.status(501).send("user update not implemented")
      : res
          .status(201)
          .send(
            await req.app
              .get("db")
              .f_create_user(localeId, calendarId, username, timezone, name)
          );
  } catch (e) {
    let { table, column, code, detail, where } = e;
    console.error(e);
    res.status(500).send({ code, detail, table, column, where });
  }
});

module.exports = user;
