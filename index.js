const express = require('express');
const axios = require('axios');
const app = express();

app.get('/commits', async (req, res) => {
    try {
        const response = await axios.get('https://api.github.com/repos/<user>/<repo>/commits', {
            headers: {
                Authorization: `Bearer <your_personal_access_token>`
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Fout bij ophalen van gegevens.');
    }
});

app.listen(3000, () => console.log('API draait op http://localhost:3000'));
