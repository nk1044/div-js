import Router from 'express';
import { loginUser, registerUser, logoutUser, getCurrentUser } from '../controllers/user.controller.js';
import { VerifyToken } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/login-user', loginUser);
router.post('/register-user', registerUser);
router.get('/logout-user', VerifyToken, logoutUser);

export default router;