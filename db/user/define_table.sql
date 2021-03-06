DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    locale_id INTEGER REFERENCES locales(locale_id) NOT NULL,
    calendar_id INTEGER REFERENCES calendars(calendar_id) NOT NULL,
    username TEXT UNIQUE NOT NULL,
    --locale INTEGER REFERENCES locales(locale_id),
    tz_id INTEGER REFERENCES timezones(tz_id) NOT NULL,
    name TEXT NOT NULL
);


DROP TYPE IF EXISTS public.r_resolved_user cascade;
CREATE TYPE public.r_resolved_user AS (
        user_id INTEGER,
        locale_id INTEGER,
        locale TEXT,
        calendar_id INTEGER,
        calendar TEXT,
        username TEXT,
        tz_id INTEGER,
        name TEXT
     );


DROP FUNCTION IF EXISTS f_get_user(p_username TEXT);
CREATE FUNCTION f_get_user (
    p_username TEXT
)
RETURNS SETOF public.r_resolved_user
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    (SELECT 
            user_id,
            locale_id,
            (SELECT name from locales where locale_id = users.locale_id) "locale",
            calendar_id,
            (SELECT name from calendars where users.calendar_id = calendar_id) "calendar",
             username,
             tz_id, 
             name 
    FROM users
    WHERE username = p_username);
END; $$;

DROP FUNCTION IF EXISTS f_get_user (p_user_id INTEGER);

CREATE FUNCTION f_get_user (p_user_id INTEGER
)
RETURNS SETOF public.r_resolved_user
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    (
       SELECT 
            user_id,
            locale_id,
            (SELECT name from locales where locale_id = users.locale_id) "locale",
            calendar_id,
            (SELECT name from calendars where users.calendar_id = calendar_id) "calendar",
             username,
             tz_id, 
             name 
    FROM users
    WHERE user_id = p_user_id
    );
END; $$;


DROP FUNCTION IF EXISTS f_create_user;

CREATE FUNCTION f_create_user (
    p_locale_id INTEGER,
    p_calendar_id INTEGER,
    p_username TEXT,
    p_timezone_id INTEGER,
    p_name TEXT
)
RETURNS SETOF users
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY INSERT INTO users (locale_id, calendar_id, username, tz_id, name) 
    VALUES(p_locale_id, p_calendar_id, p_username, p_timezone_id, p_name) RETURNING *;
END; $$;





-- sample data