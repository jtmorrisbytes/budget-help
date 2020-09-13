module.exports = async function seedIncome(db) {
  await db.income.define_table();
  console.log("Seeded income data");
};
