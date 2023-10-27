import express from 'express';
import cors from 'cors';
import axios from 'axios';

import bodyParser from 'body-parser';
const app = express();

app.use(express.json());
app.use(cors({ origin: 'https://chatappfrontend.piyushjainbny.repl.co', credentials: true }));

app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.send('hello')

})




app.post("/authenticate", async (req, res) => {

  const { username } = req.body;


  try {

    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      {
        headers: { "Private-Key": "50d3c2ae-f4f5-4939-bfc1-49d937b3b015" }
      }
    );


    return res.status(r.status).json(r.data);

  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
  // return res.json({ username: username, secret: "sha256..." });
});

app.listen(3000, () => {
  console.log('I am UP')
});