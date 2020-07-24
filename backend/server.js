const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const charityRouter = require('./routes/charity');

app.use('/charity', charityRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});