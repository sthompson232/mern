const express = require('express');
const dotenv = require('dotenv').config();
const PORT = 5001;

const app = express();
app.listen(PORT, () => console.log(`Server starting on port ${PORT}`));
