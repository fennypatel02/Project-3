--Create tables for stock data

CREATE TABLE amazon (
symbol VARCHAR NOT NULL,
date DATE NOT NULL,
low FLOAT NOT NULL,
open FLOAT NOT NULL,
volume FLOAT NOT NULL,
high FLOAT NOT NULL,
close FLOAT NOT NULL,
adjusted_close FLOAT NOT NULL);


CREATE TABLE american_tower (
symbol VARCHAR NOT NULL,
date DATE NOT NULL,
low FLOAT NOT NULL,
open FLOAT NOT NULL,
volume FLOAT NOT NULL,
high FLOAT NOT NULL,
close FLOAT NOT NULL,
adjusted_close FLOAT NOT NULL);



CREATE TABLE apple (
symbol VARCHAR NOT NULL,
date DATE NOT NULL,
low FLOAT NOT NULL,
open FLOAT NOT NULL,
volume FLOAT NOT NULL,
high FLOAT NOT NULL,
close FLOAT NOT NULL,
adjusted_close FLOAT NOT NULL);



CREATE TABLE bank_of_america (
symbol VARCHAR NOT NULL,
date DATE NOT NULL,
low FLOAT NOT NULL,
open FLOAT NOT NULL,
volume FLOAT NOT NULL,
high FLOAT NOT NULL,
close FLOAT NOT NULL,
adjusted_close FLOAT NOT NULL);




CREATE TABLE costco (
symbol VARCHAR NOT NULL,
date DATE NOT NULL,
low FLOAT NOT NULL,
open FLOAT NOT NULL,
volume FLOAT NOT NULL,
high FLOAT NOT NULL,
close FLOAT NOT NULL,
adjusted_close FLOAT NOT NULL);




CREATE TABLE dte_energy (
symbol VARCHAR NOT NULL,
date DATE NOT NULL,
low FLOAT NOT NULL,
open FLOAT NOT NULL,
volume FLOAT NOT NULL,
high FLOAT NOT NULL,
close FLOAT NOT NULL,
adjusted_close FLOAT NOT NULL);




CREATE TABLE fedex (
symbol VARCHAR NOT NULL,
date DATE NOT NULL,
low FLOAT NOT NULL,
open FLOAT NOT NULL,
volume FLOAT NOT NULL,
high FLOAT NOT NULL,
close FLOAT NOT NULL,
adjusted_close FLOAT NOT NULL);




CREATE TABLE marathon_oil (
symbol VARCHAR NOT NULL,
date DATE NOT NULL,
low FLOAT NOT NULL,
open FLOAT NOT NULL,
volume FLOAT NOT NULL,
high FLOAT NOT NULL,
close FLOAT NOT NULL,
adjusted_close FLOAT NOT NULL);


CREATE TABLE netflix (
symbol VARCHAR NOT NULL,
date DATE NOT NULL,
low FLOAT NOT NULL,
open FLOAT NOT NULL,
volume FLOAT NOT NULL,
high FLOAT NOT NULL,
close FLOAT NOT NULL,
adjusted_close FLOAT NOT NULL);


CREATE TABLE sherwin_williams (
symbol VARCHAR NOT NULL,
date DATE NOT NULL,
low FLOAT NOT NULL,
open FLOAT NOT NULL,
volume FLOAT NOT NULL,
high FLOAT NOT NULL,
close FLOAT NOT NULL,
adjusted_close FLOAT NOT NULL);


CREATE TABLE united_healthcare (
symbol VARCHAR NOT NULL,
date DATE NOT NULL,
low FLOAT NOT NULL,
open FLOAT NOT NULL,
volume FLOAT NOT NULL,
high FLOAT NOT NULL,
close FLOAT NOT NULL,
adjusted_close FLOAT NOT NULL);


--Join all tables into one dataset

SELECT * FROM amazon
UNION
SELECT * FROM american_tower
UNION
SELECT * FROM apple
UNION
SELECT * FROM bank_of_america
UNION
SELECT * FROM costco
UNION
SELECT * FROM dte_energy
UNION
SELECT * FROM fedex
UNION
SELECT * FROM marathon_oil
UNION
SELECT * FROM netflix
UNION
SELECT * FROM sherwin_williams
UNION
SELECT * FROM united_healthcare
ORDER BY symbol, date





