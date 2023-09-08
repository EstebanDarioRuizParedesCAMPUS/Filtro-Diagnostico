import { Schema, model } from 'mongoose';

const medicamentosShema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    fechaExpiracion: {
        type: Date,
        required: true,
    },
    proveedor: {
        type: Object,
        required: true,
    },
});

const medicamentosModel = model('Medicamentos', medicamentosShema);

export { medicamentosModel };
