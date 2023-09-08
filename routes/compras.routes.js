import {Router} from 'express'

const comprasRouter = Router()

comprasRouter.get("/",()=>{
    console.log('funciona');
})

comprasRouter.get("/:prov",()=>{
    console.log('funciona');
})

export {comprasRouter}