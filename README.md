# SHARE-A-BITE

## Description:

This is a full-stack MERN application that is built to allow people to connect with others through the love of food.
 Once you signup you can post, rate, and commit on a picture. If your hungry and have no idea what you want to eat, join Share-a-Bite and you’ll scroll to your next meal.

## Live Project Link:

## Pitch Deck Link:

https://docs.google.com/presentation/d/13j-zx0Jf3Pzl8wfHLIPeSPVK7gMc00tSAgcTqPPEvu8/edit?usp=sharing

## App Installation Instructions:

To install the Application in your machine:

- You need a mongodb link to put in the .env file. Sign up on Mongodb.com

- You need a secret hash to put in the .env file. You can get that on https://emn178.github.io/online-tools/sha256.html 

- Install necessary dependencies with:
	+ npm i

- Run application in development mode:
	+ npm run dev
	
- If you'd like to deploy the seeded-in data entities, which include users, posts, and restaurants, run:
	+ npm run seed

## Trello Board:

Trello board link (includes user stories):
https://trello.com/b/scJATDml 

## Entity Relationship Diagram:

![Entity Attributions Diagram](https://i.imgur.com/zTSYJeE.png)

## Backend Structure - Routes:

### User Routes

![User Routes](https://i.imgur.com/ezGh8uO.png)

### Post Routes

![Post Routes](https://i.imgur.com/h6yeqRb.png)

### Comment Routes

![Comment Routes](https://i.imgur.com/Mu6MCvs.png)

### Restaurant Routes

![Restaurant Routes](https://i.imgur.com/6W0qdze.png)

## Screenshots of Site:

### Landing/Authentication Page:

![Landing Page](https://i.imgur.com/loYVmK1.png)

### Home Page (After Login):

![Home Page](https://i.imgur.com/iD3QkEf.png)

## Future Enhancements:

+ Include a restaurant show page where users can get detailed information about a restaurant and add/delete it from their favorite restaurants list.

+ Adjust functionality for adding a contact so that one user sends a request to another that must be accepted before they become contacts.

+ Absord third-party API to acquire information about restaurants, including location, menu, and website.

+ Change the home page into a "feed" that algorithmically determines what content is prioritized for a user based on their restaurant and dish preferences, contacts, past posts, etc.

+ Adjust search functionality so that users can find restaurants and access their show pages.

+ Add functionality to allow users to edit the posts and comments that they've created.

+ Add functionality to allow users to delete their posts, comments, and profiles.