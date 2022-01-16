const express = require('express');

const reviews = require('./routes/reviews');

const app = express();
const PORT = 3030;

app.use('/reviews', reviews);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening to port: ${PORT}`));
