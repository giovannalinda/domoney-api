import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'

import './database'
import './app/providers'
import { AppError } from './app/errors'

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      code: err.statusCode,
    })
  }

  console.log(err)

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
    code: 500,
  })
})

app.listen(PORT, () => {
  console.log(`🔥 Server started at http://localhost:${PORT}`)
})
