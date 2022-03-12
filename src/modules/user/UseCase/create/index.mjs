import { Users } from "../../../../services/proto.mjs";
import { CreateUserController } from "./createUserController.mjs";
import { createUserUseCase } from "./createUserUseCase.mjs";

export default()=>{
    const userRepository=Users.getInstance()
    const useCase=new createUserUseCase(userRepository)
    const controller=new CreateUserController(useCase)
    return controller
}