import {Router} from 'express';
const router =Router();
import {controller} from '../controllers/controllers.js'

router.get('/HD_SPACE',controller.Locales_HD_SPACE)
router.get('/DATABASE_SPACE',controller.DATABASE_SPACE)
router.get('/LOG_SPACE',controller.LOG_SPACE)
router.get('/versiones',controller.Versiones)

export default router