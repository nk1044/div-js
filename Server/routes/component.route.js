import Router from 'express';
import {CreateComponent} from '../controllers/component.controller.js';
const router = Router();

router.route('/add-component').post(CreateComponent);

export default router;