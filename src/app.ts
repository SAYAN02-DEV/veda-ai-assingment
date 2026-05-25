import express from 'express'
import { env } from './config'
import { logger } from './utils/logger'
const app = express()
const port = env.PORT

app.get('/', (req, res) => {
	res.json({ status: 'ok' })
})

app.listen(port, () => {
	logger.info(`Server listening on port :${port}`)
})

export { app }
