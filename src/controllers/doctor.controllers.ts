import { RequestHandler } from "express";
import { Doctor } from '../models/doctores.models';
import { sendSuccessResponse,sendErrorResponse,sendErrorServer } from '../errors/messages';

export const getDoctores: RequestHandler = async (req, res) => {
    try{

        const doctores = await Doctor.findAll();

        if(doctores){
            sendSuccessResponse(res,doctores,200);
        }else{
            sendErrorResponse(res);
        }


    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const getDoctoresById: RequestHandler = async (req, res) => {
    try{
        const doctor = await Doctor.findByPk(req.params.id);
        if(doctor)
        {
            sendSuccessResponse(res,doctor,200);
        }else{
            sendErrorResponse(res);
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const createDoctor: RequestHandler = async (req, res) => {
    try{
        const doctor = await Doctor.create(req.body);
        sendSuccessResponse(res,doctor,201)

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err);
    }
}

export const updateDoctor: RequestHandler = async (req, res) => {
    try{
        const doctor = await Doctor.findByPk(req.params.id);
        
        if(doctor)
        {
            await Doctor.update(req.body,{
                where:{
                    id_profesional: req.params.id
                }
            });
            sendSuccessResponse(res,doctor,200);
        }else{
            sendErrorResponse(res);
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err);
    }
}

export const deleteDoctor: RequestHandler = async (req, res) => {
    try{
        const doctor = await Doctor.findByPk(req.params.id);
        
        if(doctor)
        {
            await Doctor.destroy({
                where: {
                    id_profesional: req.params.id
                }
            });
            sendSuccessResponse(res,doctor,200);
        }else{
            sendErrorResponse(res);
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err);
    }
}