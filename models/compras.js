import { Schema, model } from 'mongoose';

const comprasShema = Schema({
    fechaCompra: {
        type: String,
        required: true,
    },
    proveedor: {
        type: Object,
        required: true,
    },
    medicamentosComprados: {
        type: Array,
        required: true,
    },
});

const comprasModel = model('Compras', comprasShema);

export { comprasModel };
