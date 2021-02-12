const express = require('express');
const app = express();
const port = process.env.PORT || '3001';
const bodyParser = require("body-parser");
const todoRoutes = require('./routes/todo_routes');

//db config
require('./config/connection');

/**
 * parse requests of content-type - application/json
 */
app.use(bodyParser.json());
/**
 * parse requests of content-type - application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/todos', todoRoutes);

app.listen(port, () => {
	console.log('todo api node');
});