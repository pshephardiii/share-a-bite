# SHARE-A-BITE

## Description:

This is a full-stack MERN application that is built to allow people to connect with others through the love of food.
 Once you signup you can post, rate, and commit on a picture. If your hungry and have no idea what you want to eat, join Share-a-Bite and you’ll scroll to your next meal.

## Live Project Link:

## App Installation Instructions:

To install the Application in your:
-You need a mongodb link to put in the .env file. Sign up on Mongodb.com
-You need a secret hash to put in the .env file. You can get that on https://emn178.github.io/online-tools/sha256.html 

	In your terminal you want to put:
		-npm i
		-npm run dev

## Trello Board:

Trello board link (includes user stories):
https://trello.com/b/scJATDml 

## Entity Relationship Diagram:

![Entity Attributions Diagram](https://i.imgur.com/zTSYJeE.png)

## Backend Structure - Routes

### User Routes

![User Routes](https://i.imgur.com/ezGh8uO.png)

### Post Routes

![Post Routes](https://i.imgur.com/h6yeqRb.png)

### Comment Routes

![Comment Routes](https://i.imgur.com/Mu6MCvs.png)

### Restaurant Routes

![Restaurant Routes](https://i.imgur.com/6W0qdze.png)

## Future Enhancements

+ Include a restaurant show page where users can get detailed information about a restaurant and add/delete it from their favorite restaurants list.

+ Adjust functionality for adding a contact so that one user sends a request to another that must be accepted before they become contacts.

+ Absord third-party API to acquire information about restaurants, including location, menu, and website.

+ Change the home page into a "feed" that algorithmically determines what content is prioritized for a user based on their restaurant and dish preferences, contacts, past posts, etc.