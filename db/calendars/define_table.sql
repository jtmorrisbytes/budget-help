-- calendar types
DROP TABLE IF EXISTS calendars CASCADE;
CREATE TABLE calendars (
    calendar_id INTEGER PRIMARY KEY,
    name TEXT
);
-- calendar Labels
DROP TYPE IF EXISTS calendar_record CASCADE;
-- CREATE TYPE public.calendar_record AS (calendar_id INTEGER, name TEXT, label TEXT);

DROP TABLE IF EXISTS calendars_labels CASCADE;
-- CREATE TABLE calendars_labels (
--     label_id INTEGER PRIMARY KEY,
--     calendar_id INTEGER REFERENCES calendars(calendar_id), 
--     locale_id INTEGER REFERENCES locales(locale_id),
--     label TEXT
-- );
-- INSERT INTO calendars_labels (label_id, calendar_id, locale_id, label)
--     VALUES 
--     -- Gregorian Calendar, english label
--     (0,0,0, 'Gregorian');

DROP FUNCTION IF EXISTS f_get_all_calendars(INTEGER) CASCADE;
-- CREATE FUNCTION f_get_all_calendars (

--     p_locale_id INTEGER
-- )
-- RETURNS SETOF public.calendar_record
-- LANGUAGE plpgsql 
-- AS $$
-- DECLARE
--     r public.calendar_record;
-- BEGIN
--     for r in 
--         select calendars.calendar_id,
--                calendars.name, 
--                (SELECT c_l.label 
--                 FROM calendars_labels 
--                 AS c_l 
--                 WHERE calendars.calendar_id = c_l.calendar_id
--                 AND   p_locale_id = c_l.locale_id)
--         FROM calendars
--     loop
--     return next r;
--     end loop;
--     return;

-- END; $$