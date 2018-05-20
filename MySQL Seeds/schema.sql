DROP DATABASE IF EXISTS helping_handsDB;
CREATE DATABASE helping_handsDB;
USE helping_handsDB;
CREATE TABLE volunteers
(
  vol_id INT NOT NULL
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
  (vol_id)
);
  CREATE TABLE organizations
  (
    org_id INT NOT NULL
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
    (org_id)
);
    CREATE TABLE events
    (
      event_id INT NOT NULL
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
  OrganizationOrgId INTEGER NOT NULL,
  PRIMARY KEY
      (event_id)
);
      CREATE TABLE volunteer_events
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
        CREATE TABLE users
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
