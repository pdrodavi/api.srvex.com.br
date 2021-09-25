const express = require('express');
const app = express();
const router = require('./routes/router')
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger_output.json');
const port = process.env.port;

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.redirect('/doc');
})

app.use(router)

app.listen(port, () => console.log(`Server listening on port ${port}!`));