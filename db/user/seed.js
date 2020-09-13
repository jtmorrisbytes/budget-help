module.exports = async function seedUser(db) {
  db.user.define_table().then(() => {
    console.log("Defined table for user");
  });
};
