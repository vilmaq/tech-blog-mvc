# Help for the Homework 14

## A mixture of hints, and guidance:

We're building a Tech-Blog. This isn't going to be an easy feat as it's combining everything that we've done so far.

We've got the following packages to use:

- express-handlebars (for our different views and components)
- mysql2 & sequelize (for our database and ORM)
- connect-session-sequelize (add authentication for our api)
- nodemon (for running in dev)
- express-session (stores our session data in a cookie)
- dotenv (so that we can use environment variables)
- bcrypt (to hash our password properly)
- nodemon (api live server for deving)
- cors (cause cors sucks)

We've got the following functionality to get in:

- VIEW homepage (blog post lists)
- VIEW login page
- VIEW sign up page
- VIEW dashboard
- VIEW blog post
  - VIEW comments
- POST a comment on a blog post
- UPDATE (edit) a blog post
- DELETE a blog post

There's also other UI behaviours inside of the Acceptance Criteria to be aware of.

---

We're going to need a plan of attack here.

1. Model the data for the blog.
2. Plan the Views and the data required.
3. Create the scaffolding for node/mysql/sequelize
4. Create the models in sequelize
5. Define the model relationships
6. Create some seed data to populate the database - perhaps a script and some .json files.
7. Create the views in full handlebars files
8. Implement controllers for the api side of this app, e.g. CRUD operations for each model
9. Your api should work at this point for all CRUD operations on the models.
10. Implement controllers for the web side of this app, e.g. serving the login page
11. Your frontend should now be viewable when you manually go to each route.
    - You don't necessarily need route protections for authentication at this point
12. Implement the client side javascript in the frontend to call the relevant api endpoints.
13. Your application should now work front to back - where your frontend calls the api, and the api performs the necessary CRUD operations
14. You could now separate the views into handlebars partials and layouts
15. Check your application against the acceptance criteria.

---

**THIS HOMEWORK REQUIRES A WORKING DEPLOYMENT ON HEROKU AND A DATABASE HOSTED USING JAWSDB**

It doesn't matter if your app works locally when you run it - if it doesn't work when it's deployed then it will be marked as a failure.

In order to do this everything you need is in this document:
https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql

---

We'll take the reccommended file structure a little further:

```
public/
	css/
		style.css
		// Other CSS files if you want it?
	js/
		script.js
		// Maybe others?
src/
	config/
		config.js
	controllers/
		api/
			user/
				index.js
			// Other api specific controllers
		html/
			home/
				index.js
		// Other non-api user facing controllers.
	db/
		schema.sql
		seed.js
		// Other .json seed data files?
	models/
		User.js
		index.js
		// Other models required
	routes/
		api/
			user/
				index.js
			index.js // api router
			// Other api specific routers
		html/
			home/
				index.js
			index.js // html router
		// Other non-api user facing routers.	utils/
		// If you have any common utilities?
	views/
		layouts/
			main.handlebars
			// Maybe more?
		partials/
			// Any components?
		login.handlebars
		// Other page
	index.js
.env
.gitignore
package-lock.json
package.json
```

You should make use of Week 14's recordings and solutions for this homework as the functionality will help you out massively not just in where to start but how to levy functionality we've done in class.

### Specific things for Homework 10:

1. You MUST submit a deployed application
2. Your blog MUST allow users to sign up and log in
3. Your blog MUST allow a user to:
   - Navigate to the Homepage for all users
   - Navigate to the Dashboard for a Logged in user
   - Navigate to the Login Page
   - The Dashboard MUST redirect the user to the login page if they aren't logged in.
4. Application MUST display all existing blog posts on the Homepage which includes:
   - Post Title, Contents, Author's username, Date created.
5. Application MUST display all the user's existing blog posts on the Dashboard page.
6. The Dashboard MUST have the optiont o create new blog posts, including title and content.
   - The Homepage / Dashboard should update to reflect the new post.
7. Application Dashboard MUST allow users to click into their blog posts and either update or delete them.
8. Application MUST allow users to click on existing blog posts on the Homepage and see:
   - Post Title, Contents, Author's username, Date created and any existing comments.
   - Each comment MUST show:
     - The comment, comment creator's username, date it was created.
9. Application allows logged in users to leave a comment on a post they click on. The blog post MUST update to include that comment.
10. Application navigation bar includes a link for the user to log out.
    - The user MUST be logged out automatically when they are idle on the site for more than a set time.
