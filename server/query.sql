-- create table 
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    author TEXT NOT NULL,
    title TEXT NOT NULL,
    isbn TEXT,
    reason TEXT,
    notes TEXT,
    status TEXT,
    stars INT,
    tags TEXT[],
    cover_url TEXT,
    date_added TIMESTAMP DEFAULT NOW(),
    year_finished INT
);
