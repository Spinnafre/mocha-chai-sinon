import { generateID } from "../../../../utils/hash.mjs"

export class CreateUserController{
    constructor(createUseCase){
        this.createUseCase=createUseCase
    }
    async handle(req,res){
        const id=generateID()
        const {name,password}=req.body
        const newUser={id,name,password}
        try {
            const data=await this.createUseCase.execute(newUser)
            return res.status(201).json(data)
        } catch (error) {
            console.log(error)
            return res.status(500).json({msg:error})
        }
    }
}