const express = require('express');
const app = express();
const http = require('http').createServer(app);

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
