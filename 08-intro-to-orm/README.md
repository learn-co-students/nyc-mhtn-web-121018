# Intro to ORMs (Object Relational Mappers)

## SWBATs

* Understand the need to being organizing your code
* Define Object Relational Mapper (ORM)
* Distinguish between ORM and SQL
* Demonstrate that ORMs are the pattern connecting scripting languages and databases
* Explain how the `sqlite` gem works as a driver or wrapper around SQL
* Implement HEREDOCs to be saved in variables to be executed by SQL driver
* Perform persistent CRUD actions on two separate models

## Lecture Notes

1. Books and Authors where each book has a single author. Books should have a title

  - one-to-many relationship

  models == class == table

  (foreign key) author_id

  books
  id (isbn) | title            | genre       | author_id
  1         | "The Pilgrim"    | "Thriller"  | 4
  2         | "Harry Potter"   | "Fantasy"   | 3
  3         | "Harry Potter 2" | "Fantasy"   | 3

  authors
  id | name
  1  | "John Doe"
  2  | "John Doe"
  3  | "JK Rowling"
  4  | "Terry Hayes"


  Q: Write the SQL to find all books written by a certain author given that author's id (name)

  a1.books

  ```SQL
  SELECT books.title, books.genre
  FROM books
  JOIN authors
  ON books.author_id = authors.id
  WHERE authors.name = "JK Rowling";
  ```

2. Books and Authors where each book can have one or MULTIPLE authors. Books should have a title and authors should have a name.

  - What type of relationship is this?
    - many-to-many

    books
    id (isbn) | title            | genre      
    1         | "The Pilgrim"    | "Thriller"
    2         | "Harry Potter"   | "Fantasy"  
    3         | "Harry Potter 2" | "Fantasy"  

    JOIN TABLE => a table to JOIN two other tables
    book_authors => this represents the relationship between books and authors
    id | author_id | book_id
    1  | 4         | 1
    2  | 3         | 2
    3  | 3         | 3
    4  | 2         | 2

    authors
    id | name
    1  | "John Doe"
    2  | "John Doe"
    3  | "JK Rowling"
    4  | "Terry Hayes"

  Q. Write the SQL to find all books written by certain author given their name

  ``` SQL
  SELECT books.title, books.genre
  FROM books
  JOIN book_authors
  ON books.id = book_authors.book_id
  JOIN authors
  ON authors.id = book_authors.author_id
  WHERE authors.name = "JK Rowling";
  ```

  Database Admin => is that person who will architect your database
  The actual data comes from users, scraping, or whatever.

3. Squirrels have Nests in Trees -- Build table

  ```
  squirrels
  id |  name
  1     'chipper'          
  2     'alvin'   
  3     'theo'                 
  4     'simon'            

  nests
  id |  squirrel_id | tree_id
  1     1             1
  2     2             1
  3     3             2
  4     4             1
  4     4             2

  trees
  id |  name
  1     apple tree
  2     christmas tree
  3     old tree
  ```

Q: Write the SQL to find all Squirrels in a "christmas tree"


```SQL

```


## Object Relational Mapper (ORM)

Object => Ruby, everything is an object.
Relational => SQL Today! All them databases that we're using are relational databases. => Object Oriented Relationships
Mapper => .map
This thing lets you interface with a database.
Without ever writing SQL.

All those tables => classes
All those rows => instances
Instead of writing SQL, you work with objects in Ruby.
You will be manipulating a database without actually writing SQL.

Nothing ever happens to the database unless you tell it to.

The one I build today will be suuuuuuper simple.
You won't be building this, but you will be using this.

### CRUD REVIEW

What are the four ways we can interact with Data?

CREATE
  - CREATE, INSERT INTO
  -         Cat.new
READ
  - SELECT
  - attr_reader :name => sugar.name
UPDATE
  - UPDATE, ALTER TABLE
  - attr_writer :name => sugar.name = "Poo poo"
DELETE/DESTROY
  - DELETE
  - .pop(), .unshift(), .clear() => .destroy

### Active Record Pattern <=== Active Record

- each table in our DB should correspond to a ruby class (Model)
- table is ALWAYS lowercase plural and the Model/Class is Singular
  - cats => Cat
  - book_authors => BookAuthor
- instances of one of those classes are represented as a row in our DB
- each column represents an attribute on each instance

### How to persist Data?

Databases

## Code Walkthrough

- bin/run.rb => binary
- config/environment.rb
- Gemfile
- db/twitter.db
- lib/tweets.rb && lib/tweets_app.rb
- Rake
  - Creating a new rake task - `rake -T`

```
A tweet belongs to a user and has some message content - must have user_id

The belongs_to must have a user_id on it

A user has a username, and has many tweets

A tweet can have many tags and a tag can have many tweets
```

## Review Questions

### CRUD in SQL and Ruby

* What are the 4 ways we can interact with data?
* How do we write these in SQL?
* How do we want to write these in Ruby?
* How do we map these SQL applications to Ruby?

### ORM Pattern

* each table in the db should correspond to our ruby class (models)
* each row represents an instance in the database
* each column represents an attribute for our instances
* why do we need a database? persistence

### One to Many Relationship in SQL

* Foreign key versus primary key
* Which table is the foreign key placed on? (has many or belongs to)
* Show the pain of not putting the foreign key on the child
* Find all books written by a certain author by ID

### Many to Many Relationship in SQL

* how do we implement an author having many books and a book having many authors
* join table having two foreign keys
* write the sql to find all books written by a certain author given their name
* highlight order of writing sql syntax
* another example with tweets and tags

### Selecting and Inserting

* Working with SQLite3 Gem in the console
* class with attributes and initialize method
* write all class method with db execute call
* map results from select * to create new tweet instances
* mass assignment
* adding IDs to mapped instance

### Saving and Updating

* writing the save method
* parameterized queries and database security
* what's the difference between calling new and create?
