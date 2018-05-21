const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const routes = require("./config/routes");

const app = express();

app.use(bodyparser.json());
mongoose.connect("mongodb://root:root@ds129780.mlab.com:29780/use-for-react");

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "HEAD", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
        credentials: true 
    })
);

app.use(
    session({
        secret: "supersecretstring12345!",
        saveUninitialized: true,
        resave: true,
        cookie: { maxAge: 60000 * 30 }
    })
);
routes(app);

app.listen(8000, () => console.log("Listing to port: 8000..."));