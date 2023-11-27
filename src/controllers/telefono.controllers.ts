import { RequestHandler } from "express";
import { Telefono } from '../models/telefono.models';
import { sendSuccessResponse,sendErrorResponse,sendErrorServer } from '../errors/messages';

export const getTelefonos: RequestHandler = async (req, res) => {
    try{

        const telefono = await Telefono.findAll();
        sendSuccessResponse(res,telefono,200)

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const getTelefonoById: RequestHandler = async (req, res) => {
    try {
     
        const telefono = await Telefono.findByPk(req.params.id);
        if (telefono) {
          sendSuccessResponse(res,telefono,200)

        } else {
          
          sendErrorResponse(res)
        }
      } catch (error) {
       
        const err = error as Error;
        sendErrorServer(res,err)
      }
}

export const createTelefono: RequestHandler = async (req, res) => {
    try{
        const telefono = await Telefono.create(req.body);
   
        sendSuccessResponse(res,telefono,201)

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const updateTelefono: RequestHandler = async (req, res) => {
    try {// Asume que los IDs se pasan como parámetros de consulta en la URL
        const telefono = await Telefono.findByPk(req.params.id);
        if (telefono) {
            await Telefono.update(req.body,{where: {id_telefono: req.params.id}});
            sendSuccessResponse(res,telefono,200)
        } else {
          sendErrorResponse(res)
        }
      } catch (error) {
        const err = error as Error;
        sendErrorServer(res,err)
      }
}

export const deleteTelefono: RequestHandler = async (req, res) => {
    try {

        const telefono = await Telefono.findByPk(req.params.id);
        if (telefono) {
            await Telefono.destroy({ where: { id_telefono: req.params.id} });
            sendSuccessResponse(res,telefono,200)
        } else {
          sendErrorResponse(res)
        }
      } catch (error) {
        const err = error as Error;
        sendErrorServer(res,err)
      }
}