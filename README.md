# MineEstate README

## Video Walkthrough

https://youtu.be/upk1d2a8MD8

## Tools Used

Ruby on Rails, SQLite, JavaScript

## Features

User can sign in or sign up
User can post their house description and delete it 

## Overview

This project was focused on learning javaScript and using it to manipulate the DOM while following the languages best practices

## Installation

Fork and clone repo

    $ git clone https://github.com/superHotStuff/MineEstate
    

Using two terminals, switch to each respective directory

    $ cd frontend
    $ cd backend
  

Backend terminal instructions: 

    $ bundle install
    $ rails db:migrate
    $ rails db:seed
    $ rails s

Frontend terminal instructions:
    use a web browser to open the following html file. For example:
    
    $ firefox houses/index.html

## Usage

User will have to sign up or log in to fully interact with website.  
Once logged in, user can create a house and delete it as long as it belongs to them

## Challenge

Most challenging aspect of this project was creating a fake user authentication due using rails as an api and time constraints. Also, finding a use case for javascript class in this project was a rather difficult addition

## Future Implementations

 UI overhaul
 Storage for pictures using Rails blob

## Contributing

This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

