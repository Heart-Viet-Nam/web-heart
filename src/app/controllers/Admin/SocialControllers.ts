import { Request, Response, NextFunction } from 'express';

class CrudControllers {

    //~ EVENT
    // [GET] /admin/manage-event
    async eventManageRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [GET] /admin/create-event
    async eventCreateRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [GET] /admin/event/:id
    async eventEditRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [POST] /admin/create-event
    async eventCreate(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [PATCH] /admin/event/:id
    async eventUpdate(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [DELETE] /admin/event/:id
    async eventRemove(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    //~ BLOG
    // [GET] /admin/manage-blog
    async blogManageRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            
        }
    }

    // [GET] /admin/create-blog
    async blogCreateRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [GET] /admin/blog/:id
    async blogEditRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [POST] /admin/create-blog
    async blogCreate(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [PATCH] /admin/event/:id
    async blogUpdate(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [DELETE] /admin/event/:id
    async blogRemove(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }
}

export default new CrudControllers();
