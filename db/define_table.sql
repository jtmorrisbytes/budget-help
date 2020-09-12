drop table IF EXISTS income cascade;
-- truncate table income;
create table income(
  income_id serial primary key,
  employer_name text,
  pay_start DATE not null,
  pay_frequency smallint not null,
  pay_frequency_type TEXT NOT NULL,
  rate MONEY NOT NULL
  );
  insert into income(employer_name, pay_start, pay_frequency, pay_frequency_type, rate) Values(
  'amazon', '2020-09-21', 2, 'WEEKLY',15);
