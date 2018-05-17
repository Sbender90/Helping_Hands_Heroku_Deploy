-- DROP TABLE Volunteers;
-- DROP TABLE volunteers;
CREATE TABLE Volunteers
(
  id INT NOT NULL
  AUTO_INCREMENT,
  first_name VARCHAR
  (45) NOT NULL,
  last_name VARCHAR
  (45) NOT NULL,
  phone_num VARCHAR
  (22) NOT NULL,
  email VARCHAR
  (50) NOT NULL,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  PRIMARY KEY
  (id)
);

-- DROP TABLE Organizations;
-- DROP TABLE organizations;
  CREATE TABLE Organizations
  (
    id INT NOT NULL
    AUTO_INCREMENT,
  organizer VARCHAR
    (255) NOT NULL,
  email VARCHAR
    (50) NOT NULL,
  phone_num VARCHAR
    (22) NOT NULL,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  PRIMARY KEY
    (id)
);

-- DROP TABLE Events;
-- DROP TABLE events;
    CREATE TABLE Events
    (
      id INT NOT NULL
      AUTO_INCREMENT,
  event_name VARCHAR
      (255) NOT NULL,
  event_desc VARCHAR
      (1000) NOT NULL,
  event_loc VARCHAR
      (1000) NOT NULL,
  event_date DATE NOT NULL,
  event_time TIME NOT NULL,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  PRIMARY KEY
      (id)
);

-- DROP TABLE Volunteer_Events;
-- DROP TABLE volunteer_events;
      CREATE TABLE Volunteer_Events
      (
        id INT NOT NULL
        AUTO_INCREMENT,
  vol_id INT NOT NULL,
  event_id INT NOT NULL,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  PRIMARY KEY
        (id)
);

-- DROP TABLE Users;
-- DROP TABLE users;
        CREATE TABLE Users
        (
          id INT NOT NULL
          AUTO_INCREMENT,
  email VARCHAR
          (50) NOT NULL,
  password VARCHAR
          (50) NOT NULL, 
  hh_role VARCHAR
          (50) NOT NULL,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  PRIMARY KEY
          (id)
);
