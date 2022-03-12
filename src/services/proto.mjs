import {hashPassword,generateID} from '../utils/hash.mjs'
class Users{
    constructor(){
        this.users=[],
        this.instance=null
    }
    async createUser(data){
        return new Promise((resolve,reject)=>{
            try {
                const newPassword=hashPassword(data.password,(err,resp)=>{
                    if(err){
                        throw err
                    }
                    return resp
                })
                data.password=newPassword
                data.id=generateID()
                this.users.push({...data})
                console.log(this.users)
                setTimeout(()=>resolve(data),1000)
            } catch (error) {
                reject(error)
            }
        })
   
    }
    static getInstance(){
        if(Users.instance){
            return Users.instance
        }
        Users.instance=new Users()
        return Users
    }
    async getUsers(){
        console.log('getUsers ',this.users)
        return new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(this.users),2000)
        })
    }
    async findUserById(id){
        const user=this.users.find(user=>user.id==id)
        return new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(user),2000)  
        })
    }
    async findUserByName(name){
        const user=this.users.find(user=>user.name==name)
        return new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(user),2000)  
        })
    }
    
}



export{ Users}