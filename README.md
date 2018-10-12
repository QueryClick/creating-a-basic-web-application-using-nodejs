# CREATING A BASIC WEB APPLICATION USING NODE.JS
This code is from a WBF presentation at QueryClick.

**Note:** For anyone outside QueryClick coming across this. Feel free to use this software! The application was built in around 20 minutes so it isn't very good... But hey, if you want to improve it, submit a PR!

## Installation
1. Install Node.js - https://nodejs.org/en/download/
2. With your CLI, CD to where you want the application to be saved from git.
3. Clone the repository using your CLI `git clone https://github.com/QueryClick/creating-a-basic-web-application-using-nodejs.git`
4. Install packages `npm i`

### Have no clue how to use git and a CLI? 
All good. Ask us Devs how to use git! For now, here's a zip:
https://github.com/QueryClick/creating-a-basic-web-application-using-nodejs/archive/master.zip
## Running the application
1. CD to your applications directory
2. Within the parent directory run `npm start` or `node index.js` to start the application.

**Note:** Anytime you make a change to the source code, you will have to stop the server and start it again. If you install [nodemon](https://github.com/remy/nodemon), you can run `nodemon index.js` and it will watch for changes and automatically reload the server!

## Application Structure

### index.js
This is our main file and is used for setting up our Express server. This is also the file that we call to start the server. What happens in this file:   
* We require ExpressJS
* We define what port we want the server to run on
* We listen on that port
* We have middleware functions to load:
    * Static files (CSS, JavaScript etc.) by defining where to load them from
    * Body Parser module to be able to get `req.body` of data sent across a POST a request.
    * Allow our router to be loaded.

### routes.js
This file is used to create our routes of our web application. What happens in this file:
* We include Express's Router (see https://expressjs.com/en/guide/routing.html#express-router)
* We add all of our routes we want
* We export the router object so that it can be used as middleware within `index.js`

### Public Directory
This file includes our static resources. We reference this directory from `index.js` as the static middleware.

## Questions?
I welcome any questions you have on this presentation and general code related questions!  
Got questions? email me:
aaron@queryclick.com

## Want to contribute to this repo?
You can fork the repo. This will allow you to mess around with the code without worrying if you're breaking things!

lean more about forks here: https://help.github.com/articles/fork-a-repo     

Once you are happy with your code, submit a Pull Request (PR)!
Lean more about PR's here: https://help.github.com/articles/about-pull-requests

## Resources
Resources:
We have a ton of books that you could read. My favourite series we have is 'You don't know JS'. Even better, it's totally free and open source on GitHub! Link: https://github.com/getify/You-Dont-Know-JS

YouTube channels I would recommend:
JavaScript Tutorial for Beginners - https://www.youtube.com/watch?v=W6NZfCO5SIk 
JavaScript Fundamentals For Beginners - https://youtu.be/vEROU2XtPR8
Code! Programming for Beginners with p5.js -h ttps://youtu.be/yPWkPOfnGsw
 
Node.js:
Download: https://nodejs.org/en/
Documentation: https://nodejs.org/en/docs/

Learning general JavaScript:
https://javascript.info/
https://developer.mozilla.org/bm/docs/Web/JavaScript

ExpressJS:
https://expressjs.com/

If you want to know specific things, I can find resources for you and send them across.

