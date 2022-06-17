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
    spring VARCHAR,
    summer VARCHAR,
    fall VARCHAR,
    winter VARCHAR
);

CREATE TABLE stores (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    grocery VARCHAR,
    clothes VARCHAR,
    sports VARCHAR
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
('Peanuts', 'Salty', 'High protien'),
('Spinach', 'Earthy', 'High in fiber');

INSERT INTO seasons(
    spring,
    summer,
    fall,
    winter
)

VALUES
('Warm', 'Hot', 'Cool','Cold'),
('Baseball', 'Swimming', 'Football', 'Skiing'),
('Flowers Bloom', 'Grass dies', 'Trees drop leaves', 'Ground frosts over');

INSERT INTO stores (
    grocery,
    clothes,
    sports
)

VALUES 
('Albertsons', 'Kohls', 'Big Five'),
('Safeway', 'Old Navy', 'Play it again sports'),
('Fred Meyers', 'Target', 'GI Joes');

INSERT INTO flowers (
    name,
    color,
    scent
)

VALUES
('Gardenia', 'White', 'Delicious'),
('Freesia', 'Purple', 'Spring'),
('Hyacinth', 'Pink', 'Sweet');