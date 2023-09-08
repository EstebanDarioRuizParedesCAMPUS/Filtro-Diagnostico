import { Schema, model } from 'mongoose';

const medicamentosShema = Schema();

const medicamentosModel = model('Medicamentos', medicamentosShema);

export { medicamentosModel };
