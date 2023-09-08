import { Schema, model } from 'mongoose';

const pacientesShema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
});

const pacientesModel = model('Pacientes', pacientesShema);

export { pacientesModel };
