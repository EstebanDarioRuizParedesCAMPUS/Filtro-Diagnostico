import { Schema, model } from 'mongoose';

const empleadosShema = Schema();

const empleadosModel = model('Empleados', empleadosShema);

export { empleadosModel };
