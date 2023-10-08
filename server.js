import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { v4 as uuid } from 'uuid';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';
import path from 'path';

const __dirname = path.resolve();

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',Router);

const PORT = process.env.PORT || 8000;


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-ahabcye-shard-00-00.9a5gtmv.mongodb.net:27017,ac-ahabcye-shard-00-01.9a5gtmv.mongodb.net:27017,ac-ahabcye-shard-00-02.9a5gtmv.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-zr6oe7-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(URL);

//if (process.env.NODE_ENV === 'production') {
 //   app.use(express.static('client/build'))
//}
// app.use(express.static(path.join("__dirname", "./client/build")));
// app.get('*', function (_, res)) {
//      res.sendfile(path.join(__dirname, "./client/build/index.html"), function(err){
//          res.status(500).send(err);
//})
//})

// Serve static files from the specified directory
app.use(express.static(path.join(__dirname, './client/build')));

// Handle all other routes by serving the index.html
app.get('*', function (_, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'callback';
paytmParams['EMAIL'] = 'kunaltyagi@gmail.com';
paytmParams['MOBILE_NO'] = '1234567852';
