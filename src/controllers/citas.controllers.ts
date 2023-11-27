import { RequestHandler } from "express";
import { Cita } from '../models/cita.models';
import { sendSuccessResponse , sendErrorResponse, sendErrorServer } from '../errors/messages';

export const getCitas: RequestHandler = async (req, res) => {
    try{

        const cita = await Cita.findAll();

        if(cita){
          sendSuccessResponse(res,cita,200);
        }else{
          sendErrorResponse(res)
        }


    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const getOneCita: RequestHandler = async (req, res) => {
    try {
        const { profesional, paciente } = req.query; // Asume que los IDs se pasan como parámetros de consulta en la URL
        const cita = await Cita.findOne({ where: {  id_profesional: profesional, id_numeroCedula: paciente } });
        if (cita) {
          sendSuccessResponse(res,cita,200);
        } else {
          sendErrorResponse(res)
        }
      } catch (error) {
        const err = error as Error;
        sendErrorServer(res,err);
      }
}
export const getCitaByEspecialidad: RequestHandler = async (req,res) =>{
    try{
      const especialidad = req.params.id
      const cita = await Cita.findOne({
        where:{id_especializacion: especialidad }
      });

      if(cita){
        sendSuccessResponse(res,cita,200);
      }else{
        sendErrorResponse(res)
      }
    }catch(error){
      const err = error as Error;
      sendErrorServer(res,err)
    }

}

export const getCitaByPaciente: RequestHandler = async (req,res) => {
  try {
    // const paciente = await Cita.findByPk(req.params.id)
      const paciente = req.params.id
      const cita = await Cita.findOne({
        where:{id_numeroCedula: paciente }
      });

    if(cita){
      sendSuccessResponse(res,cita,200);
    }else{
      sendErrorResponse(res)
    }
  } catch (error) {
    const err = error as Error;
    sendErrorServer(res,err)
  }
}

export const getCitaByDoctores: RequestHandler = async (req,res) => {
  try {
    // const doctor = await Cita.findByPk(req.params.id)
    const doctor = req.params.id
    const cita = await Cita.findOne({
      where:{id_profesional:doctor}
    });
    if(cita){
      sendSuccessResponse(res,cita,200);
    }else{
      sendErrorResponse(res)
    }
  } catch (error) {
    const err = error as Error;
    sendErrorServer(res,err)
  }

} 

export const createCita: RequestHandler = async (req, res) => {
    try{
        const cita = await Cita.create(req.body);
   
        sendSuccessResponse(res,cita,201);

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const updateCita: RequestHandler = async (req, res) => {
    try {
        const { profesional, paciente, fecha } = req.query; // Asume que los IDs se pasan como parámetros de consulta en la URL
        const cita = await Cita.findOne({ where: { fecha_hora: fecha, id_profesional: profesional, id_numeroCedula: paciente } });
        if (cita) {
            await Cita.update(req.body,{ where: { fecha_hora: fecha, id_profesional: profesional, id_numeroCedula: paciente } });
            sendSuccessResponse(res,cita,200);
        } else {
          sendErrorResponse(res)
        }
      } catch (error) {
        const err = error as Error;
        sendErrorServer(res,err)
      }
}

export const deleteCita: RequestHandler = async (req, res) => {
    try {
        const { profesional, paciente, fecha } = req.query; // Asume que los IDs se pasan como parámetros de consulta en la URL
        const cita = await Cita.findOne({ where: { fecha_hora: fecha, id_profesional: profesional, id_numeroCedula: paciente } });
        if (cita) {
            await Cita.destroy({ where: { fecha_hora: fecha, id_profesional: profesional, id_numeroCedula: paciente } });
            sendSuccessResponse(res,cita,200);
        } else {
          sendErrorResponse(res)
        }
      } catch (error) {
        const err = error as Error;
        sendErrorServer(res,err)
      }
}
