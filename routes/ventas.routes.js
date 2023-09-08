import {Router} from 'express'

const ventasRouter = Router()

ventasRouter.get("/",()=>{
    console.log('funciona');
})

ventasRouter.get("/recetasMedicas/:fecha",()=>{
    console.log('funciona');
})

ventasRouter.get("/pacientes/:buy",()=>{
    console.log('funciona');
})

export {ventasRouter}