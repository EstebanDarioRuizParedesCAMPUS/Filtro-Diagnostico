import express from 'express';
import cors from 'cors';

import { conectionDB } from './database/dbConextion.js';

import { comprasRouter } from './routes/compras.routes.js';
import { empleadosRouter } from './routes/empleados.routes.js';
import { medicamentosRouter } from './routes/medicamentos.routes.js';
import { pacientesRouter } from './routes/pacientes.routes.js';
import { proveedoresRouter } from './routes/proveedores.routes.js';
import { ventasRouter } from './routes/ventas.routes.js';

class Server {
    constructor() {
        this.app = express();

        this.port = process.env.port;

        this.paths = {
            compras: '/compras',
            empleados: '/empleados',
            medicamentos: '/medicamentos',
            pacientes: '/pacientes',
            proveedores: '/proveedores',
            ventas: '/ventas',
        };

        this.middleware();
        this.conection();
        this.routes();
    }

    routes() {
        this.app.use(this.paths.compras, comprasRouter);
        this.app.use(this.paths.empleados, empleadosRouter);
        this.app.use(this.paths.medicamentos, medicamentosRouter);
        this.app.use(this.paths.pacientes, pacientesRouter);
        this.app.use(this.paths.proveedores, proveedoresRouter);
        this.app.use(this.paths.ventas, ventasRouter);
    }

    conection() {
        conectionDB();
    }

    middleware() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Conección exitosa al puerto ${this.port}`);
        });
    }
}

export { Server };
