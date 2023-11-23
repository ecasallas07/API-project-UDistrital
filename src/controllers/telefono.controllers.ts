import { RequestHandler } from "express";
import { Telefono } from '../models/telefono.models';
import { SUCCESS_MESSAGE,ERROR_MESSAGE,FAILURE_MESSAGE } from '../errors/messages';

export const getTelefonos: RequestHandler = async (req, res) => {
    try{

        const telefono = await Telefono.findAll();
        res.status(200).json({
            message:SUCCESS_MESSAGE,
            data: telefono
        });

    }catch(error){
        const err = error as Error;
        res.status(500).json({
            message:ERROR_MESSAGE,
            error: err.message
        })
    }
}

export const getTelefonoById: RequestHandler = async (req, res) => {
    try {
     
        const telefono = await Telefono.findByPk(req.params.id);
        if (telefono) {

          res.status(200).json({
             message:SUCCESS_MESSAGE, 
             data: telefono });

        } else {
          
          res.status(404).json({
             message: FAILURE_MESSAGE,
             });
        }
      } catch (error) {
       
        const err = error as Error;
        res.status(500).json({
           message: ERROR_MESSAGE, 
           error: err.message });
      }
}

export const createTelefono: RequestHandler = async (req, res) => {
    try{
        const telefono = await Telefono.create(req.body);
   
            res.status(201).json({
                message:SUCCESS_MESSAGE,
                data: telefono
            });

    }catch(error){
        const err = error as Error;
        res.status(500).json({
             message:ERROR_MESSAGE,
             error: err.message
        })
    }
}

export const updateTelefono: RequestHandler = async (req, res) => {
    try {// Asume que los IDs se pasan como parámetros de consulta en la URL
        const telefono = await Telefono.findByPk(req.params.id);
        if (telefono) {
            await Telefono.update(req.body,{where: {id_telefono: telefono}});
          res.status(200).json({ 
            message: SUCCESS_MESSAGE,
            data: telefono
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

export const deleteTelefono: RequestHandler = async (req, res) => {
    try {

        const telefono = await Telefono.findByPk(req.params.id);
        if (telefono) {
            await Telefono.destroy({ where: { id_telefono: telefono} });
          res.status(200).json({
             message: SUCCESS_MESSAGE, 
             data: telefono 
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