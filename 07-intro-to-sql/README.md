Intro to SQL
============

## SWBATs

- Explain persistence and the need for using SQL
- Define SQL
- Explain the difference between SQLite3 and SQL
- Explore provided data through SQLite Browser
- Perform CRUD actions on a single table
- Perform CRUD actions across related tables

How to pronounce this thing?
SQL, sequel => Structured Query Language
  => declarative, imperative
=> storing and accessing data => in a database
=> why?
=> database is for storing information, for saving
=> persist data

SQLite3 => one of many kinds of databases
Excel, MySQL, (R => programming language), Firebase is entire SDK, Postgres
Relational databases => SQLite3, MySQL, Postgres, Oracle, MS SQL Server
NoSQL <=

CRUD Actions => the different ways we can interact with data

Create
Read
Update
Delete/Destroy
=> there is really no other way to interact with data

CRUD Apps

## Setup

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the artists table?

CRUD => READ which is a SELECT
tables are pluralized

```sql
SELECT *
FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"

READ => SELECT
very similarly named table

```sql
SELECT name
FROM artists
WHERE name = "Black Sabbath";
```

"#{name}" => '#{name}'

3. Write the SQL to
create a table named 'fans'
with an autoincrementing ID that's a primary key
and a name field of type text

CRUD => CREATE =>
CREATE => creating tables
INSERT INTO => creating rows

```sql
CREATE TABLE fans (id PRIMARY KEY, name TEXT);

PRIMARY KEY => INTEGER => each table will have a primary key, id
unique identifier for this table => reference, object_id
=> is it always the row number?
no, yes, i;m not sure>?
no
start at 1 and every time you make a new row, +1
DELETE
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

CRUD => Update =>
UPDATE => udpating rows
ALTER TABLE => updating tables

```sql
ALTER TABLE fans
ADD COLUMN artist_id INTEGER;
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

CRUD => CREATING => INSERT

```sql
INSERT INTO fans (name, artist_id)
VALUES ("Mike Cheng", 169);

INSERT INTO fans (id, name, artist_id)
VALUES (248, "Mike Cheng", 169);
```

6. Check out the [Faker gem](https://github.com/stympy/faker). `gem install faker`, open up irb, run `require 'faker'` and then generate a fake name for yourself using `Faker::Name.name`. How would you update your name in the fans table to be your new name?

```sql

```

7. Write the SQL to return fans that are not fans of the black eyed peas.

```sql

```

8. Write the SQL to display an artists name next to their album title

CRUD => READ => SELECT

```sql
SELECT artists.name, albums.title
FROM artists
JOIN albums
ON artists.ArtistId = albums.ArtistId;

ON artists.id = albums.artist_id;
```

Album.all.select do |album|
  album.artist == self # Artist instance
end

INNER JOIN ??? => LEFT JOIN, RIGHT JOIN, FULL JOIN, FULL OUTER JOIN
INNER JOIN == JOIN, just shorthand

So what other parallels do you see to week 1?
many to many
=> join table has 2 foreign keys
=> since there are three tables, you need to join twice!
=> need to go through the join table before you can join on the other side

9. Write the SQL to display artist name, album name and number of tracks on that album

```sql

```

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre

```sql

```

## BONUS (very hard)

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

```sql

```
