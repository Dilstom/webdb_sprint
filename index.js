const express = require('express');
const server = express();
const projectDb = require('./routers/projectRouter');
const actionRouter = require('./routers/actionRouter');

server.use('/api/project', projectDb);
server.use('/api/action', actionRouter);

server.get('/', (req, res) => {
 res.status(200).json('Home page');
});

server.listen(5000, () => console.log('App is listening port on 5000'));
