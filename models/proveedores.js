import { Schema, model } from 'mongoose';

const proveedoresShema = Schema();

const proveedoresModel = model('Proveedores', proveedoresShema);

export { proveedoresModel };
