const express = require('express');
const app = express();
const port = 8000;

// using express router
app.use('/', require('./routes'));


// listening to the port
app.listen(port, (err) => {
    if (err) {
        console.log(`Error in running the server: ${err}`);
        return;
    }

    console.log(`Server is running on port: ${port}`);
});