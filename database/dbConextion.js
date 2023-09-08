import { connect } from 'mongoose';

const conectionDB = async () => {
    try {
        await connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión exitosa a la DataBase');
    } catch (error) {
        console.log(error);
        throw new Error('No es posible conectar a la DataBase 😥');
    }
};

export { conectionDB };
