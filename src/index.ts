import express from "express";

const app = express()

app.get('/hello', (req, res) => res.send('Hello Marc'));

app.listen(3017, ()=> console.log("Application démarrée sur le port 3017?"));

app.get('/docker', (req, res) => res.send("J'adore cet " + process.env.test));