import type { Request, Response } from 'express'
import { storageService } from '../../services/storage.service'
import { v4 as uuid } from 'uuid'

export const uploadController = {
  async getPresignedUrl(req: Request, res: Response) {
    try {
      const { contentType } = req.body
      const fileKey = `uploads/${req.userId}/${uuid()}`
      const url = await storageService.getUploadUrl(fileKey, contentType)
      res.json({ url, fileKey })
    } catch (err) {
      res.status(500).json({ error: (err as Error).message })
    }
  }
}