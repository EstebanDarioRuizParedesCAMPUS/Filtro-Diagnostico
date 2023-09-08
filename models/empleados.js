import { Schema, model } from 'mongoose';

const empleadosShema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    cargo: {
        type: String,
        required: true,
    },

    fechaContratacion: {
        type: Date,
        required: true,
    },
});

const empleadosModel = model('Empleados', empleadosShema);

export { empleadosModel };
