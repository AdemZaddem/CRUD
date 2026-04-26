import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.routes.js'
import expenseRouter from './routes/expense.routes.js'
import incomeRouter from './routes/income.routes.js'
import userRouter from './routes/user.routes.js'

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:'http://localhost:5173'}))
app.use('/uploads', express.static('uploads'))

app.use('/api/',authRouter)
app.use('/api/',expenseRouter)
app.use('/api/',incomeRouter)
app.use('/api/',userRouter)


export default app