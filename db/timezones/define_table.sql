DROP TABLE IF EXISTS timezones;
CREATE TABLE timezone (
    tz_id SERIAL PRIMARY KEY,
    name TEXT,
    label TEXT
)