import { Router } from  "express";
import userController from "../controller/user.controller.js";
import {
  validate, validateUserId,
 } from "../middlewares/validation.middlewares.js";
import { userSchema } from "../schema/userschema.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";

const router = Router();

router.post(
  '/',
  validate(userSchema),
  userController.createUserController
);

router.post(
  "/login",
  userController.loginUserController
);

router.use(authMiddleware)
router.get("/", userController.findAllUsersController);
router.get(
  ":id",
  validateUserId,
  userController.findUserByIdController
);

router.patch(
  "/:id",
  validate(userSchema),
  userController.updateUserController
);

router.delete(
  "/:id",
  validateUserId,
  userController.deleteUserController
);

export default router;
