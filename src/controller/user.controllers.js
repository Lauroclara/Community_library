import userService from '../service/user.services.js';

async function createUserController(req, res) {
  try {
    const newUser = req.body;
    const user = await userService.createUserService(newUser);
    res.status(201).send({ data: user });
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
}

async function findAllUsersController(req, res) {
  try {
    const users = await userService.findAllUserService();
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
};
