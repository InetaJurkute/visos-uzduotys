-- Jeigu reikia
-- Sukuriam db
--CREATE DATABASE webGameProject;

-- KATEGORIJOS - ZAIDIMAI
-- USERIAI - ZAIDIMAIOWNED

-- First part of homework
-- Jeigu reikia
-- Sukuriam db
--CREATE DATABASE webGameProject;

-- KATEGORIJOS - ZAIDIMAI
-- USERIAI - ZAIDIMAIOWNED

-- First part of homework
CREATE TABLE Categories(
	categoryID int NOT NULL IDENTITY(1,1),
	categoryName varchar(255) NOT NULL,		-- 1. e)    Not null constraint, lentelės kūrimo metu	1t.
	minimumAge int,
	PRIMARY KEY (categoryID)				-- 1. a)    Trys Primary key (1)
);

CREATE TABLE Games(
	gameID int NOT NULL IDENTITY(1,1),
	gameName varchar(255) NOT NULL,
	releaseOn varchar(255),
	category int NOT NULL,
	recommendedAge int default 0,
	-- Unique identifier, automatically not null
	PRIMARY KEY (gameID),					-- 1. a)    Trys Primary key (2)
	CONSTRAINT FK_category FOREIGN KEY (category) references Categories(categoryID)
);

CREATE TABLE Users(
	userID int NOT NULL IDENTITY(1,1),
	username varchar(255) NOT NULL,
	passwd varchar(255) NOT NULL,
	age int,
	PRIMARY KEY (userID)					-- 1. a)    Trys Primary key (3)
);
ALTER TABLE Users
	ADD CHECK (age > 0);

CREATE TABLE Ownerships(
	gameID int,
	userID int,
	orderDate date DEFAULT GETDATE(),				-- 1. d)    Default constraint
	CONSTRAINT FK_gameID FOREIGN KEY (gameID) references Games(gameID),	-- 1. b)    Du Foreign Key (1)
	CONSTRAINT FK_userID FOREIGN KEY (userID) references Users(userID)	-- 1. b)    Du Foreign Key (2)
);


--2.a 
insert into Categories (categoryName, minimumAge) values ('action', 12);
insert into Categories (categoryName, minimumAge) values ('shooter', 14);
insert into Categories (categoryName, minimumAge) values ('horror', 16);

insert into Games (gameName, releaseOn, category, recommendedAge) values ('Battlefield1', '2016-10-21', 2, 18);
insert into Games (gameName, releaseOn, category, recommendedAge) values ('ResidenEvil7', '2017-01-24', 3, 21);
insert into Games (gameName, releaseOn, category, recommendedAge) values ('FinalFantasyXII', '2009-01-24', 1, 16);
insert into Games (gameName, releaseOn, category, recommendedAge) values ('Call of duty', '2014-01-24', 2, 16);

insert into Users (username, passwd, age) values ('Zaibas', 'zaibiugs123', 28);
insert into Users (username, passwd, age) values ('Pukis', 'kazkoks123', 35);
insert into Users (username, passwd, age) values ('AwesomeMe', 'awsq789', 18);
insert into Users (username, passwd, age) values ('YourBro', 'mance', 24);

insert into Ownerships (gameID, userID) values (1, 1);
insert into Ownerships (gameID, userID) values (2, 1);
insert into Ownerships (gameID, userID) values (2, 2);
insert into Ownerships (gameID, userID) values (4, 2);
insert into Ownerships (gameID, userID) values (2, 3);
insert into Ownerships (gameID, userID) values (3, 3);
insert into Ownerships (gameID, userID) values (1, 4);
insert into Ownerships (gameID, userID) values (3, 4);
insert into Ownerships (gameID, userID) values (4, 4);

--2.b
select * from Games 
where gameName='Battlefield' or recommendedAge=21;

select * from Users 
where username='Zaibas' and age=28;

--2.c
select * from games 
where category in (1,2);

select * from games 
where recommendedAge>=18;

--2.d
--show all the games that the users have
select username, games.gameID, gameName, categoryName
from users 
join ownerships 
on users.userID = ownerships.userID 
join games
on  ownerships.gameID = games.gameID
join categories
on games.category = categories.categoryID
order by users.username;


--3.
--count how many games there are in different categories
select category as categoryID, categoryName, count(gameID) as gameCount
from games
join categories
on games.category = categories.categoryID
group by category, categoryName


--count how many games each user has
select users.userID, username, count(games.gameID) as gamesOwned
from users 
join ownerships 
on users.userID = ownerships.userID 
join games
on  ownerships.gameID = games.gameID
group by users.username, users.userID
order by users.username desc;

--4.
alter table games drop constraint FK_category
alter table ownerships drop constraint FK_gameID
alter table ownerships drop constraint FK_userID

delete from ownerships;
delete from games;
delete from categories;
delete from users;

Drop table games;
Drop table categories;
Drop table ownerships; 
Drop table users;



-- 1. Pateikite skriptą, kuris sukurtų trijų lentelių schemą pasirinkta tema. Kuriant schemą būtų panaudota:
-- 		a)    Trys Primary key	3t. Yra
-- 		b)    Du Foreign Key	2t. Yra
-- 		c)    Check constraint, po lentelės sukūrimo	1t. Yra
--		d)    Default constraint	1t. Yra
-- 		e)    Not null constraint, lentelės kūrimo metu	1t. Primary key taip pat reiškia ne null, bet panaudojau
-- 2. Sukurtai shemai pateikti užklausas:
-- 		a)    Pateikti insert sakinių, pradinių duomenų užpildymui		3t.
-- 		b)    Užklausa su where sąlyga, kuri pademonstruotų AND, OR operatorių naudojimą	2t.
-- 		c)    Užklausą, kuri demonstruotų <> ir IN naudojimą	2t.
-- 		d)    Užklausą, kuri parodytų kaip veikia bet kuri iš join operacijų	2t.
-- 3. Pasidomėti GROUP BY užklausa, pateikti pvz. savo sukurtai schemai.	5t.
-- 4. Pateikti sukurtų duomenų sunaikinimo skriptą.


-- Historically, 
-- 255 characters has often been the maximum length of a VARCHAR in some DBMSes, 
-- and it sometimes still winds up being the effective maximum if you want to use
 -- UTF-8 and have the column indexed (because of index length limitations).