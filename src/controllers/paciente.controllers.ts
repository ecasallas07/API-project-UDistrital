import { RequestHandler } from "express";
import { Paciente } from '../models/paciente.models';
import { sendSuccessResponse,sendErrorResponse,sendErrorServer } from '../errors/messages';

export const getPacientes: RequestHandler = async (req, res) => {
    try{

        const pacientes = await Paciente.findAll();
        sendSuccessResponse(res,pacientes,200)

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const getPacientesById: RequestHandler = async (req, res) => {
    try{
        const paciente = await Paciente.findByPk(req.params.id);
        if(paciente)
        {
            sendSuccessResponse(res,paciente,200)
        }else{
            sendErrorResponse(res)
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const createPaciente: RequestHandler = async (req, res) => {
    try{
        const paciente = await Paciente.create(req.body);
   
        sendSuccessResponse(res,paciente,201)

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const updatePaciente: RequestHandler = async (req, res) => {
    try{
        const paciente = await Paciente.findByPk(req.params.id);
        
        if(paciente)
        {
            await Paciente.update(req.body,{
                where:{
                    id_numeroCedula: req.params.id
                }
            });
            sendSuccessResponse(res,paciente,200)
        }else{
            sendErrorResponse(res)
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const deletePaciente: RequestHandler = async (req, res) => {
    try{
        const paciente = await Paciente.findByPk(req.params.id);
        
        if(paciente)
        {
            await Paciente.destroy({
                where: {
                    id_numeroCedula: req.params.id
                }
            });
            sendSuccessResponse(res,paciente,200)
        }else{
            sendErrorResponse(res)
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}