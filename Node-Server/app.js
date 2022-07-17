require("dotenv/config");
require("./.env");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = 5000;

const customer_portal = require("./routes/Customer-Portal");

// parsing incoming urls
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

// use routes
app.use("/customer", customer_portal);

//@type      GET
//@route     /
//@desc      route to display home page
//@access    PUBLIC
app.get("/",(req,res)=>res.send("Home Page"));

app.listen(PORT, () => console.log(`App is Running at ${PORT}`));
