import { Router } from "express"
import { createCita, deleteCita, getCitas, getOneCita, updateCita,getCitaByEspecialidad, getCitaByDoctores,getCitaByPaciente } from "../controllers/citas.controllers";

const router = Router();

router.get('/', getCitas)
router.get('/one', getOneCita)
router.post('/', createCita)
router.put('/update', updateCita)
router.delete('/:id', deleteCita)
router.get('/especialidad/:id',getCitaByEspecialidad)
router.get('/doctor/:id',getCitaByDoctores)
router.get('/paciente/:id',getCitaByPaciente)

export default router;