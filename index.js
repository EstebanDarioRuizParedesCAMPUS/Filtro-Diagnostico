import dotenv from 'dotenv'

dotenv.config()

import { Server } from './app.js';

const server = new Server();

server.listen();
