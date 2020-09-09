DROP TABLE IF EXISTS users CASCADE;

create TABLE users (
    user_id SERIAL PRIMARY KEY,
    locale_id INTEGER REFERENCES locale(locale_id),
    calendar_id INTEGER REFERENCES calendars(calendar_id),
    locale INTEGER REFERENCES locales(locale_id),
    timezone TEXT,
    name TEXT
)