--frequency codes

DROP TABLE IF EXISTS frequency_codes CASCADE;
create table frequency_codes (
    frequency_id SERIAL PRIMARY KEY,
    locale_id INTEGER REFERENCES locales(locale_id),
    name TEXT,
    label TEXT
);
INSERT INTO frequency_codes (locale_id, name, label)
    VALUES 
        (0,'DAILY', 'Daily'),
        (0, 'WEEKLY', 'Weekly'),
        (0, 'MONTHLY', 'Monthly'),
        (0, 'YEARLY', 'Yearly');
