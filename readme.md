# Project 2

## Buckets

#### By Max Said

## Project Summary

I am building an app that allows a user to add/edit new tasks to check off of their bucket list. It could be travel related, sports, a class a user always wanted to take, anything. User will be able to specify what their bucket-list is and add a description to it. I want this app to be similar to the notes app but slightly better, and instead of writing long notes, a user gets to write short entries under categories.

## Models

connection - to keep the database connection in one place

list.js - keeps track of model, schema

Model: BucketList

- title: { type: String, required: true },
- type: { type: String, required: true },
- location: { type: String, required: false },
- description: String,
- check: Boolean,
- username: String,

## Route Table

List your routes in a table

| name    | url             | method | action                             |
| ------- | --------------- | ------ | ---------------------------------- |
| index   | /lists          | get    | list all entries (index)           |
| show    | /lists/:id      | get    | get a particular entry (show)      |
| new     | /lists/new      | get    | form to add a new entry(new)       |
| create  | /lists          | post   | add new entry to database(create)  |
| edit    | /lists/:id/edit | get    | show edit form of one entry (edit) |
| update  | /lists/:id      | put    | update a particular entry (update) |
| destroy | /lists/:id      | delete | delete a particular entry (delete) |

## User Stories

- user can signup/login
- user can create their own bucket list entry
- user can click on the name of their entry to the show page of that entry
- user can edit/delete an entry on the show page
- user can go back to the index page to view all entries
- user can go back to home page by clicking the logo

## Challenges

- making the website responsive
- adding the right images to the carousel
- user being able to add their own images (images weren't showing up)

## List of Technologies

- "bcryptjs": "^2.4.3",
- "connect-mongo": "^4.6.0",
- "dotenv": "^10.0.0",
- "express": "^4.17.1",
- "express-session": "^1.17.2",
- "liquid-express-views": "^1.0.8",
- "method-override": "^3.0.0",
- "mongoose": "^6.0.12",
- "morgan": "^1.10.0"
