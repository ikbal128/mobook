const express = require('express');
const app = express();
const routes = require(`./routes/index.js`);
const mongoose = require(`mongoose`);
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');
const methodOverride = require('method-override');
require('dotenv').config();

const port = process.env.PORT;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set(`view engine`,`ejs`)
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl:`mongodb://127.0.0.1:27017/mobook`,
        collectionName: 'sessions',
        ttl: 100000
    }),
    cookie: {
        maxAge: 100000
    }
}))

app.use(methodOverride('_method'));

app.use((req, res, next) =>{
    res.locals.currentUrl = req.path;
    next();
})

app.use(routes);

mongoose.connect(`mongodb://127.0.0.1:27017/mobook`)
.then(()=>{
    console.log("connect to MongoDb");
    app.listen(port,()=> {
        console.log(`server running at http://localhost:${port}`)
    });
})
.catch((e)=>{
    console.log(e);
})
