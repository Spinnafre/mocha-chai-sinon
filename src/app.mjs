import express from 'express'
const app=express()


import {userRouter} from './routes/user.routes.mjs'

app.use(express.json())

app.use('/user',userRouter)


export{app}