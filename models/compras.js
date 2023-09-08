import { Schema, model } from 'mongoose';

const comprasShema = Schema();

const comprasModel = model('Compras', comprasShema);

export { comprasModel };
