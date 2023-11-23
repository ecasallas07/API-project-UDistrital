import { RequestHandler } from "express";
import { Especializacion } from '../models/especializacion.models';
import { SUCCESS_MESSAGE,ERROR_MESSAGE,FAILURE_MESSAGE } from '../errors/messages';

export const getEspecialidades: RequestHandler = async (req, res) => {
    try{

        const especializacion = await Especializacion.findAll();
        res.status(200).json({
            message:SUCCESS_MESSAGE,
            data: especializacion
        });

    }catch(error){
        const err = error as Error;
        res.status(500).json({
            message:ERROR_MESSAGE,
             error: err.message
        })
    }
}

export const getEspecialidadById: RequestHandler = async (req, res) => {
    try{
        const especialidad = await Especializacion.findByPk(req.params.id);
        if(especialidad)
        {
            res.status(200).json({
                message:SUCCESS_MESSAGE,
                data: especialidad
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

export const createEspecialidad: RequestHandler = async (req, res) => {
    try{
        const especialidad = await Especializacion.create(req.body);
   
            res.status(201).json({
                message:SUCCESS_MESSAGE,
                data: especialidad
            });

    }catch(error){
        const err = error as Error;
        res.status(500).json({
            message:ERROR_MESSAGE,
             error: err.message
        })
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
            res.status(200).json({
                message:SUCCESS_MESSAGE,
                data: especialidad
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