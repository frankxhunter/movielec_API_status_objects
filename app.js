import express from 'express'
import cors from 'cors'
import routerObjects from './routes/objects.js'

const app = express()

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/objects', routerObjects)

// app on listening
const PORT = process.env.PORT ?? 3000

app.listen(PORT, ()=> {
    console.log(`Server listening on port http//:localhost:${PORT}`)
})
