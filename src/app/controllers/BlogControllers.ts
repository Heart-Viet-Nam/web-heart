import { Request, Response, NextFunction } from 'express';
import {uploadFile} from '../../utils/uploadFile'
import { Blog } from '../models';

class BlogControllers {
  // [POST]
  async createBlog(req: Request, res: Response, next: NextFunction) {
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
        const newBlog = new Blog(newData)
        const savedBlog = await newBlog.save()
        res.status(200).json(savedBlog)
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [PATCH]
  updateBlog(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {}
  }

  // [DELETE]
  destroyBlog(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {}
  }
}

export default new BlogControllers();
