-- global application metadata

--locale


DROP TABLE IF EXISTS locale;
create table locale (
    locale_id INTEGER PRIMARY KEY,
    name TEXT,
    label TEXT
);

INSERT INTO locale (name, label) 
    VALUES( 'en-us', 'English, United States')



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
