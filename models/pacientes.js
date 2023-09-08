import { Schema, model } from 'mongoose';

const pacientesShema = Schema();

const pacientesModel = model('Pacientes', pacientesShema);

export { pacientesModel };
