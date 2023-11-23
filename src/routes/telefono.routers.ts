import { Router } from "express"
import { createTelefono, deleteTelefono, getTelefonos, getTelefonoById, updateTelefono } from "../controllers/telefono.controllers";

const router = Router();

router.get('/', getTelefonos)
router.get('/:id', getTelefonoById)
router.post('/', createTelefono)
router.put('/:id', updateTelefono)
router.delete('/:id', deleteTelefono)

export default router;