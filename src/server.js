import {join} from "path"
import express from "express";
import socketIO from "socket.io";
import { from } from "rxjs";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

app.get("/", (req, res) => res.render("home"));

const server = app.listen(PORT, "chat");

const io = socketIO.listen(server);

