create table astronauts (
  id serial primary key,
  name varchar(200),
  birth_date date,
  missions int,
  country varchar(100),
  height_cm int
);

insert into astronauts (name, birth_date, missions, country, height_cm) values
('Yuri Gagarin', '1934-03-09', 1, 'Russia', 157),
('Neil Armstrong', '1930-08-05', 2, 'USA', 180),
('Buzz Aldrin', '1930-01-20', 2, 'USA', 178),
('Valentina Tereshkova', '1937-03-06', 1, 'Russia', 170),
('Chris Hadfield', '1959-08-29', 3, 'Canada', 180),
('Peggy Whitson', '1960-02-09', 3, 'USA', 163),
('Samantha Cristoforetti', '1977-04-26', 2, 'Italy', 170);


-- Найти средний рост астронавтов.
select AVG(height_cm) from astronauts;

-- Найти астронавта с максимальным количеством миссий.
select MAX(missions) as max_mission from astronauts;

-- Вывести всех астронавтов, у которых миссий больше, чем среднее число миссий. 
select * from astronauts where missions > (select AVG(missions) from astronauts);

-- Вывести трёх самых молодых астронавтов.
select * from astronauts order by birth_date desc limit 3;

-- Посчитать, сколько астронавтов из USA.
select COUNT(*) as astronauts_usa from astronauts where country = 'USA';

-- Найти общий опыт (сумму миссий) всех астронавтов из России.
SELECT SUM(missions) as total_missions_russia FROM astronauts WHERE country = 'Russia';

-- Вывести имена астронавтов, чьё имя содержит букву "a" (без учёта регистра).ʼ
select name from astronauts where LOWER(name) LIKE '%a%';