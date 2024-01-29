const express = require('express');
const bodyParser = require('body-parser');
const v1Routes = require('./routes');
const sequelize = require('./database/mysql');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

// Enable CORS for all routes
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use('/api/v1', v1Routes);

const PORT = process.env.PORT || 8000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
