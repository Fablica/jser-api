const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

// MongoDBモデル
// mongoose.connect (keys.mongoURI, {
//   useNewUrlParser: true,
// });

const app = express();

// いつものせってい
app.use(bodyParser.json());

// 本番環境はフロントエンド用ルートを実装
// if (process.env.NODE_ENV === 'production') {
//   app.use (express.static ('client/build'));
//   const path = require ('path');
//   app.get ('*', (req, res) => {
//     res.sendFile (path.resolve (__dirname, 'client', 'build', 'index.html'));
//   });
// }

require('./command/qiitaApi')();


const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`start express server : localhost:${PORT}`);