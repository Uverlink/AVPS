import express from "express";

const app = express()

app.get('/hello', (req, res) => res.send('Hello Marc'));

app.listen(3008, ()=> console.log("Application démarrée sur le port 3008?"));

app.get('/docker', (req, res) => res.send("J'adore cet " + process.env.test));