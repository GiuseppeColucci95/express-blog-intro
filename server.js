//import node express using commonjs rules
const express = require('express');

//create an instance of express object
const app = express();

//define port for the server
const port = 3000;

//make the server start listening
app.listen(port, () => {
  console.log(`🟢 Server started running on port http://localhost:${port}`);
});

//make the home route
app.get('/', (req, res) => {
  res.send("Server del mio blog");
});

