
require("dotenv").config();
const OPENAI_KEY = process.env.OPENAI_KEY;

const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json()); // parse JSON requests
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/chat', async (req, res) => {

});

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);


app.post('/api/general', async (req, res) => {

});

app.post('/api/image', async (req, res) => {
 
})


app.post('/api/recipe', async (req, res) => {

  
});

app.listen(3000, () => {
  console.log('ChatGPT playground and chat started on port 3000');
});

// Another instance of express
const app2 = express();
app2.use(express.static(path.join(__dirname, 'cookingmasters')));
// we serve index.html as fallback
app2.use((req, res) => {
  res.sendFile(path.join(__dirname, 'cookingmasters', 'index.html'));
});

// New server on port 4000
app2.listen(4000, () => {
  console.log('Cooking Maters App started on port 4000');
});