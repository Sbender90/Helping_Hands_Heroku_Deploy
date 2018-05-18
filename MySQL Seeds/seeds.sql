INSERT INTO volunteers
    (first_name, last_name, phone_num, email, createdAt, updatedAt)
VALUES
    ("Tom", "Franklin", "913-555-2345", "tfranklin@hey.com", '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    ("Kalie", "Smith", "816-555-5432", "ksmith@hey.com", '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    ("Pat", "Simms", "913-555-2233", "psimms@hey.com", '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    ("James", "White", "816-555-9876", "jwhite@hey.com", '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    ("Sam", "Resende", "913-555-7643", "sresende@hey.com", '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    ("Sonia", "Johnson", "913-555-1198", "sjohnson@hey.com", '2018-05-15 00:00:00', '2018-05-15 00:00:00');
INSERT INTO organizations
    (organizer, email, phone_num, createdAt, updatedAt)
VALUES
    ("South Baptist Church", "sbc@church.org", "816-326-7643", '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    ("Westend Ministry", "west@church.org", "816-235-1845", '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    ("North High School", "nhs@dist.edu", "913-445-8365", '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    ("Blue Cross", "bchelpers@help.org", "913-234-9264", '2018-05-15 00:00:00', '2018-05-15 00:00:00');
INSERT INTO users
    (email, password, hh_role, createdAt, updatedAt)
Values
    ("tfranklin@hey.com", "h3llofr@nk", "volunteer", '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    ("ksmith@hey.com", "1mK@tieS00", "volunteer", '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    ("psimms@hey.com", "p@t1sHere12", "volunteer", '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    ("jwhite@hey.com", "H3lp3rJ@mes", "volunteer", '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    ("sresende@hey.com", "S@miAm01", "volunteer", '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    ("sjohnson@hey.com", "J0hn$0n#!", "volunteer", '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    ("sbc@church.org", "SBC!@#123", "organization", '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    ("west@church.org", "Min1sry*$", "organization", '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    ("nhs@dist.edu", "NHS@#$dist", "organization", '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    ("bchelpers@help.org", "blu3Cr0$$001", "organization", '2018-05-15 00:00:00', '2018-05-15 00:00:00');
INSERT INTO events
    (event_name, event_desc, event_loc, event_date, event_time, createdAt, updatedAt, OrganizationOrgId)
VALUES
    ("Gardening", "Need help picking weeds out of our community garden.  Please
understand it will be hot outside and to bring sunscreen.  Thank you for your help", "South Babtist Church", "2018-05-31", "12:00", '2018-05-15 00:00:00', '2018-05-15 00:00:00', 1);
INSERT INTO events
    (event_name, event_desc, event_loc, event_date, event_time, createdAt, updatedAt, OrganizationOrgId)
VALUES
    ("Car Wash", "Need some volunteers for our fundraiser car wash.  Please
understand it will be hot outside and to bring sunscreen.  Thank you for your help", "North High School", "2018-05-27", "12:00", '2018-05-15 00:00:00', '2018-05-15 00:00:00', 3);
INSERT INTO events
    (event_name, event_desc, event_loc, event_date, event_time, createdAt, updatedAt, OrganizationOrgId)
VALUES
    ("Filing", "We are remodeling and would love some volunteers to help us organize and file!  Thank you for your help!", "Blue Cross", "2018-05-17", "12:00", '2018-05-15 00:00:00', '2018-05-15 00:00:00', 4);
INSERT INTO volunteer_events
    (vol_id, event_id, createdAt, updatedAt)
VALUES
    (1, 1, '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    (2, 1, '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    (3, 1, '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    (1, 2, '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    (2, 2, '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    (3, 2, '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    (4, 1, '2018-05-15 00:00:00', '2018-05-15 00:00:00'),
    (4, 2, '2018-05-15 00:00:00', '2018-05-15 00:00:00')