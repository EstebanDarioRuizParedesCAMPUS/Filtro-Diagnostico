import {Router} from 'express'

import { getMedByStock } from '../controllers/medicamentos.controller.js'



const medicamentosRouter = Router()

medicamentosRouter.get("/",()=>{
    console.log('funciona, pero especifica un valor del ejercicio');
})

medicamentosRouter.get("/min",getMedByStock)

medicamentosRouter.get("/proveedores",()=>{
    console.log('funciona');
})

medicamentosRouter.get("/:fecha?",()=>{
    console.log('funciona');
})

medicamentosRouter.get("/maxCost",()=>{
    console.log('funciona');
})

medicamentosRouter.get("/:stock?",()=>{
    console.log('funciona');
})

medicamentosRouter.get("/:fechaGlobal",()=>{
    console.log('funciona');
})

medicamentosRouter.get("/40/:maxPrice&:stock",()=>{
    console.log('funciona????? prueba 2');
})

export {medicamentosRouter}