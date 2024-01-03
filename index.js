import express, {json} from 'express'
import cors from 'cors'
import {routerObjects} from './routes/objects.js'
import { routerAdminObject } from './routes/adminObjects.js'

const app = express()

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/objects', routerObjects)
app.use('/admin/objects/',routerAdminObject)

app.use((req, res) => {
    res.status(404).json({"error": "404"})
})

// app on listening
const PORT = process.env.PORT ?? 3000

app.listen(PORT, ()=> {
    console.log(`Server listening on port http://localhost:${PORT}`)
})
