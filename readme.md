# Project 2

## Bucket List App

#### By Max Said

## Project Summary

I am building an app that allows a user to add/edit new tasks to check off of their bucket list. It could be travel related, sports, a class a user always wanted to take, anything. User will be able to specify what their bucket-list is and add a description to it. I want this app to be similar to the notes app but slightly better, and instead of writing long notes, a user gets to write short entries under categories.

## Models

connection - to keep the database connection in one place

item.js - keeps track of model, schema

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

## Challenges

- detail roadblocks and anything you did to overcome whether you did or didn't

## List of Technologies

- connect-mongo
- dotenv
- express
- express session
- liquid-express-views
- method-override
- mongoose
- morgan
