/*s
const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();

app.use(express.static('build'));

const server = https.createServer({
  key: fs.readFileSync('/Users/samehrlich/my-appttps/localhost-key.pem'),
  cert: fs.readFileSync('/Users/samehrlich/my-appttps/localhost.pem')
}, app);

server.listen(3000, () => {
  console.log('Server running on https://localhost:3000');
});
*/
