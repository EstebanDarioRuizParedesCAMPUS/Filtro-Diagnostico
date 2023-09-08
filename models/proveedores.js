import { Schema, model } from 'mongoose';

const proveedoresShema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    contacto: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
});

const proveedoresModel = model('Proveedores', proveedoresShema);

export { proveedoresModel };
