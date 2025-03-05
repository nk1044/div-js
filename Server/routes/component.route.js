import Router from 'express';
import {CreateComponent, GetComponentByName} from '../controllers/component.controller.js';
const router = Router();

router.route('/add-component').post(CreateComponent);
router.route('/get-component').get(GetComponentByName);

export default router;