const express = require('express');
const app = express();
const routes = require(`./routes/index.js`);
const mongoose = require(`mongoose`);
mongoose.connect(`mongodb://127.0.0.1:27017/moebook`);
require('dotenv').config();

const port = process.env.PORT;

app.set(`view engine`,`ejs`);

app.use(routes);

app.listen(port,()=> {
    console.log(`server running at http://localhost:${port}`)
});