# 14 Model-View-Controller (MVC): Tech Blog

## Description

The project is a blog website where bloggers are allowed to add, delete their posts, view other posts and comments, add comments and delete comments.
The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Screenshots

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./public/assets/images/techBlog.gif)

## Getting Started

The application’s folder structure follows the Model-View-Controller paradigm.

Following packages have been used:

- [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for the Views
- [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for the Models, and create an Express.js API for the Controllers.

- [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables
- [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords
-
- [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

**Note**: The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to your application other than implement the npm package.

To install the packages:

` npm i sequelize express mysql2 handlebars express-handlebars dotenv bcrypt express-session connect-session-sequelize`
`npm install bcrypt`

## Links

- [Github](https://github.com/vilmaq/tech-blog-mvc)
- [Heroku](https://v-tech-blog-mvc.herokuapp.com)

not able to troubleshoot the problem with heroku JawsDb. Receiving error: 2021-06-23T23:26:44.772711+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/" host=v-tech-blog-mvc.herokuapp.com request_id=855a0e7f-9ac1-4c5a-9bf0-b004202c2fda fwd="88.98.241.250" dyno= connect= service= status=502 bytes= protocol=https

```

```
