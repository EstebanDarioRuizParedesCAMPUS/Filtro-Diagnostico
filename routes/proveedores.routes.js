import {Router} from 'express'

const proveedoresRouter = Router()

proveedoresRouter.get("/",()=>{
    console.log('funciona');
})

export {proveedoresRouter}