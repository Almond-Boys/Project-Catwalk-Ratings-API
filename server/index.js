const express = require('express');

const app = express();

const PORT = 3030;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening to port: ${PORT}`));
