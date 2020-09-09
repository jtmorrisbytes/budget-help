-- -- income
DROP TABLE IF EXISTS income CASCADE;
create table income(
    income_id SERIAL PRIMARY KEY,
    is_hourly BOOLEAN DEFAULT TRUE,
    company_name TEXT,
    position TEXT,
    start_date DATE,
    end_date DATE,
  	dow_start integer,
    frequency INTEGER,
    frequency_code INTEGER REFERENCES frequency_codes(frequency_id),
    day_num INTEGER,
    pay_rate NUMERIC,
    overtime_enabled BOOLEAN,
    overtime_multiplier NUMERIC(2),
    overtime_hours_start integer
);
