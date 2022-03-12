export class ShowUserController{
    constructor(showUseCase){
        this.showUseCase=showUseCase
    }
    async handle(req,res){
        try {
            const data=await this.showUseCase.execute()
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json({msg:error})
        }
    }
}