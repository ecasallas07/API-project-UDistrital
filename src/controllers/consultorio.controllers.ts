import { RequestHandler } from "express";
import { Consultorio } from '../models/consultorio.models';
import {  sendSuccessResponse,sendErrorResponse,sendErrorServer } from '../errors/messages';

export const getConsultorios: RequestHandler = async (req, res) => {
    try{

        const consultorio = await Consultorio.findAll();

        if(consultorio){
            sendSuccessResponse(res,consultorio,200);
        }else{
            sendErrorResponse(res);
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const getConsultorioById: RequestHandler = async (req, res) => {
    try{
        const consultorio = await Consultorio.findByPk(req.params.id);
        if(consultorio)
        {
            sendSuccessResponse(res,consultorio,200)
        }else{
            sendErrorResponse(res)
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const createConsultorio: RequestHandler = async (req, res) => {
    try{
        const consultorio = await Consultorio.create(req.body);
        
        sendSuccessResponse(res,consultorio,201)

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const updateConsultorio: RequestHandler = async (req, res) => {
    try{
        const consultorio = await Consultorio.findByPk(req.params.id);
        
        if(consultorio)
        {
            await Consultorio.update(req.body,{
                where:{
                    id_consultorio: req.params.id
                }
            });
            sendSuccessResponse(res,consultorio,200)
        }else{
            sendErrorResponse(res)
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const deleteConsultorio: RequestHandler = async (req, res) => {
    try{
        const consultorio = await Consultorio.findByPk(req.params.id);
        
        if(consultorio)
        {
            await Consultorio.destroy({
                where: {
                    id_consultorio: req.params.id
                }
            });
            sendSuccessResponse(res,consultorio,200)
        }else{
            sendErrorResponse(res)
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}