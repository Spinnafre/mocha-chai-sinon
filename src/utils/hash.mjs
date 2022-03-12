import crypto from 'crypto'

function hashPassword(string,callback){
    const withCallback=typeof callback === 'function'
    try {
        const hash=crypto.createHash('md5')
        .update(string)
        .digest('hex')
        if(withCallback){
            return callback(null,hash)
        }
    } catch (error) {
        if(withCallback){
            return callback(error)
        }
    }
}

function generateID(){
    return crypto.randomBytes(16).toString('hex')
}

export{hashPassword,generateID}