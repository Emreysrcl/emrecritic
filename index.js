import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



//Database connection
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "game",
    password: "*******",//Add your password here
    port: 5432,
});
db.connect();

let games = [
    {
        title: "Example",
        score: 9.5,
        comment: "Example comment",
        created_at: "2021-10-10",
        background_image: ""
    }
];

//Score high to low Function
async function getGames() {
    const result = await db.query("SELECT id, title, score, comment, TO_CHAR(created_at, 'YYYY-MM-DD HH24:MI') AS created_at FROM games ORDER BY score DESC;");
    games = result.rows;

    for (let game of games) {
        try {
            const response = await axios.get(`https://api.rawg.io/api/games?search=${game.title}&key=YOUR_API_KEY`);    //Add your API key here
            if (response.data.results && response.data.results.length > 0) {
                game.background_image = response.data.results[0].background_image; 
            }
        } catch (error) {
            console.error(`Error fetching API data for ${game.title}:`, error);
            game.background_image = ""; 
        }
    }

    console.log(games);
    return games;
}


//Score low to high Function 
async function getGamesv2() {
    const result = await db.query("SELECT id, title, score, comment, TO_CHAR(created_at, 'YYYY-MM-DD HH24:MI') AS created_at FROM games ORDER BY score ASC;");
    games = result.rows;

    for (let game of games) {
        try {
            const response = await axios.get(`https://api.rawg.io/api/games?search=${game.title}&key=70987d60a03f4c448c5ff730e867456a`);
            if (response.data.results && response.data.results.length > 0) {
                game.background_image = response.data.results[0].background_image; 
            }
        } catch (error) {
            console.error(`Error fetching API data for ${game.title}:`, error);
            game.background_image = ""; 
        }
    }

    console.log(games);
    return games;
}

//Date added new to old Function
async function getGamesbydate() {
    const result = await db.query("SELECT id, title, score, comment, TO_CHAR(created_at, 'YYYY-MM-DD HH24:MI') AS created_at FROM games ORDER BY created_at DESC;");
    games = result.rows;

    for (let game of games) {
        try {
            const response = await axios.get(`https://api.rawg.io/api/games?search=${game.title}&key=70987d60a03f4c448c5ff730e867456a`);
            if (response.data.results && response.data.results.length > 0) {
                game.background_image = response.data.results[0].background_image; 
            }
        } catch (error) {
            console.error(`Error fetching API data for ${game.title}:`, error);
            game.background_image = ""; 
        }
    }

    console.log(games);
    return games;
}

//Date added old to new Function
async function getGamesbydatev2() {
    const result = await db.query("SELECT id, title, score, comment, TO_CHAR(created_at, 'YYYY-MM-DD HH24:MI') AS created_at FROM games ORDER BY created_at ASC;");
    games = result.rows;

    for (let game of games) {
        try {
            const response = await axios.get(`https://api.rawg.io/api/games?search=${game.title}&key=70987d60a03f4c448c5ff730e867456a`);
            if (response.data.results && response.data.results.length > 0) {
                game.background_image = response.data.results[0].background_image; 
            }
        } catch (error) {
            console.error(`Error fetching API data for ${game.title}:`, error);
            game.background_image = ""; 
        }
    }

    console.log(games);
    return games;
}

//Get all games Route by score high to low
app.get("/", async (req, res) => {
    const games = await getGames();
    res.render("index.ejs", {
        games: games
    });
});

//Get all games Route by score low to high
app.get("/gamebyscoreasc", async (req, res) => {
    const games = await getGamesv2();
    res.render("index.ejs", {
        games: games
    });
});


//Get all games Route by date added new to old
app.get("/gamebydateaddnew", async (req, res) => {
    const games = await getGamesbydate();
    res.render("index.ejs", {
        games: games
    });
});


//Get all games Route by date added old to new
app.get("/gamebydateaddold", async (req, res) => {
    const games = await getGamesbydatev2();
    res.render("index.ejs", {
        games: games
    });
});

//Add new game get page route
app.post("/add", (req, res) => {
    res.render("new.ejs");
});

//Add game route
app.post("/new", async (req, res) => {
    const title = req.body.title;
    const score = req.body.score;
    const comment = req.body.comment;

    await db.query("INSERT INTO games (title, score, comment) VALUES ($1, $2, $3)", [title, score, comment]);
    res.redirect("/");
});

//Edit game get page route
app.post("/edit", async (req, res) => {
    const gametitle = req.body.updatedGameTitle;
    const score = req.body.updatedGameScore;
    const comment = req.body.updatedGameComment;
    const id = req.body.updatedGameId;

    try {
        await db.query("UPDATE games SET title=$1, score=$2, comment=$3 WHERE id=$4", [gametitle, score, comment, id]);
        console.log("game updated");
        res.redirect("/");
    } catch (err) {
        console.error(err);
    }
});

//Delete game route
app.post("/delete",async (req,res)=>{
const id = req.body.deleteGameId;

try{
    await db.query("DELETE FROM games Where id=$1",[id]);
    console.log("game deleted");
    res.redirect("/");
}
catch(err){
    console.error(err);
}

});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
