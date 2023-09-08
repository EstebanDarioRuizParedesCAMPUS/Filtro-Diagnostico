import { Schema, model } from 'mongoose';

const ventasShema = Schema();

const ventasModel = model('Ventas', ventasShema);

export { ventasModel };
