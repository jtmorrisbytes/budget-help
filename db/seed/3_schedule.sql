
-- data used for schedule
create table default_schedule (
	entry_id SERIAL PRIMARY KEY,
  income_id INTEGER REFERENCES income(income_id),
  hours INTEGER,
  frequency_code INTEGER REFERENCES frequency_codes(frequency_id)
);
DROP TABLE IF EXISTS schedule CASCADE;
create table schedule (
  entry_id SERIAL PRIMARY KEY,
  income_id integer REFERENCES income(income_id),
  week_start DATE,
  planned_hours int,
  worked_hours int
);