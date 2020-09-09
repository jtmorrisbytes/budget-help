-- global application metadata

-- languages

DROP TABLE IF EXISTS languages CASCADE;
CREATE TABLE languages (
    language_id INTEGER PRIMARY KEY, 
    name TEXT, 
    label TEXT
);
INSERT INTO languages (language_id, name, label)
    VALUES (0, 'ENGLISH', 'English');

-- calendar types
DROP TABLE IF EXISTS calendars CASCADE;
CREATE TABLE calendars (
    calendar_id INTEGER PRIMARY KEY,
    name TEXT
);
INSERT INTO calendars (calendar_id, name)
    VALUES 
    -- GREGORIAN CALENDAR

    (0, 'GREGORIAN');

-- calendar Labels
DROP TABLE IF EXISTS calendars_labels CASCADE;
CREATE TABLE calendars_labels (
    label_id INTEGER PRIMARY KEY,
    calendar_id INTEGER REFERENCES calendars(calendar_id), 
    language_id INTEGER REFERENCES languages(language_id),
    label TEXT
);
INSERT INTO calendars_labels (label_id, calendar_id, language_id, label)
    VALUES 
    -- Gregorian Calendar, english label
    (0,0,0, 'Gregorian');

--locale

-- unsure what this will affect at this time
DROP TABLE IF EXISTS locales CASCADE;
create table locales (
    locale_id INTEGER PRIMARY KEY,
    name TEXT,
    label TEXT
);

INSERT INTO locales (locale_id, name, label) 
    VALUES(0, 'en-us', 'English, United States');

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
