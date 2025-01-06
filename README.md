                         
<br/>
<div align="center">

<h1 align="center">EmreCritic</h1>
<p align="center">
 Evaluate the games you play
<br/>
<br/>
<a href="https://github.com/Emreysrcl/emrecritic"><strong>Explore the docs »</strong></a>

  

![project](https://github.com/user-attachments/assets/29122a06-08cf-49aa-b429-341d6b3b5d24)


</p>
</div>

 ## About The Project



Emrecritic is a web application designed for evaluating and managing the games we have played. It allows users to sort games by score or addition date and perform CRUD operations (Create, Read, Update, Delete) on game entries.

- View Games: Display a list of games with details like title, score, comment, and background image.
- Sort Games: Sort the games by score (high to low or low to high) or by date added (new to old or old to new).
- Add a Game: Add a new game to the list with title, score, and comment.
- Edit a Game: Update the details of an existing game.
- Delete a Game: Remove a game from the list.
Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

 ### Built With



- [Node.js and Express.js](https://nodejs.org/en)
- [EJS](https://ejs.co)
- [Bootstrap](https://getbootstrap.com)
- [PostgreSQL](https://www.postgresql.org)
- [Rawg API](https://rawg.io/apidocs)
- [CSS](https://www.w3schools.com/css/)
 ### Prerequisites

- Clone the Repository

-git clone https://github.com/your-username/emrecritic.git

-cd emrecritic

-npm install
Set Up the Database

- Ensure PostgreSQL is installed and running.

-Create a database named game.

-Update the pg.Client configuration in app.js with your PostgreSQL credentials.

-Create the necessary tables in your PostgreSQL database. You may use the following SQL script as a reference:

sql
CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  score DECIMAL(3,1) NOT NULL,
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

- Set Up Environment Variables

-Update the API key in the getGames, getGamesv2, getGamesbydate, and getGamesbydatev2 functions with your RAWG API key.

-Start the Server


-npm start
*The server will start on http://localhost:3000*
 ## Usage

 - Home Page: Displays the list of games with options to sort them.
- Add New Game: Accessed via the "Add a Game" button. Fill in the form to add a new game.
- Edit Game: Click the edit button on a game card to update its details.
- Delete Game: Click the delete button on a game card to remove it from the list.
 ## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.
 ## License

Distributed under the MIT License. See [MIT License](https://opensource.org/licenses/MIT) for more information.
 ## Contact

Emre Yaşar Çal - X [@Zaytexss](https://twitter.com/Zaytexss) - 2003ysr@gmail.com
Linkedin : https://www.linkedin.com/in/emre-yaşar-çal-3562ab203/
İnstagram : https://www.instagram.com/emreysrcl/?hl=tr

Project Link: https://github.com/Emreysrcl/emrecritic
 ## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!


- [Bootstrap for the front-end framework.](https://getbootstrap.com)
- [RAWG API for game image data.](https://rawg.io/apidocs)
