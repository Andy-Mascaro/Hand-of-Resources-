DROP TABLE IF EXISTS planes;
DROP TABLE IF EXISTS foods;
DROP TABLE IF EXISTS seasons;
DROP TABLE IF EXISTS stores;
DROP TABLE IF EXISTS flowers;

CREATE TABLE planes(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    model VARCHAR,
    engine_count INT NOT NULL,
    maker VARCHAR
);

CREATE TABLE foods(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    taste VARCHAR,
    healthy VARCHAR
);

CREATE TABLE seasons (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    temp VARCHAR,
    fun VARCHAR,
    outside VARCHAR
   
);

CREATE TABLE stores (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    product VARCHAR,
    member_ship VARCHAR
    
);

CREATE TABLE flowers (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    color VARCHAR,
    scent VARCHAR
    

);

INSERT INTO planes (
    model,
    engine_count,
    maker
)

VALUES
('Max', 2, 'Boeing'),
('Beluga', 2, 'Airbus'),
('Skyhawk', 1, 'Cessna');

INSERT INTO foods (
    name,
    taste,
    healthy
)

VALUES
('Cotton Candy', 'Sweet', 'Not healthy'),
('Peanuts', 'Salty', 'High protein'),
('Spinach', 'Earthy', 'High in fiber');

INSERT INTO seasons(
    name,
    temp,
    fun,
    outside
   
)

VALUES
('Spring','Warm', 'Baseball', 'Flowers bloom'),
('Summer','Hot', 'Swimming', 'Grass dies'),
('Fall','Cool','Football','Trees drop leaves'),
('Winter','Cold','Skiing','Ground frosts over');

INSERT INTO stores (
    name,
    product,
    member_ship
)

VALUES 
('Albertsons', 'Food', 'No'),
('Old Navy', 'Clothes', 'No'),
('Costco', 'Warehouse', 'Yes');

INSERT INTO flowers (
    name,
    color,
    scent
)

VALUES
('Gardenia', 'White', 'Delicious'),
('Freesia', 'Purple', 'Spring'),
('Hyacinth', 'Pink', 'Sweet');