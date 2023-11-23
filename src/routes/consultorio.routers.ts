import { Router } from "express"
import { createConsultorio, deleteConsultorio, getConsultorios, getConsultorioById, updateConsultorio } from "../controllers/consultorio.controllers";

const router = Router();

router.get('/', getConsultorios)
router.get('/:id', getConsultorioById)
router.post('/', createConsultorio)
router.put('/:id', updateConsultorio)
router.delete('/:id', deleteConsultorio)

export default router;