export const sendSuccessResponse = (res: Response|any, data: any,code:Number):void => {
    const SUCCESS_MESSAGE = "Operación exitosa!🙋‍♂️"; // Puedes personalizar el mensaje según tus necesidades
    res.status(code).json({
      message: SUCCESS_MESSAGE,
      data: data,
    });
  };
  
export const sendErrorResponse = (res: Response|any):void =>{
    const FAILURE_MESSAGE = 'No se encontró el recurso👀'
    res.status(404).json({ 
        message: FAILURE_MESSAGE 
      });
};

export const sendErrorServer = (res:Response|any, err:any) =>{
    const ERROR_MESSAGE = 'Ha ocurrido un error💤 en el server🤖';
    res.status(500).json({
        message:ERROR_MESSAGE,
        error: err.message
    })
};