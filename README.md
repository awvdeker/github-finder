Github finder
=============

site is published at :

https://awvdeker.github.io/github-finder/

Group project: Alexander and Pablo

- main index.html file for the basic structure and an input field to search
for usernames of github

- we used Bootstrap => https://bootswatch.com theme, everything in bootstrap.css

- github.js: 2 github api calls, one to the user and the other one the first 5
most recent repos of that user

- ui.js: 2 functions each to build the html structure for the profile and list
of 5 repos

- app.js: the main javascript file, here we call the async fetch functions (from
github.js) and we call the functions from ui.js
