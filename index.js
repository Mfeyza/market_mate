"use strict"

const express = require('express')
const app = express()
const cors = require('cors');




require('dotenv').config()

const PORT = process.env?.PORT || 8000


require('express-async-errors')


const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()
app.use(cors())


app.use(express.json())


app.use('/upload', express.static('./upload'))


app.use(require('./src/middlewares/authentication'))


app.use(require('./src/middlewares/logger'))


app.use(require('./src/middlewares/findSearchSortPage'))


app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to Stock Management API',
        documents: {
            swagger: '/documents/swagger',
            redoc: '/documents/redoc',
            json: '/documents/json',
        },
        user: req.user
    })
})


app.use(require('./src/routes'))


app.use(require('./src/middlewares/errorHandler'))

app.listen(PORT,()=> console.log(`http://:${PORT}`))

/* ------------------------------------------------------- */


// require('./src/helpers/sync')() 