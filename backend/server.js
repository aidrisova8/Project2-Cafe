const express = require('express')
const cors = require('cors')

require('dotenv').config()

const mongoConfig = require('./config')

mongoConfig()

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const orderRoutes=require('./routes/orderRoutes')
const { authorize }=require('./middleware/authMiddleware')
const app = express()

const PORT = 5000

app.use(cors())
app.use(express.json())
app.use('/order',orderRoutes)
app.use('/auth', authRoutes)
app.use('/api/users',authorize, userRoutes)


app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})

