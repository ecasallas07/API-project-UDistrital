import { RequestHandler } from "express";
import { Consultorio } from '../models/consultorio.models';
import { SUCCESS_MESSAGE,ERROR_MESSAGE,FAILURE_MESSAGE } from '../errors/messages';

export const getConsultorios: RequestHandler = async (req, res) => {
    try{

        const consultorio = await Consultorio.findAll();
        res.status(200).json({
            message:SUCCESS_MESSAGE,
            data: consultorio
        });

    }catch(error){
        const err = error as Error;
        res.status(500).json({
            message:ERROR_MESSAGE,
            error: err.message
        })
    }
}

export const getConsultorioById: RequestHandler = async (req, res) => {
    try{
        const consultorio = await Consultorio.findByPk(req.params.id);
        if(consultorio)
        {
            res.status(200).json({
                message:SUCCESS_MESSAGE,
                data: consultorio
            });
        }else{
            res.status(404).json({
                message:FAILURE_MESSAGE
            });
        }

    }catch(error){
        const err = error as Error;
        res.status(500).json({
            message:ERROR_MESSAGE,
            error: err.message
        })
    }
}

export const createConsultorio: RequestHandler = async (req, res) => {
    try{
        const consultorio = await Consultorio.create(req.body);
   
            res.status(201).json({
                message:SUCCESS_MESSAGE,
                data: consultorio
            });

    }catch(error){
        const err = error as Error;
        res.status(500).json({
            message:ERROR_MESSAGE,
             error: err.message
        })
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
            res.status(200).json({
                message:SUCCESS_MESSAGE
            });
        }else{
            res.status(404).json({
                message:FAILURE_MESSAGE
            });
        }

    }catch(error){
        const err = error as Error;
        res.status(500).json({
            message:ERROR_MESSAGE,
            error: err.message
        })
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
            res.status(200).json({
                message:SUCCESS_MESSAGE,
                data: consultorio
            });
        }else{
            res.status(404).json({
                message:FAILURE_MESSAGE
            });
        }

    }catch(error){
        const err = error as Error;
        res.status(500).json({  
            message:ERROR_MESSAGE,
            error: err.message
        })
    }
}