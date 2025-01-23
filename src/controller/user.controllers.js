import userService from "../service/user.services.js";
import {loginService} from "../service/auth.service.js"

async function createUserController(req, res) {
  const newUser = req.body;
  
  try {
    const token = await userService.createUserService(newUser);
    res.status(201).send({ token });
  } catch (e) {
    res.status(400).send(e.message );
  }
}

async function loginUserController(req, res) {
  const { email, password } = req.body;
  
  try {
    const token = await loginService(email, password);
    res.send ({ token });
  } catch (e) {
    res.status(400).send(e.message );
  }
}

async function findAllUsersController(req, res) {
  try {
    const users = await userService.findAllUsersService();
    res.status(200).send({ data: users });
  } catch (e) {
    res.status(404).send({ message: e.message });
  }
}

async function findUserByIdController(req, res) {
  const { id } = req.params;

  try {
    const user = await userService.findUserByIdService(id);
    res.status(200).send({ data: user });
  } catch (e) {
    res.status(404).send({ message: e.message });
  }
}

async function updateUserController(req, res) {
  const { id } = req.params;
  const newUser = req.body;

  try {
    const user = await userService.updateUserService(id, newUser);
    res.status(200).send({ data: user });
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
}

async function deleteUserController(req, res) {
  const { id } = req.params;

  try {
    const message = await userService.deleteUserService(id);
    res.status(200).send({ message });
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
}

export default {
  createUserController,
  findAllUsersController,
  findUserByIdController,
  updateUserController,
  deleteUserController,
  loginUserController
};
