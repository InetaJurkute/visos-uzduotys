-- Sukuriam db
CREATE DATABASE webGameProject;

-- KATEGORIJOS - ZAIDIMAI
-- USERIAI - ZAIDIMAIOWNED

-- Categories
CREATE TABLE Categories(
	cateogryID int,
	categoryName varchar(255) not null,
	minimumAge int,
	PRIMARY KEY (categoryID);
);
-- Sukuriam lentelę
CREATE TABLE Games(
	gameID int,
	gameName varchar(255) NOT NULL,
	releaseOn varchar(255),
	category varchar(255),
	-- Unique identifier, automatically not null
	PRIMARY KEY (gameID)
);
-- People of our website
CREATE TABLE Users(
	userID int,
	username varchar(255),
	passwd varchar(255),
	age int,
	PRIMARY KEY (userID)
);
-- Games that certain users own
CREATE TABLE Ownerships(
	gameID int,
	userID int
);

-- 1. Pateikite skriptą, kuris sukurtų trijų lentelių schemą pasirinkta tema. Kuriant schemą būtų panaudota:
-- 		a)    Trys Primary key                                                                                                                                        3t.
-- 		b)    Du Foreign Key                                                                                                                                                    2t.
-- 		c)    Check constraint, po lentelės sukūrimo                                                                                                        1t.
--		d)    Default constraint                                                                                                                                       1t.
-- 		e)    Not null constraint, lentelės kūrimo metu                                                                                                      1t.
-- 2. Sukurtai shemai pateikti užklausas:
-- 		a)    Pateikti insert sakinių, pradinių duomenų užpildymui                                                                                    3t.
-- 		b)    Užklausa su where sąlyga, kuri pademonstruotų AND, OR operatorių naudojimą                     2t.
-- 		c)     Užklausą, kuri demonstruotų <> ir IN naudojimą                                                                     2t.
-- 		d)    Užklausą, kuri parodytų kaip veikia bet kuri iš join operacijų                                                    2t.
-- 3. Pasidomėti GROUP BY užklausa, pateikti pvz. savo sukurtai schemai.                       5t.
-- 4. Pateikti sukurtų duomenų sunaikinimo skriptą.


-- Historically, 
-- 255 characters has often been the maximum length of a VARCHAR in some DBMSes, 
-- and it sometimes still winds up being the effective maximum if you want to use
 -- UTF-8 and have the column indexed (because of index length limitations).