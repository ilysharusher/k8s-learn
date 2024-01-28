import express from 'express';
import os from 'os';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const helloMessage = `<h1>Hello from the ${os.hostname()}</h1>`;
    console.log(helloMessage);
    res.send(helloMessage);
});

app.get('/nginx', async (req, res) => {
    const response = await fetch('http://nginx');
    const body = await response.text();
    res.send(body);
});

app.get('/json-placeholder', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const body = await response.json();
    res.send(body);
});

app.listen(PORT, () => {
    console.log(`Web server is listening at port ${PORT}`);
});