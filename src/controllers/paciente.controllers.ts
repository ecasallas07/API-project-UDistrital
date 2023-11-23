import { RequestHandler } from "express";
import { Paciente } from '../models/paciente.models';
import { SUCCESS_MESSAGE,ERROR_MESSAGE,FAILURE_MESSAGE } from '../errors/messages';

export const getPacientes: RequestHandler = async (req, res) => {
    try{

        const pacientes = await Paciente.findAll();
        res.status(200).json({
            message:SUCCESS_MESSAGE,
            data: pacientes
        });

    }catch(error){
        const err = error as Error;
        res.status(500).json({
            message:ERROR_MESSAGE,
             error: err.message
        })
    }
}

export const getPacientesById: RequestHandler = async (req, res) => {
    try{
        const paciente = await Paciente.findByPk(req.params.id);
        if(paciente)
        {
            res.status(200).json({
                message:SUCCESS_MESSAGE,
                data: paciente
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

export const createPaciente: RequestHandler = async (req, res) => {
    try{
        const paciente = await Paciente.create(req.body);
   
            res.status(201).json({
                message:SUCCESS_MESSAGE,
                data: paciente
            });

    }catch(error){
        const err = error as Error;
        res.status(500).json({
            message:ERROR_MESSAGE,
             error: err.message
        })
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
            res.status(200).json({
                message:SUCCESS_MESSAGE,
                data: paciente
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