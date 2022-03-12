import { app } from "./app.mjs";
const port=3333

app.listen(port,()=>{
    console.log(`listen in http://localhost:${port}`)
})