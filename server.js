const express = require('express');

const app = express();

app.get('/', (req, res) => {
 res.send("Tunnel City Scheduler")
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);