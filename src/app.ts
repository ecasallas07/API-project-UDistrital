import { Request, Response } from 'express';
import express from 'express'; //express  from 'express';
import connection from './db/config'
import { urlencoded, json } from "body-parser";
import dotenv from 'dotenv'
import cors from 'cors'
import pacienteRoutes from './routes/paciente.routers'
import doctorRoutes from './routes/doctor.routers'
import citaRoutes from './routes/cita.routers'
import consultorioRoutes from  './routes/consultorio.routers'
import especialidadRoutes from './routes/especializacion.routers'
import telefonoRoutes from './routes/telefono.routers'

dotenv.config();

const app = express();
app.use( json() );
app.use( cors() );
app.use( urlencoded() );


app.get('/', (req:Request, res:Response) => {
    res.send('Hello World');
})

//list of routes
app.use('/api/pacientes', pacienteRoutes)
app.use('/api/doctores', doctorRoutes)
app.use('/api/cita',citaRoutes)
app.use('/api/consultorio',consultorioRoutes)
app.use('/api/especialidad',especialidadRoutes)
app.use('/api/telefono',telefonoRoutes)

app.use( (req:Request, res:Response) => {
    res.status(404).send('Page not found');
})

app.use( (req:Request, res:Response) => {
    res.status(500).send('Internal server error');
})

connection.sync().then( () => {
    console.log('database connection established')
})
.catch( (err) => {
    console.log(err)
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port http://${process.env.DB_HOST}:${process.env.PORT}`);
})
