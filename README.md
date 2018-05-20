# Helping-Hands

Team Project 2

A full-stack node express web server application that utilizes a MYSQL database and Sequelize as an ORM framework.

## Overview

The application was designed to explore the complex interactions needed to create a product that allows volunteers to find organizations needing help with events. In the application, a user starts at the "Welcome" page and makes a decision to either sign up, login as a volunteer, or login as an organization.

On the signup page the user to register as either a volunteer or as an organization. On submitting the appropriate form, the application checks to see if the user is already registered for the role they have chosen (volunteer or organization) and, if not, registers them into an all Users table, and either a Volunteer or Organization table. These later two tables do not contain user password information but do contain info that will be shared to facilitate connection between volunteers and organizations. Password into is only stored in the Users table.

After registration, the user is directed to login. An earlier version of the app had the users moving to a login page for both Volunteers and Organizations. This is still in use for the Volunteers page. Organizations are directed to login on the Organizations Page directly. This change enables their user information to be accessed through sessionStorage as long as they remain on the open tab in their browser and improves functionality.

On the organization page, after login the user will see a list of events they have created through a dynamically created join table on their page. Their organization name also appears on the page. After login the users can also make a new event, and see who has signed up for events via a through table (Volunteer_Events) in the database that pairs volunteer and event ids (vol_id and event_id). Future functionality will include the ability to update posts and eliminate the "honor system" for seeing volunteers for events (Currently a logged in user can access any event, even if they have no idea what it is.)

The volunteer page currently only displays all events. Future versions of the application will enable users to sign up and remove themselves from events, via manipulation of the join table.

To evaluate the program, the application contains data seeds. It is highly recommended that these be deployed on a local databae to assess the current functionality of the organization page.

## Installation

Upon downloading/cloning the application from this GitHub repository, a potential user will need to install the express, body-parser, path, sequelize, and mysql2 packages as listed in the package.json file. Additional packages that were used in the development of the application were nodemon and the sequelize-cli, but are not necessary for installation. All packages can be obtained at https://www.npmjs.com.

Because the application utilizes sequelize to interact with the MySQL database and because the app contains joined tables, anyone wishing to use the seeds files (recommended for this incomplete application) will need to install the model database in the following order.

1.  Use the "schema.sql" file to create a foundation database in MySQL.
2.  Deploy the seeds file via MySQL.
3.  Finally run the application via the server.js file.

If you enable the helping_handsDB to be created first, MySQL will not allow you to upload seed data for the Events table which contains a Sequelized automatically generated "OrganizationOrgId" as a foreign key to link to the Organization Table.

Users will need to set the config.json and connection.js files to their own specifications.

A deployed version app can be found on Heroku at https://fast-hollows-97257.herokuapp.com/

## Authors

The Helping Hands app presented here was coded by Patrick Kearney, Crystal Hughes, and Steven Bender. The overall design of the project was a joint and perhaps overly ambitious effort. Steven Bender and Patrick worked to get the server running and connected to the database. Crystal Hughes created the schema and seed info for interacting with the database. Patrick worked in the login portion of the project with Crystal Hughes. Patrick also coded the Organization Page and constructed the functions for the multi-table queries in the api-routes. Crystal Hughes performed the testing of the application.

## Built With

* JavaScript and JQuery.
* Node.js for running the server.
* The Express, Express, and Body-parser, and Path packages for simplifying server and client-side interactions.
* MySQL is used to construct the database and hold its information.
* Sequelize for simplifying interactions with the MySQL database (except for the Join Table issue, in which it was a headache).
* Bootstrap 4.1 was used to construct the html pages.
* Font Awesome was used to incorporate some "fun" in the html buttons.
* Google Fonts provided the festive Dancing Script used in the headers and buttons.

## License

This project is licensed under the MIT License.

## Acknowledgments

This application was constructed as part of the University of Kansas Full-Stack Web-Development Coding Bootcamp Program offered in conjunction with Trinity Educational Services. Thanks to these institutions for providing the initial project requirements and examples of code that served as a guide for building the application. Much thanks to Cameron Chapman for his excellent advice on the through table and patient GitHub tutoring. Thanks to Byron Ferguson for his outstanding ability to resolve our general GitHub incompetence.
