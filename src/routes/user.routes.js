import { Router } from  "express";
import userController from "../controller/user.controller.js";
import {
  validate, validateUserId,
 } from "../middlewares/validation.middlewares.js";
import { userSchema } from "../schema/userschema.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";

const router = Router();

router.post(
  '/users',
  validate(userSchema),
  userController.createUserController
);

router.post(
  '/users',
  validate(userSchema),
  userController.loginUserController
);

router.use(authMiddleware)
router.get('/users', userController.findAllUsersController);
router.get(
  '/users/:id',
  validateUserId,
  userController.findUserByIdController
);

router.put(
  '/users/:id',
  validate(userSchema),
  userController.updateUserController
);

router.delete(
  '/users/:id',
  validateUserId,
  userController.deleteUserController
);

export default router;
