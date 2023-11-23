import { RequestHandler } from "express";
import { Cita } from '../models/cita.models';
import { SUCCESS_MESSAGE,ERROR_MESSAGE,FAILURE_MESSAGE } from '../errors/messages';

export const getCitas: RequestHandler = async (req, res) => {
    try{

        const cita = await Cita.findAll();
        res.status(200).json({
            message:SUCCESS_MESSAGE,
            data: cita
        });

    }catch(error){
        const err = error as Error;
        res.status(500).json({
            message:ERROR_MESSAGE,
            error: err.message
        })
    }
}

export const getOneCita: RequestHandler = async (req, res) => {
    try {
        const { profesional, paciente, fecha } = req.query; // Asume que los IDs se pasan como parámetros de consulta en la URL
        const cita = await Cita.findOne({ where: { fecha_hora: fecha, id_profesional: profesional, id_numeroCedula: paciente } });
        if (cita) {
          res.status(200).json({ 
            message: SUCCESS_MESSAGE, 
            data: cita 
          });
        } else {
          res.status(404).json({ 
            message: FAILURE_MESSAGE 
          });
        }
      } catch (error) {
        const err = error as Error;
        res.status(500).json({ 
          message: ERROR_MESSAGE, 
          error: err.message 
        });
      }
}

export const createCita: RequestHandler = async (req, res) => {
    try{
        const cita = await Cita.create(req.body);
   
            res.status(201).json({
                message:SUCCESS_MESSAGE,
                data: cita
            });

    }catch(error){
        const err = error as Error;
        res.status(500).json({
            message:ERROR_MESSAGE,
            error: err.message
        })
    }
}

export const updateCita: RequestHandler = async (req, res) => {
    try {
        const { profesional, paciente, fecha } = req.query; // Asume que los IDs se pasan como parámetros de consulta en la URL
        const cita = await Cita.findOne({ where: { fecha_hora: fecha, id_profesional: profesional, id_numeroCedula: paciente } });
        if (cita) {
            await Cita.update(req.body,{ where: { fecha_hora: fecha, id_profesional: profesional, id_numeroCedula: paciente } });
          res.status(200).json({
             message: SUCCESS_MESSAGE, 
             data: cita 
            });
        } else {
          res.status(404).json({
             message: FAILURE_MESSAGE 
            });
        }
      } catch (error) {
        const err = error as Error;
        res.status(500).json({ 
          message: ERROR_MESSAGE, 
          error: err.message 
        });
      }
}

export const deleteCita: RequestHandler = async (req, res) => {
    try {
        const { profesional, paciente, fecha } = req.query; // Asume que los IDs se pasan como parámetros de consulta en la URL
        const cita = await Cita.findOne({ where: { fecha_hora: fecha, id_profesional: profesional, id_numeroCedula: paciente } });
        if (cita) {
            await Cita.destroy({ where: { fecha_hora: fecha, id_profesional: profesional, id_numeroCedula: paciente } });
          res.status(200).json({ 
              message: SUCCESS_MESSAGE, 
              data: cita 
          });
        } else {
          res.status(404).json({ 
            message: FAILURE_MESSAGE 
          });
        }
      } catch (error) {
        const err = error as Error;
        res.status(500).json({ 
          message: ERROR_MESSAGE, 
          error: err.message 
        });
      }
}