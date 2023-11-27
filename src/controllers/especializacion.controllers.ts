import { RequestHandler } from "express";
import { Especializacion } from '../models/especializacion.models';
import { sendSuccessResponse,sendErrorResponse,sendErrorServer } from '../errors/messages';

export const getEspecialidades: RequestHandler = async (req, res) => {
    try{

        const especializacion = await Especializacion.findAll();
        sendSuccessResponse(res,especializacion,200)

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const getEspecialidadById: RequestHandler = async (req, res) => {
    try{
        const especialidad = await Especializacion.findByPk(req.params.id);
        if(especialidad)
        {
            sendSuccessResponse(res,especialidad,200)
        }else{
            sendErrorResponse(res)
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const createEspecialidad: RequestHandler = async (req, res) => {
    try{
        const especialidad = await Especializacion.create(req.body);
   
        sendSuccessResponse(res,especialidad,201)

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const updateEspecialidad: RequestHandler = async (req, res) => {
    try{
        const especialidad = await Especializacion.findByPk(req.params.id);
        
        if(especialidad)
        {
            await Especializacion.update(req.body,{
                where:{
                    id_especializacion: req.params.id
                }
            });
            sendSuccessResponse(res,especialidad,200)
        }else{
            sendErrorResponse(res)
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const deleteEspecialidad: RequestHandler = async (req, res) => {
    try{
        const especialidad = await Especializacion.findByPk(req.params.id);
        
        if(especialidad)
        {
            await Especializacion.destroy({
                where: {
                    id_especializacion: req.params.id
                }
            });
            sendSuccessResponse(res,especialidad,200)
        }else{
            sendErrorResponse(res)
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}
