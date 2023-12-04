const express = require("express");
var methodOverride = require('method-override')
const dbController = require("./controllers/db_controller");
const page_router = require("./routers/page_router");
const post_router = require("./routers/post_router");
//CONSTANTS
const app = express();
const port = process.env.port || 5000;


dbController.connectDB();
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method', {
    methods: [
        "POST", "GET",
    ]
}));
app.use('/', page_router);
app.use('/post', post_router);


//LISTEN
app.listen(port, "localhost", () => {
    console.log(`Port ${port} dinleniyor...`);
});