import mongoose from 'mongoose'
import { env } from './env'
import { logger } from '../utils/logger'

export const connectDatabase = async () => {
  try {
    await mongoose.connect(env.MONGODB_URI)
    logger.info('MongoDB connected')
  } catch (error) {
    logger.error({ err: error }, 'MongoDB connection failed')
    process.exit(1)
  }

  mongoose.connection.on('disconnected', () => {
    logger.warn('MongoDB disconnected')
  })

  mongoose.connection.on('error', (err) => {
    logger.error({ err }, 'MongoDB error')
  })
}