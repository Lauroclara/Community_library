import userRepository from '../repositories/user.repositorios.js';
import bcrypt from 'bcrypt';
async  function creatUserService(newUser){
    const foundUser = await userRepository.findUserByEmailRepository(newUser.email)
    if(foundUser) throw new Error("User already exists!")

    const passHash = await bcrypt.hash(newUser.password, 10);
    const user = await userRepository.creatUserRepository({...newUser,password: passHash,});
    
    if(!user) throw new Error("Error creating User");
    return user;
}
export default {
    createUserService,
}