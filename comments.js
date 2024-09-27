// create web server with express
const express = require('express');
const app = express();
const port = 3000;

// import the comments data
const comments = require('./data/comments');

// import the posts data
const posts = require('./data/posts');

// import the likes data
const likes = require('./data/likes');

// import the messages data
const messages = require('./data/messages');

// import the users data
const users = require('./data/users');

// import the friends data
const friends = require('./data/friends