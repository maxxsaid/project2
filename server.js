///////////////////////////////////
// Import our Dependencies
///////////////////////////////////
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const path = require("path");
const ListsRouter = require("./controllers/list");
const UserRouter = require("./controllers/user");
const session = require("express-session");
const MongoStore = require("connect-mongo");

/////////////////////////////////
// Create our app with object, configure liquid
/////////////////////////////////
// import liquid
const liquid = require("liquid-express-views");
// construct an absolute path to our views folder
const viewsFolder = path.resolve(__dirname, "views/");

// create an app object with liquid, passing the path to the views folder
const app = liquid(express(), { root: viewsFolder });

/////////////////////////////////////////////
// Register Our Middleware
/////////////////////////////////////////////
// logging
app.use(morgan("tiny"));
// ability to override request methods
app.use(methodOverride("_method"));
// ability to parse urlencoded from for submission
app.use(express.urlencoded({ extended: true }));
// setup our public folder to serve files statically
app.use(express.static("public"));
// middlware to create sessions (req.session)
app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    resave: false,
    saveUninitialized: true,
  })
);

////////////////////////////////////////
// Routes
/////////////////////////////////////////

app.get("/", (req, res) => {
  res.render("index.liquid");
});

app.use("/lists", ListsRouter);

app.use("/user", UserRouter);

/////////////////////////////////////////////
// Setup Server Listener
/////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
