const express = require('express');
const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('./openApiDocumentation');


const app = express()
const port = 3000

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));