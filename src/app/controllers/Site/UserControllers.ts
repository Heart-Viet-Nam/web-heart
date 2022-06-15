import { Request, Response, NextFunction } from "express";

class UserControllers {

    // [GET] /user/dashboard
    async dashboardRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [GET] /user/activity
    async activityRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [GET] /user/invoice
    async invoiceRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [GET] /user/profile
    async profileRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [GET] /user/about-us
    async aboutRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [GET] /user/blogs
    async blogsRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [GET] /user/events
    async eventsRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [GET] /user/blog/:slug
    async detailBlogRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [GET] /user/event/:slug
    async detailEventRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

}

export default new UserControllers();
