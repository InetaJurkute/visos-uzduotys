-- Jeigu reikia
-- Sukuriam db
--CREATE DATABASE webGameProject;

-- KATEGORIJOS - ZAIDIMAI
-- USERIAI - ZAIDIMAIOWNED

-- First part of homework
CREATE TABLE Categories(
	categoryID int,
	categoryName varchar(255) NOT NULL,		-- 1. e)    Not null constraint, lentelės kūrimo metu	1t.
	minimumAge int,
	PRIMARY KEY (categoryID)				-- 1. a)    Trys Primary key (1)
);

CREATE TABLE Games(
	gameID int,
	gameName varchar(255) NOT NULL,
	releaseOn varchar(255),
	category varchar(255) NOT NULL,
	recommendedAge int default 0,
	-- Unique identifier, automatically not null
	PRIMARY KEY (gameID)					-- 1. a)    Trys Primary key (2)
);

CREATE TABLE Users(
	userID int,
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
	FOREIGN KEY (gameID) references Games(gameID),	-- 1. b)    Du Foreign Key (1)
	FOREIGN KEY (userID) references Users(userID)	-- 1. b)    Du Foreign Key (2)
);

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