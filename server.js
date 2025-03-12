//import node express using commonjs rules
const express = require('express');

//create an instance of express object
const app = express();

//define port for the server
const port = 3000;

//set static assets middleware
app.use(express.static('public'));

//make the server start listening
app.listen(port, () => {
  console.log(`🟢 Server started running on port http://localhost:${port}`);
});

//create the home route
app.get('/', (req, res) => {
  res.send("Server del mio blog");
});

//create the /bacheca route
app.get('/bacheca', (req, res) => {

  //create the posts array
  const posts = [
    {
      title: "Ciambellone",
      content: "Ricetta per ciambellone casalingo",
      image: "/images/ciambellone.jpeg",
      tags: ["limone", "dolce", "ciambella"]
    },
    {
      title: "Crackers di barbabietola",
      content: "Ricetta per crackers di barbabietola",
      image: "/images/cracker_barbabietola.jpeg",
      tags: ["cracker", "salato", "barbabietola"]
    },
    {
      title: "Pane fritto dolce",
      content: "Ricetta per pane fritto dolce",
      image: "/images/pane_fritto_dolce.jpeg",
      tags: ["pane", "dolce", "fritto", "zucchero"]
    },
    {
      title: "Pasta di barbabietola",
      content: "Ricetta per pasta di barbabietola",
      image: "/images/pasta_barbabietola.jpeg",
      tags: ["pasta", "salato", "barbabietola", "pistacchio"]
    },
    {
      title: "Torta paesana",
      content: "Ricetta per torta paesana al cioccolato",
      image: "/images/torta_paesana.jpeg",
      tags: ["cioccolato", "dolce", "torta"]
    },
  ];

  //return the answer in json format
  res.json(posts);
});
