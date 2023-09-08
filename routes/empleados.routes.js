import {Router} from 'express'

const empleadosRouter = Router()

empleadosRouter.get("/",()=>{
    console.log('funciona');
})

export {empleadosRouter}