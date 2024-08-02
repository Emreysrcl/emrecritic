SQL KODLARI;

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    score INT,
    comment VARCHAR(8000),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO games(title,score,comment)
VALUES('pubg',9,'Good')
,('gta',10,'Very Good')
,('fifa',8,'Good')
,('pes',7,'Bad')
,('nfs',6,'Bad')
,('csgo',9,'Good')