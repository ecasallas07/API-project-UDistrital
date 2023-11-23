import { RequestHandler } from "express";
import { Doctor } from '../models/doctores.models';
import { SUCCESS_MESSAGE,ERROR_MESSAGE,FAILURE_MESSAGE } from '../errors/messages';

export const getDoctores: RequestHandler = async (req, res) => {
    try{

        const doctores = await Doctor.findAll();
        res.status(200).json({
            message:SUCCESS_MESSAGE,
            data: doctores
        });

    }catch(error){
        const err = error as Error;
        res.status(500).json({
            message:ERROR_MESSAGE,
            error: err.message
        })
    }
}

export const getDoctoresById: RequestHandler = async (req, res) => {
    try{
        const doctor = await Doctor.findByPk(req.params.id);
        if(doctor)
        {
            res.status(200).json({
                message:SUCCESS_MESSAGE,
                data: doctor
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

export const createDoctor: RequestHandler = async (req, res) => {
    try{
        const doctor = await Doctor.create(req.body);
   
            res.status(201).json({
                message:SUCCESS_MESSAGE,
                data: doctor
            });

    }catch(error){
        const err = error as Error;
        res.status(500).json({
            message:ERROR_MESSAGE,
             error: err.message
        })
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
            res.status(200).json({
                message:SUCCESS_MESSAGE,
                data: doctor
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