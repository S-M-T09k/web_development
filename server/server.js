const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = 5052;

app.get('/', (req, res) => {
  
  res.send('hello world');

})

app.listen(port, () => console.log(`server on localhost:${port}`));
