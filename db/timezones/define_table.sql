BEGIN;
DROP TABLE IF EXISTS timezones CASCADE;
CREATE TABLE timezones (
    tz_id SERIAL PRIMARY KEY,
    name TEXT,
    abbrev TEXT,
    tz_offset DECIMAL
);
COMMIT;
END;