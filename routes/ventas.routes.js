import {Router} from 'express'

const ventasRouter = Router()

ventasRouter.get("/",()=>{
    console.log('funciona');
})

export {ventasRouter}