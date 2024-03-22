SHARE-A-BITE

This application allows people to connect with others through food.
If your hungry and have no idea what you want to eat, join Share-a-Bite and you’ll scroll to your next meal.

In vscode
-create a models, controllers, and routes folder
	  
-Create a user.js file in models, and a users.js controllers/api, and routes
-models
![Alt text](<Screenshot 2024-03-20 at 10.48.21 PM.png>)
![Alt text](<Screenshot 2024-03-20 at 10.44.23 PM.png>)

-controllers/api
![Alt text](<Screenshot 2024-03-20 at 10.46.01 PM.png>)
![Alt text](<Screenshot 2024-03-20 at 10.46.50 PM.png>)
![Alt text](<Screenshot 2024-03-20 at 10.49.21 PM.png>)

-routes/api
![Alt text](<Screenshot 2024-03-20 at 10.52.44 PM.png>)

-Create a post.js file in models, and a posts.js controllers/api, and routes
-models
![Alt text](<Screenshot 2024-03-20 at 10.56.37 PM.png>)

-controllers/api
![Alt text](<Screenshot 2024-03-20 at 10.57.42 PM.png>)
![Alt text](<Screenshot 2024-03-20 at 10.58.56 PM.png>)
![Alt text](<Screenshot 2024-03-20 at 11.00.27 PM.png>)
![Alt text](<Screenshot 2024-03-20 at 11.01.17 PM.png>)
![Alt text](<Screenshot 2024-03-20 at 11.02.31 PM.png>)

-routes/api
![Alt text](<Screenshot 2024-03-20 at 10.55.48 PM.png>)

-Create a comment.js file in models, and a comments.js controllers/api, and routes
-model
![Alt text](<Screenshot 2024-03-20 at 11.04.24 PM.png>)

-controllers/api
![Alt text](<Screenshot 2024-03-20 at 11.14.52 PM.png>)
![Alt text](<Screenshot 2024-03-20 at 11.15.50 PM.png>)
![Alt text](<Screenshot 2024-03-20 at 11.16.49 PM.png>)
![Alt text](<Screenshot 2024-03-20 at 11.19.04 PM.png>)

-routes/api
![Alt text](<Screenshot 2024-03-20 at 11.20.44 PM.png>)

-Create a restaurant.js file in models, and a restaurants.js controllers/api, and routes
-models
![Alt text](<Screenshot 2024-03-20 at 11.22.19 PM.png>)

-controllers/api
![Alt text](<Screenshot 2024-03-20 at 11.24.12 PM.png>)
![Alt text](<Screenshot 2024-03-20 at 11.24.52 PM.png>)

-routes/api
![Alt text](<Screenshot 2024-03-20 at 11.25.59 PM.png>)

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