import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.routes.js'
import noteRouter from './routes/note.routes.js'

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:'http://localhost:5173'}))

app.use('/api/',authRouter)
app.use('/api/',noteRouter)


export default app