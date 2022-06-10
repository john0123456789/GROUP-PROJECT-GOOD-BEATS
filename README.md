# goodbeats

goodbeats is a full-stack clone of goodreads. On goodbeats users can view a list of music albums from our data base, select and get info on specific albums, as well as create libraries and add albums to them. Each music album can be reviewed and rated.

# Live Site Demo
[DEMO LINK](https://group-project-good-beats.herokuapp.com/users/login)

# Wiki Docs
[API DOCUMENTATION](https://github.com/john0123456789/GROUP-PROJECT-GOOD-BEATS/wiki/API-DOCUMENTATION)

[FRONTEND ROUTES](https://github.com/john0123456789/GROUP-PROJECT-GOOD-BEATS/wiki/Frontend-Routes)

[MVP FEATURE LIST](https://github.com/john0123456789/GROUP-PROJECT-GOOD-BEATS/wiki/MVP-FEATURE-LIST)

[DATABASE SCHEMA](https://github.com/john0123456789/GROUP-PROJECT-GOOD-BEATS/wiki/Schema)

[USER STORIES](https://github.com/john0123456789/GROUP-PROJECT-GOOD-BEATS/wiki/User-Stories)

# Technologies Used
* Frontend: PUG, CSS, HTML, and DOM
* Backend: JAVASCRIPT, EXPRESS, Sequelize, PostgreSQL
* Heroku (website hosting)

# Features
* Full User Authenticiation for sign up, login, and logout with security.
* Full Website Access for demo user to login and test out features.
* Logged in users have ability to create libraries.
* Logged in users have ability to add albums to created libraries.
* Logged in users have ability to review and rate albums as well as read reviews from other users on that album.

# Challenges
* We ran into some walls when it came to making our 2 main features (reviews and libraries) with full CRUD features. Especially on the UPDATE feature. It took us the longest to get the edit button to work, our initial problem was being able to key into content on our original form and saving it onto the edit form. And on our DELETE feature for libraries, because we were using a join table to acesss albums and libraries we ran into an issue where we couldn't grab the join table data by an id that is associated with both the album and library id, as a solution we had to key into both library and album id to grab the associated library . Together as a group we were able to overcome the coding challenges this project presented to us.

# Code snippets
![image](https://user-images.githubusercontent.com/8033523/173161534-6ac6c175-5533-4adf-bd30-74f1e12cadc6.png)
* LINES 2-5: We used a for loop to grab all the delete buttons associated with our libraries. 
* LINES 5-6: And then added a 'click' event listener to all the delete buttons that were iterated through. 
* LINES 8-9: We then assigned a value to albumId so that we could grab the associated id's in our pug file. 
* LINES 10-13: After everything is said and done the event listener removes the associated album(s) in our library and  deletes it dynamically, so the user doesn't get redirected or have to reload the page.

![image](https://user-images.githubusercontent.com/8033523/173162328-480c3d2f-1fbf-4197-9bc4-845dbd5785c3.png)
* Here we have a route handler associated with our eventListener from above.
* LINE 8: This is our route for deleting targeted album in a specific library.
* LINES 9-11: Because we used a JOIN TABLE on albumLibrary we had to use `.findOne` and key in on the targeted `albumId` that has a targeted `libraryId`.
* LINE 12: Once found the specified album will be deleted from desired library.


