import { medicamentosModel } from '../models/medicamentos.js';

const getMedByStock = async (req, res) => {
    try {

        const query = {
            stock: {$ls: 50} 
        } 

        const [medicamentos] = await Promise.all([
            medicamentosModel.find(query),
        ]);

        await res.json({
            medicamentos: medicamentos,
        });

    } catch (err) {
        console.log(err);
        return res.json({
            error: "Hay un error en la solicitud"
        })
    }
};

export { getMedByStock };
