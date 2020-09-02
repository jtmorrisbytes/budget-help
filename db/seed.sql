-- frequency codes
DROP TABLE IF EXISTS frequency_codes CASCADE;
create table frequency_codes (
    frequency_id SERIAL PRIMARY KEY,
    locale TEXT,
    name TEXT,
    label TEXT
);
INSERT INTO frequency_codes (locale, name, label)
    VALUES 
        ('en-us','DAILY', 'Daily'),
        ('en-us', 'WEEKLY', 'Weekly'),
        ('en-us', 'MONTHLY', 'Monthly'),
        ('en-us', 'YEARLY', 'Yearly');

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

-- -- income




DROP TABLE IF EXISTS income CASCADE;
create table income(
    income_id SERIAL PRIMARY KEY,
    is_hourly BOOLEAN DEFAULT TRUE,
    company_name TEXT,
  	dow_start integer,
    position TEXT,
    pay_rate NUMERIC,
    frequency_code INTEGER REFERENCES frequency_codes(frequency_id),
    frequency INTEGER,
    day_num INTEGER,
    start_date DATE,
    end_date DATE
);

-- real test data for income calculator
INSERT INTO INCOME (company_name, position, is_hourly, pay_rate, frequency_code, frequency, day_num,dow_start, start_date,  end_date)
    VALUES
        ('Amazon', 'inbound - stow', TRUE, 15,
         (SELECT frequency_id from frequency_codes where locale = 'en-us' and name='WEEKLY'),
          2, (select extract(dow from '2020-08-02'::timestamp)), 0 ,'2020-08-02',NULL);

-- view income
create table schedule (
  entry_id SERIAL PRIMARY KEY,
  income_id integer FOREIGN KEY REFERENCES income(income_id),
  
);
-- Expense Codes: Used to differentiate how the row's data is used. 
--                this table emulates an enum.
-- DROP TABLE IF EXISTS expense_codes CASCADE;
-- CREATE TABLE expense_codes (
--     -- use code as primary key to allow foreign table referencial validation.
--     -- with this scheme it is important to use incrementing numbers, regardless of language.
--     -- Usage: select (columns) from TABLE where language = (langage) ORDER BY code ASC and
--     --        calculate by ascending order of primary key
--     code INTEGER PRIMARY KEY,
--     locale TEXT,
--     label TEXT
-- );
-- INSERT INTO expense_codes (code,locale,label)
-- VALUES 
--     (0, 'en-us', 'Pre Tax Deduction'),
--     (1, 'en-us', 'Tax Deduction'),
--     (2, 'en-us', 'Post Tax Deduction'),
--     (3, 'en-us', 'Savings'),
--     (4, 'en-us', 'Loan, Paid Daily'),
--     (5, 'en-us', 'Loan, Paid Weekly'),
--     (6, 'en-us', 'Loan, Paid Monthly'),
--     (7, 'en-us', 'Loan, Paid Yearly'),
--     (8, 'en-us', 'Daily Expense'),
--     (9, 'en-us', 'Weekly Expense'),
--     (10, 'en-us', 'Monthly Expense'),
--     (11, 'en-us', 'Yearly Expense');

-- DROP TABLE IF EXISTS expense_units CASCADE;
-- CREATE TABLE expense_units (
--     expense_unit_id SERIAL PRIMARY KEY,
--     locale TEXT,
--     unit TEXT,
--     symbol CHAR,
--     multiplier FLOAT
-- );

-- INSERT INTO expense_units (locale,unit,symbol, multiplier) VALUES

--     ('en-us', 'Percent', '%', 0.01),
--     ('en-us', 'Dollars', '$', 1.00),
--     ('en-us', 'cents', '¢', 0.01);

-- DROP TABLE IF EXISTS  expenses CASCADE;
-- CREATE TABLE expenses (
--     expense_id SERIAL PRIMARY KEY,
--     -- code INTEGER REFERENCES expense_codes(code),
--     buisness_name TEXT,
--     purpose TEXT,
--     amount FLOAT,
--     frequency INTEGER,
--     unit INTEGER REFERENCES expense_units(expense_unit_id),
--     day_start INTEGER DEFAULT NULL,
--     month_start INTEGER DEFAULT NULL,
--     year_start INTEGER DEFAULT NULL
-- )
