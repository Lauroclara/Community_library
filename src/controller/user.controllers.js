import userService from '../service/user.services.js';

async function createUserController(req, res) {
    try {
    const newUser = req.body;
    const user = await userService.createUserService(newUser);
    res.status(201).send(user);//json
    } catch (error) {
    res.status(400).send({ message: error.message });//json
    }
    }
 
export default{
    createUserController
}