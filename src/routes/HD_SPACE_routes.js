import {Router} from 'express';
const router =Router();
import {controller} from '../controllers/controllers.js'

router.get('/HD_SPACE',controller.Locales_HD_SPACE)

export default router