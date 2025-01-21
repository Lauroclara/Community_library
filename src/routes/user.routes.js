import {Router} from 'express';
import userControrller from '../controller/user.controller,js'

const router = Router();


router.post('/users', userControrller.creatUserController)

export default router 