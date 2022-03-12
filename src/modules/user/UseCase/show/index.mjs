import { Users } from "../../../../services/proto.mjs";
import { ShowUserController} from "./showUserController.mjs";
import { showUserUseCase } from "./showUserUseCase.mjs";

export default()=>{
    const userRepository=Users.getInstance()
    const useCase=new showUserUseCase(userRepository)
    const controller=new ShowUserController(useCase)
    return controller
}