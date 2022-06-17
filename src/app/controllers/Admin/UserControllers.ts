import {Request, Response, NextFunction} from 'express'
import {languages} from '../../../utils/dataArray'

class UserControllers {

    //~ DOCTOR
    // [GET] /admin/manage-doctor
    async doctorManageRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [GET] /admin/create-doctor
    async doctorCreateRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [GET] /admin/doctor/:id
    async doctorEditRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [POST] /admin/create-doctor
    async doctorCreate(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [PATCH] /admin/doctor/:id
    async doctorUpdate(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [DELETE] /admin/doctor/:id
    async doctorRemove(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }


    //~ PATIENT
    // [GET] /admin/manage-patient
    async patientManageRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [GET] /admin/create-patient
    async patientCreateRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [GET] /admin/patient/:id
    async patientEditRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [POST] /admin/create-patient
    async patientCreate(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [PATCH] /admin/patient/:id
    async patientUpdate(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [DELETE] /admin/patient/:id
    async patientRemove(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }


    //~ Relatives
    // [GET] /admin/manage-relatives
    async relativesManageRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [GET]/admin/create-relatives
    async relativesCreateRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [GET] /admin/relatives/:id
    async relativesEditRender(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [POST] /admin/create-relatives
    async relativesCreate(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [PATCH] /admin/relatives/:id
    async relativesUpdate(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

    // [DELETE] /admin/relatives/:id
    async relativesRemove(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }
}

export default new UserControllers();
