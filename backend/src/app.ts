import express from 'express';

const app = express();
app.use(express.json());

app.post('/clients', async (req, res) => {

});

app.get('/clients', async (req, res) => {

});

app.patch('/clients/:id', async (req, res) => {

});

app.get('/clients/:id', async (req, res) => {

});

export { app as default };
