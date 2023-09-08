import {Router} from 'express'

const pacientesRouter = Router()

pacientesRouter.get("/",()=>{
    console.log('funciona');
})

export {pacientesRouter}