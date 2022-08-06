import { Request, Response, NextFunction } from 'express';
import {Booking} from '../models'
import {uploadFile} from '../../utils/uploadFile'

class EventControllers {
  // [POST]
  async createEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const {data} = await uploadFile(req.file!, 'image')
        const {title, description, content, author} = req.body
        const newData = {
            title: title,
            description: description,
            content: content,
            thumbnail: data['path'],
            author: author
        }
        const newBlog = new Booking(newData)
        const savedBlog = await newBlog.save()
        res.status(200).json(savedBlog)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  // [PATCH]
  async updateEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const {} = req.body;
    } catch (error) {}
  }

  // [DELETE]
  async destroy(req: Request, res: Response, next: NextFunction) {
    try {
      const {} = req.body;
    } catch (error) {}
  }
}

export default new EventControllers();
