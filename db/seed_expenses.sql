drop table IF EXISTS expenses;
create table expenses(
  expense_id SERIAL PRIMARY KEY,
  name text,
  start_date DATE not null,
  end_date DATE,
  amount MONEY,
  type TEXT,
  frequency_type text,
  frequency smallint
  );



insert into expenses(name,start_date,end_date,amount,type,frequency_type, frequency)
VALUES
    ('Dashlane Premium','2020-02-21', '2021-02-21', 59.95, 'APPLE-SUBSCRIPTION','YEARLY',1),
    ('Youtube Premium', '2020-08-31',null,15.95,'APPLE-SUBSCRIPTION','MONTHLY',1),
    ('Cronometer','2020-08-31', null,6.99, 'APPLE-SUBSCRIPTION','MONTHLY',1),
    ('Zero Plus', '2020-08-31', null, 9.99, 'APPLE-SUBSCRIPTION','MONTHLY',1),
    ('Funimation Premium','2020-04-05','2021-04-05','APPLE-SUBSCRIPTION','YEARLY',1),
    ('Car Registration','2021-06-01',null,'AUTO','YEARLY')