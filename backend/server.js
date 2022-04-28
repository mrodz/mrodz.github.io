import express from 'express';
import cors from 'cors';
import fetch, { Headers } from 'node-fetch'
import { readFile } from 'fs/promises';
import nodeCron from 'node-cron';
import { google } from 'googleapis'

/**
 * @deprecated - too complicated + no documentation + Yelp fucking sucks when it comes to providing reviews.
 */

const requestEndpoints = {
    information: "https://api.yelp.com/v3/businesses/comparis-los-angeles",
    reviews: "https://mybusiness.googleapis.com/v4/compari%27s+trattoria+pizzeria/reviews"
};
const mybusinessbusinessinformation = google.mybusinessbusinessinformation('v1').googleLocations();
mybusinessbusinessinformation.get()

const keys = JSON.parse(await readFile(new URL('../frontend/src/API_SECRET.json', import.meta.url)));
const PORT = 5000;
const app = express();
app.use(cors());
const corsOptions = {
    origin: "http://localhost:3000"
};

const fetchOptions = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${keys.yelp}`
    }
};

var information = await getInformation();
var reviews = await getReviews();

// will update the API every 24 hours
nodeCron.schedule('0 0 0 * * *', async () => {
    information = await getInformation();
    reviews = await getReviews();
});

function getDate() {
    return (new Date()).toLocaleDateString('en-US');
}

async function getInformation() {
    console.log(`[${getDate()}]: GET + ${requestEndpoints.information}`);
    const response = await fetch(requestEndpoints.information, fetchOptions);
    return await response.json();
}

async function getReviews() {
    console.log(`[${getDate()}]: GET + ${requestEndpoints.reviews}`);
    const response = await fetch(requestEndpoints.reviews, fetchOptions);
    return await response.json();
}

// This function runs if the http://localhost:5000/getData endpoint
// is requested with a GET request
app.get('/yelp/restaurant-info', cors(corsOptions), async (req, res) => {
    res.status(200).json(information);
});

app.get('/yelp/restaurant-reviews', cors(corsOptions), async (req, res) => {
    res.status(200).json(reviews);
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});