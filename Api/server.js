import express, { json } from 'express'
import cors from 'cors'
import booksRoutes from './/routes/booksRoutes.js'

const app = express()

app.use(cors())
app.use(json())

app.use('/books', booksRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
