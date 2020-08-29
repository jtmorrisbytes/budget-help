create table loans (
  loan_id SERIAL PRIMARY KEY,
  loaner_name TEXT,
  loan_purpose TEXT,
  start_date DATE not null,
  balance MONEY not null,
  payment_amount MONEY not null,
  payment_frequency smallint,
  payment_frequency_type TEXT,
  -- payment_type TEXT,
  interest_APR FLOAT,
  interest_APY FLOAT
);
insert into loans(loaner_name,loan_purpose, start_date,balance,payment_amount, payment_frequency_type, interest_APR, interest_APY) 
VALUES
('Brian Parsons', 'Debt bailout', '2020-09-01',2000,500,'MONTLY',0.0,0.0),('Kay Morris', 'Help with bills','2020-09-01',2000,200,'MONTHLY',0.00,0.00);