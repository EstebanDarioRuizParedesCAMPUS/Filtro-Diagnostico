import { Schema, model } from 'mongoose';

const ventasShema = Schema({
    fechaVenta: {
        type: Date,
        required: true,
    },
    paciente: {
        type: Object,
        required: true,
    },
    empleado: {
        type: Object,
        required: true,
    },
    medicamentosVendidos: {
        type: Array,
        required: true,
    },
});

const ventasModel = model('Ventas', ventasShema);

export { ventasModel };
