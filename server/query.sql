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

-- example of insert data
INSERT INTO books (title, author, isbn, reason, status, stars, tags, cover_url)
VALUES ('All my friends are dead', 'Avery Monsen', '9848465454', 'funny picture book', 'reading', 4, ARRAY['Funny', 'Dinosaurs'], 'someurl.com');
