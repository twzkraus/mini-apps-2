const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));
