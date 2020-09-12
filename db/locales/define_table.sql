-- locale
-- locale affects languages and currency used 
-- unsure what this will affect at this time
DROP TABLE IF EXISTS locales CASCADE;
create table locales (
    locale_id INTEGER PRIMARY KEY,
    name TEXT,
    label TEXT
);