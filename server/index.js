const express = require('express');

const reviews = require('./routes/reviews');
const meta = require('./routes/meta');

const app = express();
const PORT = 3030;

app.use('/reviews', reviews);
app.use('/meta', meta);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening to port: ${PORT}`));
