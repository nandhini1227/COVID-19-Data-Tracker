const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/covid-data', async (req, res) => {
    try {
        const response = await axios.get('https://disease.sh/v3/covid-19/all');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.get('/api/historical-data', async (req, res) => {
    try {
        const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=30');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
