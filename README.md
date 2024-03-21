SHARE-A-BITE

This application allows people to connect with others through food.
If your hungry and have no idea what you want to eat, join Share-a-Bite and you’ll scroll to your next meal.

In vscode
-create a models, controllers, and routes folder
	  
-Create a user.js file in models, and a users.js controllers/api, and routes
-models
![userModelP1](<Screenshot 2024-03-20 at 7.48.01 PM.png>)
![userModelP2](<Screenshot 2024-03-20 at 7.50.31 PM.png>)

-controllers/api
![usersControllersP1](<Screenshot 2024-03-20 at 7.55.18 PM.png>)
![usersControllersP2](<Screenshot 2024-03-20 at 7.56.07 PM.png>)
![usersControllersP3](<Screenshot 2024-03-20 at 7.56.59 PM.png>)

-routes/api
![usersRoutes](<Screenshot 2024-03-20 at 8.07.50 PM.png>)

-Create a post.js file in models, and a posts.js controllers/api, and routes
-models
![postModel](<Screenshot 2024-03-20 at 7.52.28 PM.png>)

-controllers/api
![postsControllerP1](<Screenshot 2024-03-20 at 7.58.21 PM.png>)
![postsControllerP2](<Screenshot 2024-03-20 at 7.59.07 PM.png>)
![postsControllerP3](<Screenshot 2024-03-20 at 7.59.30 PM.png>)
![postsControllerP4](<Screenshot 2024-03-20 at 8.00.16 PM.png>)
![postsControllerP5](<Screenshot 2024-03-20 at 8.00.44 PM.png>)

-routes/api
![postsRoutes](<Screenshot 2024-03-20 at 8.09.16 PM.png>)

-Create a comment.js file in models, and a comments.js controllers/api, and routes
-model
![commentModel](<Screenshot 2024-03-20 at 7.53.25 PM.png>)

-controllers/api
![commentsControllersP1](<Screenshot 2024-03-20 at 8.02.08 PM.png>)
![commentsControllersP2](<Screenshot 2024-03-20 at 8.02.33 PM.png>)
![commentsControllersP3](<Screenshot 2024-03-20 at 8.03.00 PM.png>)
![commentsControllersP4](<Screenshot 2024-03-20 at 8.03.24 PM.png>)

-routes/api
![commentsRoutes](<Screenshot 2024-03-20 at 8.10.24 PM.png>)

-Create a restaurant.js file in models, and a restaurants.js controllers/api, and routes
-models
![restaurantModels](<Screenshot 2024-03-20 at 7.53.56 PM.png>)

-controllers/api
![restaurantsControllersP1](<Screenshot 2024-03-20 at 8.05.14 PM.png>)
![restaurantsControllersP1](<Screenshot 2024-03-20 at 8.05.39 PM.png>)

-routes/api
![restaurantsRoutes](<Screenshot 2024-03-20 at 8.11.33 PM.png>)

-Create pages folder. In this folder:
	-create HomePage folder
		-create HomePage.js file
		-create HomePage.module.scss file
	-create LandingPage folder
		-create LandingPage.js
		-create LandingPage.module.scss
	-create PostCreatePage folder
		-create PostCreatePage.js File
		-create PostCreatePage.module.scss file
	-create SearchPage folder
		-create SearchPage.js File
		-create SearchPage.module.scss file
	-create UserShowPage folder
		-create UserShowPage.js File
		-create UserShowPage.module.scss file


## Steps


**Start the dev server**
```bash
npm run dev
```
### or
```bash
yarn dev
```

**Build files for production**
```bash
yarn build
```
### or

```bash
npm run build
```

**Deploy for production script**
```bash
npm start
```
### or
```bash
yarn start
```


This starter kit uses Gulp, Webpack, Browsersync, Nodemon and Babel to create a unified development environment with hot reloading and automatically building files to disk. It uses the concept of `Train How You Fight, Fight Like You Train`. Instead of building files in memory in dev mode, this starter kit builds your files directly to the public folder and statically serves the public folder. This means that the public folder is serving your site just like it would in production and this meant to be a simple full stack react starter kit that any learner can build upon.