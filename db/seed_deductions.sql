DROP TABLE IF EXISTS deductions;
create table deductions(
  income_deduction_id serial primary key,
  income_id INT references income(income_id),
  name TEXT,
  amount MONEY,
  type TEXT
  );
  insert into deductions(income_id,name,amount, type) Values((select income_id from income where employer_name = 'amazon'), 'Benefits',150.00,'PRETAX');