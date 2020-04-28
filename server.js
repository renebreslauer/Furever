const {
  proxyAnimal
} = require('./utilities');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
let accessToken = {};


// GET THE BEARER TOKEN

bearerToken = async () => {
  if (
    accessToken.token !== undefined &&
    new Date() - accessToken.created_at < accessToken.ttl
  ) {
    return accessToken.token;
  }
  console.log('Fetching new Token ---');
  await axios({
      method: 'POST',
      url: 'https://api.petfinder.com/v2/oauth2/token',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        grant_type: 'client_credentials',
        client_id: `${process.env.client_id}`,
        client_secret: `${process.env.client_secret}`
      }
    })
    .then(response => response.data)
    .then(data => {
      accessToken.token = data.access_token;
      accessToken.ttl = data.expires_in * 1000; // Convert seconds to ms
      accessToken.created_at = new Date();
    })
    .catch(e => console.log(e));
  console.log('new Token ' + accessToken.token);
  return accessToken.token;
};

app.get('/api/animals', async (request, response) => {
  // console.log('hit');
  const token = await bearerToken();

  try {
    const {
      data
    } = await axios.get(
      'https://api.petfinder.com/v2/animals?limit=100&page=100', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: request.query
      }
    );
    // console.log(data.animals)
    let animals = data.animals.map(proxyAnimal);
    response.send(animals);

  } catch (e) {
    console.log(e);
    response.status(500);
  }
});

app.get('/api/pet/:id', async (req, res) => {
  const token = await bearerToken();
  const {
    data
  } = await axios.get(
    `https://api.petfinder.com/v2/animals/${req.params.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  const animal = proxyAnimal(data.animal)
  res.send(animal);
});



app.get('/api/types', async (_, res) => {
  const token = await bearerToken();
  const {
    data
  } = await axios.get(
    'https://api.petfinder.com/v2/types', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  res.send(data)
})

app.get('/api/pets/:type', async (req, res) => {
  const token = await bearerToken();
  const {
    data
  } = await axios.get(
    `https://api.petfinder.com/v2/animals?type=${req.params.type}&limit=100&page=100`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  const animals = data.animals.map(proxyAnimal);

  res.send(animals);
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});