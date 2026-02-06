import express from 'express'
import type { Application, Request, Response } from 'express'

const app: Application = express()
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Stupig!!!')
})

app.listen(port, () => {
  console.log(`Server is running port ${port}.`);
})
