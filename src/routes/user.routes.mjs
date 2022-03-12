import { Router } from "express";

const userRouter=Router()
import createUser from '../modules/user/UseCase/create/index.mjs'
import showUser from '../modules/user/UseCase/show/index.mjs'


userRouter.get('/',async(req,res)=>{
    return await showUser().handle(req,res)
})
// userRouter.get('/:id',(req,res)=>{
//     const {id}=req.params
//     const user=users.find(user=>user.id === id)
//     return res.status(200).json(user)
// })
userRouter.post('/',async(req,res)=>{
    return await createUser().handle(req,res)
})

export{userRouter}