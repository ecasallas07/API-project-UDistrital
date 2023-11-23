import { Router } from "express"
import { createEspecialidad, deleteEspecialidad, getEspecialidades, getEspecialidadById, updateEspecialidad } from "../controllers/especializacion.controllers";

const router = Router();

router.get('/', getEspecialidades)
router.get('/:id', getEspecialidadById)
router.post('/', createEspecialidad)
router.put('/:id', updateEspecialidad)
router.delete('/:id', deleteEspecialidad)

export default router;