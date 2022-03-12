import fetch from 'node-fetch'

export default{
    getAlbumId:async function(id){
        console.log('ID',id )
        const requestUrl = `https://jsonplaceholder.typicode.com/albums/${id}/photos?_limit=3`;
        return new Promise((resolve,reject)=>{
            fetch(requestUrl)
            .then(res=>res.json())
            .then(json=>{
                console.log('fetch => ',json)
                resolve(json)
            },err=>{
                reject(err)
            })
        })
    }
}