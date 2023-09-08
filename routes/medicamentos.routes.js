import {Router} from 'express'

const medicamentosRouter = Router()

medicamentosRouter.get("/",()=>{
    console.log('funciona');
})

export {medicamentosRouter}