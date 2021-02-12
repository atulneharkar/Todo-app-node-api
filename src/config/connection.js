const mongoose = require('mongoose');

// We need to difine the URL
const URL = 'mongodb://localhost/TODO_DB';

//Connection establishment
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

//We enabled the Listener
db.on('error', () => {
    console.error('Error occured in db connection');
});

db.once('open', () => {
    console.log('DB Connection established successfully');
});
