import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv'
import { Paciente } from '../models/paciente.models';
import { Cita } from '../models/cita.models';
import { Doctor } from '../models/doctores.models';
import { Telefono } from '../models/telefono.models';
import { Consultorio } from '../models/consultorio.models'; 
import { Especializacion } from '../models/especializacion.models';

dotenv.config();

const connection = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username:'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    logging: false,
    models: [Paciente, Cita, Doctor, Telefono,Consultorio,Especializacion]
});

export default connection;